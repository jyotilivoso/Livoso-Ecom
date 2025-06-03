const express = require('express');
const cors=require ('cors')
require('dotenv').config();
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials:true
}))
app.use(express.json());

const connectDB = require('./config/db');
const router=require('./routes')
app.use('/api',router)


const PORT=8080 || process.env.PORT
this
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log('connet to db')
        console.log("server is running",PORT)
    })
})



