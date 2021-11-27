const mongoose= require('mongoose')

const serviceSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }

})


const ServiceSchema= new mongoose.model('service',serviceSchema)

module.exports= ServiceSchema;