"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var simulador_1 = require("../controllers/simulador");
var app = express_1.Router();
app.post('/simulacion/add', simulador_1.Simulador.getInstance.addData); // Agrega una solucion, este aún no lo utilizamos
app.post('/simulacion/reporte/add', simulador_1.Simulador.getInstance.addReporte); // Este es para agregar la data que me paso Pablo (Esta en el escritorio)
app.get('/simulaciones', simulador_1.Simulador.getInstance.getAllData); // Lista las simulaciones aún no lo usamos
app.get('/simulacion/reportes/all', simulador_1.Simulador.getInstance.getAllReport); // Este lista todos los datos de reporte sin ningun filtro
app.get('/simulacion/reportes', simulador_1.Simulador.getInstance.getReportCord); // Este lista solo las cordenadas de cada una de las paradas
app.get('/simulacion/:uuid_device', simulador_1.Simulador.getInstance.getDataDevice); // lista las simulaciones por uuid_device aún no lo usamos
app.get('/simulacion/reporte/:id_location', simulador_1.Simulador.getInstance.getReportLatLng); // lista las cordenadas de las paradas por el id_location
exports.default = app;
