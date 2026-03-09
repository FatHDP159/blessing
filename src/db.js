import mongoose, { mongo } from "mongoose";

//Creamos funcion para conectar a la base de datos, esta funcion se va a llamar en el index.js para iniciar la conexion a la base de datos cada vez que se inicie el servidor
export const connectDB = async () => {

    try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log(">>> DB is connected");
    } catch (error) {
        console.log(error);
    }

}