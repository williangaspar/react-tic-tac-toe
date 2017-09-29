"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ePlay_1 = require("./e/ePlay");
var Cell = (function () {
    function Cell() {
        this.state = -1;
    }
    Cell.prototype.set = function (value) {
        if (this.state === -1 && value in ePlay_1.default) {
            this.state = value;
            return true;
        }
        else {
            return false;
        }
    };
    Cell.prototype.get = function () {
        return this.state;
    };
    Cell.prototype.reset = function () {
        this.state = -1;
    };
    return Cell;
}());
exports.default = Cell;
