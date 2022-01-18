//require('./db/connect')
const express=require('express')
const connectDb = require('./db/connect')
const task=require("./routs/task")
require('dotenv').config()
const app=express()
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',task)

const start=async()=>{

    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(5000,console.log("server is listening..."))

    }
catch(error){
    console.log(error)
}
}

start()

