import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

await mongoose.connect(process.env.URL)

let esquema= new mongoose.Schema({
    nombre: String,
    descripcion: String,
    atq: Number,
    hp: Number,
    imagen:{
        type: String,
        required: false
    },
    pasiva: {
        type:String,
        required: false
    },
    activa:{type:String,
        required: false} ,
    cooldown:{type:Number,
        required: false},
    tipo_de_movimiento: String,

})

export let log= mongoose.model("cartas",esquema)