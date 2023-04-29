export class Square {
    constructor(color, side) {
        this.color = color;
        this.side = side;
    }
    area() {
        return Math.pow(this.side, 2);
    }
    draw() {
        const cssClass = `color: ${this.color};`;
        console.log(`%cThe square has an area of ${this.area()}`, cssClass);
    }
}
