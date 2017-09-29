import { ILine } from "./iVictory";
export default interface IGrid {
    setCell(x: number, y: number, play: number): boolean;
    getCell(x: number, y: number): number;
    getVictoryLine(play: number): ILine | null;
    isFull(): boolean;
    getGrid(): number[][];
    reset(): void;
}
