import ICPU from "./i/iCpu";
import IGrid from "./i/iGrid";
export default class CPU implements ICPU {
    private player;
    private grid;
    constructor(play: number, grid: IGrid);
    play(): number[];
    private tryToWin(grid);
    private avoidToLose(grid);
    private randomGuess(grid);
    private findSpotBetween(grid, play);
    private findSpotInLine(line, play);
}
