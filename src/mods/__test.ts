interface Pos {
  x: number;
  y: number;
}
// -------------------------------------------------------------------------------

const getArea = (element: ElementInterface): string[] => {
  const area = [];
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


// -------------------------------------------------------------------------------
interface ElementInterface {
  getPos(): Pos;
  getSizeX(): number;
  getSizeY(): number;
  setPos(pos: Pos, tick: number): void;
  getSpeed(): number;
  getArea(): string[];
  getAreaParams(pos: Pos): string[];
}

class Element1 implements ElementInterface {
  private pos: Pos;
  private sizeX: number;
  private sizeY: number;

  constructor(pos: Pos) {
      this.pos = pos;
      this.sizeX = 3;
      this.sizeY = 3;
  }

  getSpeed() {
      return 3;
  }

  getSizeX(): number {
      return this.sizeX;
  }

  getSizeY(): number {
      return this.sizeY;
  }

  getPos(): Pos {
      return this.pos;
  }

  setPos(pos: Pos, tick: number) {
      if (tick % this.getSpeed() === 0) {
          this.pos = pos;
      }
  }

  getArea(): string[] {
      return this.getAreaParams(this.getPos());
  }

  getAreaParams(pos: Pos): string[] {
      const area = [];
      for (let y = 0; y <= this.getSizeY(); y++) {
          for (let x = 0; x <= this.getSizeX(); x++) {
              const value = `${pos.x + x}x${pos.y + y}`;
              if (area.indexOf(value) === -1) {
                  area.push(value);
              }
          }
      }
      return area;
  }
}

// -------------------------------------------------------------------------------

interface ElementWrapInterface extends ElementInterface {

}

class ElementWrap implements ElementWrapInterface {
  private element: ElementInterface;
  private pos: Pos;

  constructor(element: ElementInterface, pos: Pos) {
      this.pos = pos;
      this.element = element;
  }

  getSpeed() {
      return this.element.getSpeed();
  }

  getPos(): Pos {
      return this.pos;
  }

  setPos(pos: Pos, tick: number) {
      this.element.setPos(this.pos, tick);
  }

  getSizeX(): number {
      return this.element.getSizeX();
  }

  getSizeY(): number {
      return this.element.getSizeY();
  }

  getArea(): string[] {
      const elementArea = this.element.getArea();
      const nextElementArea = this.element.getAreaParams(this.getPos());
      return [...new Set([...elementArea, ...nextElementArea])];
  }
}


// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------

const element = new Element1({ x: 1, y: 2 });
const elementWrap = new ElementWrap(element, { x: 3, y: 4 });

console.log(element.getPos())
// console.log(getArea(element))
console.log(elementWrap.getPos())
// console.log(getArea(elementWrap))

console.log(element.getArea())
console.log(elementWrap.getArea())

// element 
const tickCounter = 11;
element.setPos({ x: 3, y: 4 }, tickCounter);
