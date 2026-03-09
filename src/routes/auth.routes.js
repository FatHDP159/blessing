import { Router } from "express";
import {login, register, logout, profile} from "../controllers/auth.controllers.js";
import { authRequired } from "../middlewares/validatetoken.js";


const router = Router(); //Creamos una instancia del router de express

router.post("/register" , register); //Ruta para registrar un nuevo usuario, esta ruta va a recibir una peticion POST y va a llamar a la funcion register que se encuentra en el controlador auth.controllers.js
router.post("/login" , login); //Ruta para iniciar sesion, esta ruta va a recibir una peticion POST y va a llamar a la funcion login que se encuentra en el controlador auth.controllers.js
router.post("/logout", logout);//Ruta para cerrar sesion, esta ruta va a recibir una peticion POST y va a eliminar la cookie del token
router.get("/profile",  authRequired ,profile); //Ruta para obtener el perfil del usuario, esta ruta va a recibir una peticion GET y va a llamar a la funcion profile que se encuentra en el controlador auth.controllers.js



export default router; //Exportamos el router para poder usarlo en el index.js