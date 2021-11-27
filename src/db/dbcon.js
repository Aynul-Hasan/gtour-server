const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`database connection success....`)

}).catch((err)=>{
    console.log(`databese connection failed.....${err}`)
}
  
)