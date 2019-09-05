"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("../models/test");
var Test = /** @class */ (function () {
    function Test() {
    }
    Object.defineProperty(Test, "getInstance", {
        get: function () {
            if (this.instance == null) {
                this.instance = new this;
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    Test.prototype.sendTest = function (req, res) {
        var data = new test_1.testModel({
            nameTest: req.body.name,
            type: true
        });
        data.save(function (err, newTest) {
            if (err) {
                return res.status(500)
                    .json(err);
            }
            res.status(201).json(newTest);
        });
    };
    Test.prototype.getTest = function (req, res) {
        test_1.testModel.find({}, function (err, tests) {
            if (err) {
                return res.status(500)
                    .json(err);
            }
            res.status(201).json(tests);
        });
    };
    return Test;
}());
exports.Test = Test;
