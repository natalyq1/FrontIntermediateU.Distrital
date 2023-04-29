import { IShape } from "../../interfaces/ishape";

export class Triangle implements IShape {
    constructor(public color: string, public base: number, public height: number) {}
    area(): number {
      //throw new Error('Method not implemented.')
      return (this.base, this.height)/2;
    }
    draw(): void{
      const cssClass = `color: ${this.color}`
      console.log(`%cThe Triangle has an are of ${this.area()}`, cssClass);
    }
  }