import {  Router } from 'express'
import { Simulador } from '../controllers/simulador'

let app = Router()

app.post('/simulacion/add', Simulador.getInstance.addData); // Agrega una solucion, este aún no lo utilizamos
app.post('/simulacion/reporte/add', Simulador.getInstance.addReporte); // Este es para agregar la data que me paso Pablo (Esta en el escritorio)
app.get('/simulaciones', Simulador.getInstance.getAllData); // Lista las simulaciones aún no lo usamos
app.get('/simulacion/reportes/all', Simulador.getInstance.getAllReport);// Este lista todos los datos de reporte sin ningun filtro
app.get('/simulacion/reportes', Simulador.getInstance.getReportCord);// Este lista solo las cordenadas de cada una de las paradas
app.get('/simulacion/:uuid_device', Simulador.getInstance.getDataDevice);// lista las simulaciones por uuid_device aún no lo usamos
app.get('/simulacion/reporte/:id_location', Simulador.getInstance.getReportLatLng)// lista las cordenadas de las paradas por el id_location

export default app;