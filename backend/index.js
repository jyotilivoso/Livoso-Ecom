const express = require('express');
const cors=require ('cors')
require('dotenv').config();
const app = express();
app.use(cors());
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


