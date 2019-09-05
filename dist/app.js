"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./utils/server");
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var connection_1 = require("./utils/connection");
var simulacion_1 = __importDefault(require("./routes/simulacion"));
/**
 * compile
 *  tsc -w  ./raiz
 *  nodemon dist/ nodemon app.js
*/
/**
 *  lat DECIMAL(10,8)	Obligatorio
    lng	DECIMAL(10,8)	Obligatorio
    battery_level	INT	Opcional
    uuid_device	VARCHAR(50)	Obligatorio
    rumbo	DECIMAL(10,8)	Opcional
    speed	DECIMAL(10,8)	Opcional

 */
server_1.Server.getInstance
    .app.use(body_parser_1.default.urlencoded({ extended: true }));
server_1.Server.getInstance
    .app.use(body_parser_1.default.json());
server_1.Server.getInstance
    .app.use(cors_1.default({ origin: true, credentials: true }));
server_1.Server.getInstance.app.use('/api/v1', simulacion_1.default);
connection_1.configDB("mongodb://localhost:27017/simulador").then(function (dbConfig) {
    server_1.Server.getInstance.startAPP(function () {
        console.log("\n            [ API ] Running on port " + server_1.Server.getInstance.port + "\n            " + dbConfig + "\n        ");
    });
}).catch(function (e) { console.log(e); });
