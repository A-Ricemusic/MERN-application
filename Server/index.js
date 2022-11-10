//get dependancies
//npm modules needed are express,cors,mongoose,dotenv
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


//local variables
const app = express();
const portNumber =process.env.PORTNUMBER || 5000;
const mongoDbUri = process.env.mongoDbUri
const dbConnection = mongoose.connection;

//database connection Mongo DB
mongoose.connect(mongoDbUri);
dbConnection.once('open', () => {
    console.log("MongoDB connection sucessful");
});

//URL Routing configuartion
// const userRouter = require('./routes/routeuser');
// const foodRouter = require('./routes/routefood');

// app.use('/user',userRouter)
// app.use('/food', foodRouter)



//Starts Server


app.listen(portNumber, () =>{
console.log(`Server is running ${portNumber}`)
});  