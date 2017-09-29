export default interface ICell {
    set(value: number): boolean;
    get(): number;
    reset(): void;
}
