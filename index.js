const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const movieRoutes = require("./src/routes/movie_routes");
// bodyParser es un middleware de express
// lo que hace es parsear el cuerpo de las solicitudes entrantes
// en formato JSON, multipartes y lo convierte en un objeto JavaScript
const bodyParser = require("body-parser")


// poder acceder a leer el archivo .env
require( 'dotenv' ).config() ;
const CONNECTION_PORT = process.env.PORT || 3005;
app.listen(CONNECTION_PORT,()=>{
    console.log(`Server running on port ${CONNECTION_PORT}`);
[ ] });

const mongo_connect = ()=>{
    try{
        mongoose
        .connect(process.env.DATABASE_CONNECTION_STRING)
        .then(() =>{
            console.log("Connected to the database")
        })
        .catch((error)=>{
            console.log("Error connecting to the database: ", error);
        })
    }catch(err){
        console.log("Connection Error!",err);


    }
};


mongo_connect();

// Rutas
app.use('/api/v1/movies', movieRoutes)