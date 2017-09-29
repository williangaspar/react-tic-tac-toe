"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ePlay_1 = require("./e/ePlay");
var CPU = (function () {
    function CPU(play, grid) {
        this.player = play;
        this.grid = grid;
    }
    CPU.prototype.play = function () {
        var grid = this.grid.getGrid();
        var play = this.tryToWin(grid);
        if (play.length) {
            return play;
        }
        play = this.avoidToLose(grid);
        if (play.length) {
            return play;
        }
        return this.randomGuess(grid);
    };
    CPU.prototype.tryToWin = function (grid) {
        return this.findSpotBetween(grid, this.player);
    };
    CPU.prototype.avoidToLose = function (grid) {
        var player2 = this.player === ePlay_1.default.X ? ePlay_1.default.O : ePlay_1.default.X;
        return this.findSpotBetween(grid, player2);
    };
    CPU.prototype.randomGuess = function (grid) {
        var available = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (grid[i][j] === -1) {
                    available.push([i, j]);
                }
            }
        }
        var index = Math.floor(Math.random() * available.length);
        return available[index];
    };
    CPU.prototype.findSpotBetween = function (grid, play) {
        var index = -1;
        for (var i = 0; i < 3; i++) {
            index = this.findSpotInLine(grid[i], play);
            if (index > -1) {
                return [i, index];
            }
        }
        for (var i = 0; i < 3; i++) {
            index = this.findSpotInLine([grid[0][i], grid[1][i], grid[2][i]], play);
            if (index > -1) {
                return [index, i];
            }
        }
        index = this.findSpotInLine([grid[0][0], grid[1][1], grid[2][2]], play);
        if (index > -1) {
            return [index, index];
        }
        var diagonal = [[0, 2], [1, 1], [2, 0]];
        index = this.findSpotInLine([grid[0][2], grid[1][1], grid[2][0]], play);
        if (index > -1) {
            return diagonal[index];
        }
        return [];
    };
    CPU.prototype.findSpotInLine = function (line, play) {
        if (line[0] === play && line[1] === play && line[2] === -1) {
            return 2;
        }
        if (line[0] === play && line[2] === play && line[1] === -1) {
            return 1;
        }
        if (line[1] === play && line[2] === play && line[0] === -1) {
            return 0;
        }
        return -1;
    };
    return CPU;
}());
exports.default = CPU;
