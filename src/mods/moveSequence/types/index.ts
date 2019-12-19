import { CommonElementAndMoveSequence, ElementSetNextPhase } from "../../shared/types";
import { ElementInterface } from "../../element/types";

export interface MoveSequenceInterafce extends CommonElementAndMoveSequence, ElementSetNextPhase {
  getElement(): ElementInterface;
}