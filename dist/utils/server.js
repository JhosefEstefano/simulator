"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.port = Number(process.env.PORT) || 3002;
    }
    Object.defineProperty(Server, "getInstance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new this;
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Server.prototype.startAPP = function (callback) {
        this.app.listen(this.port, callback);
    };
    return Server;
}());
exports.Server = Server;
