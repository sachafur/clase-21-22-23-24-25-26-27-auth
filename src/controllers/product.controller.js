import ProductRepository from "../repositories/product.repository.js"
import ResponseBuilder from "../utils/builders/responseBuilder.js"

//Crear el schema en mongo db
//Desarrollar cada controlador 

//Que recibo
//nada

//Que respondo en caso de que este todo bien
//Lista de productos activos [Products]

/* 
FIRMA CON EL FRONTEND, me comprometo a crear este endpoint
ENDPOINT: /api/products
Method: GET

headers: 
    - x-api-key
    - Authorization

response: {
    ok: true,
    status: 200,
    message: productos obtenidos,
    payload: {
        products: [
            {
                title,
                price, 
                stock,
                description,
                category,
                _id,
                active, 
                creado_en
            }
        ]
    }
}

*/

export const getAllProductController = async (req, res) => {
    try{

        const products = await ProductRepository.getProducts()
        const response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setMessage('Productos obtenidos')
        .setPayload({
            products: products
        })
        .build()
        return res.json(response)
    }
    catch(error){

    }
}


//recibo
/* 
params: id (el id del product)
*/

//Respondo
/* 
product (el producto encontrado)
*/

export const getProductByIdController = async (req, res) => {
    try{
        const {product_id} = req.params
        const product_found = await ProductRepository.getProductById(product_id)
        if(!product_found){
            const repsonse = new ResponseBuilder()
            .setOk(false)
            .setStatus(404)
            .setMessage('Product not found')
            .setPayload({
                detail:`El producto con id ${product_id} no existe`
            })
            .build()
            return res.status(404).json(repsonse)
        }
        const response = new ResponseBuilder()
        .setOk(true)
        .setStatus(200)
        .setMessage('Productos obtenidos')
        .setPayload({
            product: product_found
        })
        .build()
        return res.json(response)
    }
    catch(error){
        console.error(error.message)
    }
}

export const createProductController = (req, res) => {

}

export const updateProductController = (req, res) => {

}

export const deleteProductController = (req, res) => {
