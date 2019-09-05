import * as mongoose from 'mongoose'
const Schema = mongoose.Schema

const Reporte = new Schema({
    Opcion: String,
    id_location: Number,
    lat: Number,
    lng: Number,
    position: Number,
    time_reported: String,
    type: String,
    Stops_Usuarios: String,
    pasajeros :String
})

export const reporteModel = mongoose.model('Reporte', Reporte)