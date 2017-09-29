import ICell from "./i/iCell";
export default class Cell implements ICell {
    private state;
    set(value: number): boolean;
    get(): number;
    reset(): void;
}
