console.log("interfaces");

import { Circle } from "./classes/classesIshape/circle.js";
import { Square } from "./classes/classesIshape/square.js";
import { Triangle } from "./classes/classesIshape/triangle.js";
import { IShape } from "./interfaces/ishape.js";

//define un objeto por su interface
let shape1, shape2: IShape;

//crea objetos que implementan la interface
shape1 = new Square("red", 4);
shape2 = new Circle("green", 2);

//invoca metodos en la interface
console.log(shape1, shape2); // Square {color: 'red'} Circle {color: 'green'}

console.log(`El area del cuadrado es ${shape1.area()}`); //16
//console.log(`El area del circulo es ${shape2.area()}`);//dex.js:18 Uncaught Error: Method not implemented.

console.log(`El area del circulo es ${shape2.area()}`); //El area del circulo es 12.566370614359172

shape1.draw() //texto en rojo
shape2.draw() //texto en verde

//arreglos de objetos que cumplen con la interface
let shapes: IShape[] = []

//agrega objetos que cumplen con la interface
shapes.push(new Circle("magenta", 10));
shapes.push(new Square("cyan", 5));
shapes.push(new Circle("orange", 5));
shapes.push(new Triangle("white", 2, 3));
shapes.push(new Circle("green", 5));
shapes.push(new Triangle("gray", 10, 20));
shapes.push(new Circle("purple", 5));
//eso es muchos console logs con colores

//invoca el m'etodo de cada objeto que esta definido por la interface
shapes.forEach(shape => shape.draw())