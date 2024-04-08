const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")


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