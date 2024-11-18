import ENVIROMENT from "./config/enviroment.config.js";
import express, { text } from "express";

import mongoose from "./db/config.js"
import statusRouter from "./router/status.router.js";
import productRouter from "./router/products.router.js";
import authRouter from "./router/auth.router.js";
import transporter from "./config/transporter.config.js";
import database_pool from "./db/config.js";
import ProductRepository from "./repositories/product.repository.js";

const app = express();
const PORT = ENVIROMENT.PORT || 3000

app.use(cors());
app.use(express.json({limit: '5mb'}))
app.use(verifyApikeyMiddleware)



app.use('/api/status', statusRouter)
app.use('api/auth', authRouter)
app.use('/api/products', productRouter)



ProductRepository.getProducts()


app.listen(PORT, () => {
    console.log(`hola edesde el puertoo http://localhost:${PORT}`)
})