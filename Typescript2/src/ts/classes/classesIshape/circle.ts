import { IShape } from "../../interfaces/ishape";

export class Circle implements IShape {
    constructor(public color: string, public radio: number) {}
    area(): number {
      //throw new Error('Method not implemented.')
      return Math.PI * Math.pow(this.radio, 2);
    }
    draw(): void{
      const cssClass = `color: ${this.color}`
      console.log(`%cThe circle has an are of ${this.area()}`, cssClass);
    }
  }
  