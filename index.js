import express from 'express';
import {log} from './mongo.js';
import dotenv from 'dotenv'
import cors from "cors"
dotenv.config()
let apikey=process.env.API_KEY
const app= express()
app.use(cors())
app.get(`/${apikey}/:nombre`,async function(req,res){
   let carta=await log.find({nombre: req.params.nombre})
res.json(carta)
console.log(carta)
})

app.get(`/${apikey}`,async function(req,res){
 let carta= await log.find({})
 res.json(carta)
})


app.listen(process.env.PORT || 3000)

