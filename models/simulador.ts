import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const Simulador = new Schema({
    lat: Number,
    lng: Number,
    battery_level: Number,
    uuid_device: String,
    rumbo: Number,
    speed: Number
})

export const simuladorModel = mongoose.model('Simulador', Simulador)