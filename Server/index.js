const express = require('express');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://A_Ricemusic:A_Ricemusic123@cluster0.0zixhf2.mongodb.net/?retryWrites=true&w=majority')
const app = express();

app.listen(300, () =>{
console.log("Server Starts")
});  