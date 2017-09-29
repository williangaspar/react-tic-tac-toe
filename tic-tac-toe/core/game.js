"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = (function () {
    function Game(grid) {
        this.grid = grid;
    }
    Game.prototype.start = function (player1, player2) {
        this.turn = player1.isStarter ? player1.play : player2.play;
        this.player1 = player1;
        this.player2 = player2;
        this.grid.reset();
    };
    Game.prototype.play = function (x, y) {
        var play = this.turn;
        var success = this.grid.setCell(x, y, play);
        this.turn = this.turn === this.player1.play ? this.player2.play : this.player1.play;
        this.checkGameOver(success, play);
        return success;
    };
    Game.prototype.onGameOver = function (cb) {
        this.gameOverCb = cb;
    };
    Game.prototype.getTurn = function () {
        return this.turn;
    };
    Game.prototype.getGrid = function () {
        return this.grid;
    };
    Game.prototype.checkGameOver = function (success, play) {
        if (success) {
            var line = this.grid.getVictoryLine(play);
            if (line) {
                var winner = play === this.player1.play ? this.player1 : this.player2;
                this.gameOverCb({ winner: winner, line: line });
            }
            else if (this.grid.isFull()) {
                this.gameOverCb(null);
            }
        }
    };
    return Game;
}());
exports.default = Game;
