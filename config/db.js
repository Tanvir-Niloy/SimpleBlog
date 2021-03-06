const mongoose = require('mongoose')
const colors = require('colors')

//connecting to mongodb
const connectDB=async ()=>{
    const conn=await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`mongoDB connected: ${conn.connection.host}`.bgCyan.bold)


}
module.exports= connectDB;