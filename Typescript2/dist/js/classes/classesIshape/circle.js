export class Circle {
    constructor(color, radio) {
        this.color = color;
        this.radio = radio;
    }
    area() {
        return Math.PI * Math.pow(this.radio, 2);
    }
    draw() {
        const cssClass = `color: ${this.color}`;
        console.log(`%cThe circle has an are of ${this.area()}`, cssClass);
    }
}
