import { Request, Response } from 'express'
import { simuladorModel } from '../models/simulador'
import { reporteModel } from "../models/reporte";

export class Simulador {
    private static instance: Simulador

    public static get getInstance() {
        if (this.instance == null) {
            this.instance = new this
        }
        return this.instance
    }

    constructor() { }

    public addData(req: Request, res: Response) {
        let data = new simuladorModel({
            lat: req.body.lat,
            lng: req.body.lng,
            battery_level: req.body.battery_level,
            uuid_device: req.body.uuid_device,
            rumbo: req.body.rumbo,
            speed: req.body.speed
        })

        if (req.body.lat && req.body.lng && req.body.uuid_device) {
            data.save((err, dataSave) => {
                if (err) return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!dataSave) return res.status(404).send({ message: 'No se pudo guardar la simulación' });
                return res.status(200).send({ simulador: dataSave, message: 'Simulación guardada' });
            })
        } else if (!req.body.lat) {
            return res.status(200).send({ message: 'El dato LAT es obligatorio' });
        }
        else if (!req.body.lng) {
            return res.status(200).send({ message: 'El dato LNG es obligatorio' });
        }
        else if (!req.body.uuid_device) {
            return res.status(200).send({ message: 'El dato UUI_DEVICE es obligatorio' });
        }
    }

    public addReporte(req: Request, res: Response) {
        let data = new reporteModel({
            Opcion: req.body.opcion,
            id_location: req.body.id_location,
            lat: req.body.lat,
            lng: req.body.lng,
            position: req.body.position,
            time_reported: req.body.time_reported,
            type: req.body.type,
            Stops_Usuarios: req.body.Stops_Usuarios,
            pasajeros: req.body.pasajeros
        })

        if (req.body.lat && req.body.lng) {
            data.save((err, dataSave) => {
                if (err) return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!dataSave) return res.status(404).send({ message: 'No se pudo guardar la simulación' });
                return res.status(200).send({ reporte: dataSave, message: 'reporte registrado' });
            })
        } else if (!req.body.lat) {
            return res.status(200).send({ message: 'El dato LAT es obligatorio' });
        }
        else if (!req.body.lng) {
            return res.status(200).send({ message: 'El dato LNG es obligatorio' });
        }
    }

    public getAllData(req: Request, res: Response) {
        simuladorModel.find((err, allData) => {
            if (err) return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!allData) return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: allData });
        })
    }

    public getDataDevice(req: Request, res: Response) {
        let device = req.params.uuid_device
        simuladorModel.find({ uuid_device: device }, (err, data) => {
            if (err) {
                res.status(500).send({ message: 'Algo salió mal: ' + err });
            }
            if (!data) {
                res.status(404).send({ message: 'No hay datos' });
            } else {
                res.status(200).send({ data });
            }
        })
    }

    public getAllReport(req: Request, res:Response){
        reporteModel.find((err, allReport)=>{
            if (err) return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!allReport) return res.status(404).send({ message: 'No hay datos' });
                return res.status(200).send({ data: allReport });
        })
    }

    public getReportLatLng(req: Request, res: Response) {
        let id_location = req.params.id_location;
        reporteModel.findOne({ id_location: id_location }, { _id: 0, __v: 0, id_location: 0, position: 0, 
            time_reported: 0,type: 0, Stops_Usuarios: 0, pasajeros: 0 }, (err, reportData) => {
                if (err) return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!reportData) return res.status(404).send({ message: 'No hay datos' });
                return res.status(200).send({ data: reportData });
            })
    }
}