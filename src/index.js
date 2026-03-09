import app from './app.js' ;
import {connectDB}  from './db.js'; //Importamos la funcion para conectar a la base de datos

connectDB(); //Llamamos a la funcion para conectar a la base de datos
app.listen(4000)
console.log("Server on port " + 4000)


