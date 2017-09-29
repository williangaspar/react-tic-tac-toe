import IPlayer from "./iPlayer";
export default interface IVictory {
    winner: IPlayer;
    line: ILine;
}
export interface ILine {
    first: number[];
    second: number[];
    third: number[];
}
