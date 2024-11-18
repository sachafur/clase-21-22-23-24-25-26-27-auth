import database_pool from "../db/configMysql.js";
import Product from "../models/product.model.js";
/*
class ProductRepository{
    static async getProduct(){
       return Product.find({active: true})
    }
    static async getProductById(id){
        return Product.findById(id)
    }

    static async createProduct(product_data){
        const new_product = new Product(product_data)
        return new new_product.save()
    }

    static async updateProduct(id, new_product_data,){
        return Product.findByIdAndUpedate(id, new_product_data, {new: true})
    }

    static async deleteProduct(id){
        return Product.findByIdAndUpedate(id, {active: false}, {new: true})
    }
}

export default ProductRepository*/
class ProductRepository {

    static async getProducts(){
    
        const query_string = 'SELECT * FROM products WHERE activee = true'
        const result = await database_pool.execute(query)
        console.log(result)
    }
}

export default ProductRepository