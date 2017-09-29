import IPlayer from "./i/iPlayer";
export default class Player implements IPlayer {
    name: string;
    play: number;
    score: number;
    isStarter: boolean;
    constructor(name: string, play: number, isStarter: boolean);
}
