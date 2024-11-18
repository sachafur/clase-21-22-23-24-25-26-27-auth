import mongoose from "mongoose";
import ENVIROMENT from "../config/enviroment.config";


mongoose.connect(ENVIROMENT.DB_URL)
.then(
    () => {
        console.log('Conexion exitosacon con la BD!')
    }
)
.catch(
    (error) => {
        console.error('Error de conexion')
    }
)
export defoult mongoose