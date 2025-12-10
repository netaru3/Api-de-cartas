import express from 'express'
import {log} from './mongo.js'

const app= express()
app.get('/:nombre',async function(req,res){
   let carta=await log.find({nombre: req.params.nombre})
res.json(carta)
console.log(carta)
})

app.listen(3000)

