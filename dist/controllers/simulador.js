"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var simulador_1 = require("../models/simulador");
var reporte_1 = require("../models/reporte");
var Simulador = /** @class */ (function () {
    function Simulador() {
    }
    Object.defineProperty(Simulador, "getInstance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new this;
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Simulador.prototype.addData = function (req, res) {
        var data = new simulador_1.simuladorModel({
            lat: req.body.lat,
            lng: req.body.lng,
            battery_level: req.body.battery_level,
            uuid_device: req.body.uuid_device,
            rumbo: req.body.rumbo,
            speed: req.body.speed
        });
        if (req.body.lat && req.body.lng && req.body.uuid_device) {
            data.save(function (err, dataSave) {
                if (err)
                    return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!dataSave)
                    return res.status(404).send({ message: 'No se pudo guardar la simulación' });
                return res.status(200).send({ simulador: dataSave, message: 'Simulación guardada' });
            });
        }
        else if (!req.body.lat) {
            return res.status(200).send({ message: 'El dato LAT es obligatorio' });
        }
        else if (!req.body.lng) {
            return res.status(200).send({ message: 'El dato LNG es obligatorio' });
        }
        else if (!req.body.uuid_device) {
            return res.status(200).send({ message: 'El dato UUI_DEVICE es obligatorio' });
        }
    };
    Simulador.prototype.addReporte = function (req, res) {
        var data = new reporte_1.reporteModel({
            Opcion: req.body.opcion,
            id_location: req.body.id_location,
            lat: req.body.lat,
            lng: req.body.lng,
            position: req.body.position,
            time_reported: req.body.time_reported,
            type: req.body.type,
            Stops_Usuarios: req.body.Stops_Usuarios,
            pasajeros: req.body.pasajeros
        });
        if (req.body.lat && req.body.lng) {
            data.save(function (err, dataSave) {
                if (err)
                    return res.status(500).send({ message: 'Algo salió mal: ' + err });
                if (!dataSave)
                    return res.status(404).send({ message: 'No se pudo guardar la simulación' });
                return res.status(200).send({ reporte: dataSave, message: 'reporte registrado' });
            });
        }
        else if (!req.body.lat) {
            return res.status(200).send({ message: 'El dato LAT es obligatorio' });
        }
        else if (!req.body.lng) {
            return res.status(200).send({ message: 'El dato LNG es obligatorio' });
        }
    };
    Simulador.prototype.getAllData = function (req, res) {
        simulador_1.simuladorModel.find(function (err, allData) {
            if (err)
                return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!allData)
                return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: allData });
        });
    };
    Simulador.prototype.getDataDevice = function (req, res) {
        var device = req.params.uuid_device;
        simulador_1.simuladorModel.find({ uuid_device: device }, function (err, data) {
            if (err) {
                res.status(500).send({ message: 'Algo salió mal: ' + err });
            }
            if (!data) {
                res.status(404).send({ message: 'No hay datos' });
            }
            else {
                res.status(200).send({ data: data });
            }
        });
    };
    Simulador.prototype.getAllReport = function (req, res) {
        reporte_1.reporteModel.find(function (err, allReport) {
            if (err)
                return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!allReport)
                return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: allReport });
        });
    };
    Simulador.prototype.getReportLatLng = function (req, res) {
        var id_location = req.params.id_location;
        reporte_1.reporteModel.findOne({ id_location: id_location }, { _id: 0, __v: 0, id_location: 0, position: 0,
            time_reported: 0, type: 0, Stops_Usuarios: 0, pasajeros: 0 }, function (err, reportData) {
            if (err)
                return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!reportData)
                return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: reportData });
        });
    };
    Simulador.prototype.getReportCord = function (req, res) {
        reporte_1.reporteModel.find({}, { _id: 0, __v: 0, id_location: 0, position: 0,
            time_reported: 0, type: 0, Stops_Usuarios: 0, pasajeros: 0 }, function (err, reportData) {
            if (err)
                return res.status(500).send({ message: 'Algo salió mal: ' + err });
            if (!reportData)
                return res.status(404).send({ message: 'No hay datos' });
            return res.status(200).send({ data: reportData });
        });
    };
    return Simulador;
}());
exports.Simulador = Simulador;
