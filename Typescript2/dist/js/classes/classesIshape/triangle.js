export class Triangle {
    constructor(color, base, height) {
        this.color = color;
        this.base = base;
        this.height = height;
    }
    area() {
        return (this.base, this.height) / 2;
    }
    draw() {
        const cssClass = `color: ${this.color}`;
        console.log(`%cThe Triangle has an are of ${this.area()}`, cssClass);
    }
}
