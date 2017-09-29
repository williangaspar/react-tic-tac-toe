"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = (function () {
    function Player(name, play, isStarter) {
        this.name = name;
        this.play = play;
        this.isStarter = isStarter;
        this.score = 0;
    }
    return Player;
}());
exports.default = Player;
