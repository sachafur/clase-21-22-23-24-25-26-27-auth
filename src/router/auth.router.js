import express from "express";
import { 
    forgotPasswordController, 
    loginController, 
    registerUserController, 
    resetTokenController, 
    verifyMailValidationTokenController 
} from "../controllers/auth.controller.js";

const authRouter = express.Router()

authRouter.post('/register', verifyApikeyMiddleware, registerUserController)
authRouter.get('/verify/:verification_token', verifyMailValidationTokenController)
authRouter.post('/login', verifyApikeyMiddleware, loginController)
authRouter.post('/forgot-password', verifyApikeyMiddleware, forgotPasswordController)
authRouter.put('/reset-password/:reset_token', verifyApikeyMiddleware, resetTokenController)

/* 
resetTokenController

Obtener del body la password
Decodificar/verify el reset_token
Buscar al usuario con el email recibido en el reset_token
Encriptar la password
Guardar la nueva contraseña en el campo password del usuario
*/
export default authRouter