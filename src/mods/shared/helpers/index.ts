import { CommonElementAndMoveSequence } from "../types";

export const getArea = (element: CommonElementAndMoveSequence, init: string[] = []): string[] => {
  const area: string[] = init;
  for (let y = 0; y <= element.getSizeY(); y++) {
      for (let x = 0; x <= element.getSizeX(); x++) {
          const value = `${element.getPos().x + x}x${element.getPos().y + y}`;
          if (area.indexOf(value) === -1) {
              area.push(value);
          }
      }
  }
  return area;
};

export const isInArea = ( areaOne: string[], areaTwo: string[] ): boolean => {
    return areaOne.some( item => areaTwo.indexOf( item ) !== -1 );
};
