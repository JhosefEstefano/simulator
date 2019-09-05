"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = __importStar(require("mongoose"));
var Schema = mongoose.Schema;
var Reporte = new Schema({
    Opcion: String,
    id_location: Number,
    lat: Number,
    lng: Number,
    position: Number,
    time_reported: String,
    type: String,
    Stops_Usuarios: String,
    pasajeros: String
});
exports.reporteModel = mongoose.model('Reporte', Reporte);
