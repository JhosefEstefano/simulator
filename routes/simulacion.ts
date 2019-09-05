import {  Router } from 'express'
import { Simulador } from '../controllers/simulador'

let app = Router()

app.post('/simulacion/add', Simulador.getInstance.addData);
app.post('/simulacion/reporte/add', Simulador.getInstance.addReporte);
app.get('/simulaciones', Simulador.getInstance.getAllData);
app.get('/simulacion/reportes', Simulador.getInstance.getAllReport);
app.get('/simulacion/:uuid_device', Simulador.getInstance.getDataDevice);
app.get('/simulacion/reporte/:id_location', Simulador.getInstance.getReportLatLng)

export default app;