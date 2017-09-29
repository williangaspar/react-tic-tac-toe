import IGame from "./i/iGame";
import IGrid from "./i/iGrid";
import IPlayer from "./i/iPlayer";
import IVictory from "./i/iVictory";
export default class Game implements IGame {
    private grid;
    private player1;
    private player2;
    private turn;
    private gameOverCb;
    constructor(grid: IGrid);
    start(player1: IPlayer, player2: IPlayer): void;
    play(x: number, y: number): boolean;
    onGameOver(cb: (victory: IVictory | null) => void): void;
    getTurn(): number;
    getGrid(): IGrid;
    private checkGameOver(success, play);
}
