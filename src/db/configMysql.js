

import mysql from 'mysql2/promise'
import ENVIROMENT from '../config/enviroment.config.js'

const database_pool = mysql.createPool({
    host: ENVIROMENT.MYSQL.HOST,
    user: ENVIROMENT.MYSQL.USERNAME,
    password: ENVIROMENT.MYSQL.PASSWORD,
    database: ENVIROMENT.MYSQL.DATABASE,
    connectionLimit: 10
})


const checkConnection = async () => {
    try{
        const connection = await database_pool.getConnection()//Devolver la conexion
        await connection.query('SELECT 1') //Consulta simple de excusa para verificar la conexion
        //Cuando la consulta falle dara un throw
        console.log('Conexion exitosa con MYSQL')
        connection.release() //Matar la conexion de la pool
    }
    catch(error){
        console.error("Error al conectar con la base de datos")
    }
}
checkConnection()

export default database_pool