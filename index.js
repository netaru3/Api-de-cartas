import express from 'express';
import {log} from './mongo.js';
import dotenv from 'dotenv'
dotenv.config()
let apikey= "jejejmenx3"
const app= express()
app.get(`${apikey}/:nombre`,async function(req,res){
   let carta=await log.find({nombre: req.params.nombre})
res.json(carta)
console.log(carta)
})

app.get("/",function(req,res){
 res.send("holiwis")
})

app.listen(process.env.PORT || 3000)

