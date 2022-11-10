//File for Food Schema
//makes food schema for MongoDb database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema(
    {
     username: {type: String, required: true },
     foodname: {type: String, required: true },
     description: {type: String, required: true },
     calories: {type: Number, required: false },
     date: {type: Date, required: true },
    }, 

    {timestamps: true,}
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
