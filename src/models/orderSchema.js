const mongoose= require('mongoose')

const orderSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    tourid:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    date:{
        type:String
    },
    phone:{
        type:Number,
        required:true
    }
})

const OrderSchema= new mongoose.model('order',orderSchema)

module.exports= OrderSchema;