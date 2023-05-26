import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
const app = express()
dotenv.config()
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = 8080
Connection(username,password);
app.listen(PORT,()=>{
    console.log(`Server started on PORT : ${PORT}`)
})
DefaultData();