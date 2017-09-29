"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("./core/cell");
var grid_1 = require("./core/grid");
var player_1 = require("./core/player");
exports.Player = player_1.default;
var game_1 = require("./core/game");
var cpu_1 = require("./core/cpu");
exports.CPU = cpu_1.default;
function game() {
    var grid = new grid_1.default(cell_1.default);
    return new game_1.default(grid);
}
exports.default = game;
