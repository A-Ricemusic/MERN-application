//npm external modules needed are express,cors,mongoose,dotenv

//get base dependancies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//app creation and base use statements for external dependancies

const app = express();
app.use(cors());
app.use(express.json());

//local variables and path variables setup
const portNumber =process.env.PORTNUMBER || 5000;
const mongoDbUri = process.env.mongoDbUri
const dbConnection = mongoose.connection;
const routesDirs = process.env.routesDirs
const modelsDirs = process.env.modelsDirs

const pathConfig = {
    'routeUser': `${routesDirs}/userRoute`,

    'routeFood': `${routesDirs}/foodRoute`
}


//unable able to find for some reason not sure why
//const userRouter = require(pathConfig['routeUser']);
//const foodRouter = require(pathConfig['routeFood']);

//database connection Mongo DB
mongoose.connect(mongoDbUri);
dbConnection.once('open', () => {
    console.log("MongoDB connection sucessful");
});

//URL Routing configuartion, and use statements
//app.use('/user',userRouter)
// app.use('/food', foodRouter)



//Starts Server
app.listen(portNumber, () =>{
console.log(`Server is running ${portNumber}`)
console.log(pathConfig['routeUser'])
console.log(pathConfig['routeFood'])
});  