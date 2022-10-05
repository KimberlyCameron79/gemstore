// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const gemSchema = new Schema({
    name: { type: String, required: true }, 
    price: { type: String, required: true }, 
    image: { type: String, required: true }, 
    description: { type: String, required: true }, 
    inStock: { type: Number, required: true }, 
    
   
})

// create a Model from our Schema
const Collection = mongoose.model('Collection', gemSchema )

// export our Model
module.exports = Collection
