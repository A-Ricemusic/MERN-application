const express = require('express');
const mongoose = require('mongoose')
const app = express();


mongoose.connect('mongodb+srv://A_RicemusicEspc:A_RicemusicEspc123@cluster0.s9ibflx.mongodb.net/?retryWrites=true&w=majority');

const dbConnection = mongoose.connection;

dbConnection.once('open', () => {
    console.log("MongoDB connection sucessful");
});


app.listen(3000, () =>{
console.log("Server Starts")
});  