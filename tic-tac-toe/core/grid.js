"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Grid = (function () {
    function Grid(Cell) {
        this.range = [0, 1, 2];
        this.plays = 0;
        this.cellGrid = this.range.map(function () { return []; });
        this.runGrid(addCell.bind(this));
        function addCell(x, y) {
            this.cellGrid[x][y] = new Cell();
        }
    }
    Grid.prototype.reset = function () {
        this.plays = 0;
        this.runGrid(reset.bind(this));
        function reset(x, y) {
            this.cellGrid[x][y].reset();
        }
    };
    Grid.prototype.setCell = function (x, y, play) {
        if (x in this.range && y in this.range) {
            var cell = this.cellGrid[x][y];
            var success = false;
            if (cell) {
                success = cell.set(play);
                this.plays += success ? 1 : 0;
            }
            return success;
        }
        return false;
    };
    Grid.prototype.getCell = function (x, y) {
        if (x in this.range && y in this.range) {
            return this.cellGrid[x][y].get();
        }
        return -1;
    };
    Grid.prototype.getVictoryLine = function (play) {
        var victory = null;
        var userGrid = this.getUserGrid(play);
        victory =
            this.isVerticallVictory(userGrid) ||
                this.isHorizontalVictory(userGrid) ||
                this.isDiagonalVictory(userGrid);
        return victory;
    };
    Grid.prototype.isFull = function () {
        return this.plays === 9;
    };
    Grid.prototype.getGrid = function () {
        function map(item) {
            return item.map(function (innerItem) { return innerItem.get(); });
        }
        return this.cellGrid.map(map);
    };
    Grid.prototype.getUserGrid = function (play) {
        var grid = this.range.map(function () { return []; });
        function check(x, y) {
            grid[x][y] = this.cellGrid[x][y].get() === play ? play : null;
        }
        this.runGrid(check.bind(this));
        return grid;
    };
    Grid.prototype.isVerticallVictory = function (grid) {
        for (var i = 0; i < this.range.length; i++) {
            if (grid[i].filter(function (item) { return item !== null; }).length === 3) {
                return { first: [i, 0], second: [i, 1], third: [i, 2] };
            }
        }
        return null;
    };
    Grid.prototype.isHorizontalVictory = function (grid) {
        for (var i = 0; i < this.range.length; i++) {
            if (grid[0][i] && grid[1][i] && grid[2][i]) {
                return { first: [0, i], second: [1, i], third: [2, i] };
            }
        }
        return null;
    };
    Grid.prototype.isDiagonalVictory = function (grid) {
        if (grid[0][0] !== null && grid[1][1] !== null && grid[2][2] !== null) {
            return { first: [0, 0], second: [1, 1], third: [2, 2] };
        }
        if (grid[2][0] !== null && grid[1][1] !== null && grid[0][2] !== null) {
            return { first: [2, 0], second: [1, 1], third: [0, 2] };
        }
        return null;
    };
    Grid.prototype.runGrid = function (action) {
        for (var i = 0; i < this.range.length; i++) {
            for (var j = 0; j < this.range.length; j++) {
                action(i, j);
            }
        }
    };
    return Grid;
}());
exports.default = Grid;
