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
var Simulador = new Schema({
    lat: Number,
    lng: Number,
    battery_level: Number,
    uuid_device: String,
    rumbo: Number,
    speed: Number
});
exports.simuladorModel = mongoose.model('Simulador', Simulador);
