export interface ElementKaBoomInterface {
    setNextPhase(phase: number): void;
    shouldRemove(): boolean;
    getPhase(): number;
}