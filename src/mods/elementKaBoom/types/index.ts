import { ElementInterface } from "../../element/types";
import { ElementSetNextPhase } from "../../shared/types";

export interface ElementKaBoomInterface extends ElementInterface, ElementSetNextPhase {
    getPhase(): number;
}