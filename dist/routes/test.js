"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var test_1 = require("../controllers/test");
exports.app = express_1.Router();
exports.app.post('/test', test_1.Test.getInstance.sendTest);
exports.app.get('/test', test_1.Test.getInstance.getTest);
