const express= require('express')
const app= express()
const port= process.env.PORT || 8000 ;
const cors= require('cors')
require('./db/dbcon.js')
require('dotenv').config()
const OrderSchema= require('./models/orderSchema')
const ServiceSchema=require('./models/serviceSchema');


app.use(express.json())
// middleware 
app.use(cors())

// routers
app.get('/',(req,res)=>{
    res.send('hi')
})

app.get('/service',async(req,res)=>{
    const result= await ServiceSchema.find()
    res.status(201).send(result)
})

app.post('/service',async(req,res)=>{
    console.log(req.body)
    const {title, desc, price,image}=req.body;
    const store =new ServiceSchema({title,desc,image,price})
     const result=await store.save()
    //  console.log(result)
     res.status(201).send(result)
})

app.get('/order',async(req,res)=>{
    const order= await OrderSchema.find()
    res.send(order)
})

app.get('/order/user/:email',async(req,res)=>{
    const email=req.params.email
        const result= await OrderSchema.find({email})
        // console.log(email) 
        res.status(200).send(result)
})

app.post('/order',async(req,res)=>{
        const {name,email,address,tourid,status,phone}=req.body
        const store= new OrderSchema({name,email,address,tourid,status,phone})
        const result= await store.save()
        res.status(201).send(result)
})
app.put('/order/:id',async(req,res)=>{
    const isfind= await OrderSchema.updateOne({ _id:req.params.id }, { $set: { status:req.body.status } })
    res.status(200).send(isfind)
    //  isfind.updateOne({ _id: doc._id }, { $set: { name: 'foo' } })
})
app.delete('/order/user/:id',async(req,res)=>{
    try{
        const id= req.params.id
        const del=await OrderSchema.deleteOne({id})
        res.status(200).send(del)
    }catch(err){

    }
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})