import ICell from "./i/iCell";
import IGrid from "./i/iGrid";
import { ILine } from "./i/iVictory";
export default class Grid implements IGrid {
    private cellGrid;
    private range;
    private plays;
    constructor(Cell: new () => ICell);
    reset(): void;
    setCell(x: number, y: number, play: number): boolean;
    getCell(x: number, y: number): number;
    getVictoryLine(play: number): ILine | null;
    isFull(): boolean;
    getGrid(): number[][];
    private getUserGrid(play);
    private isVerticallVictory(grid);
    private isHorizontalVictory(grid);
    private isDiagonalVictory(grid);
    private runGrid(action);
}
