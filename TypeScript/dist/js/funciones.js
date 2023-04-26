"use strict";
console.log("funciones");
const mensaje = () => {
    console.log("Desde una funcion");
};
const areaCirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
};
function areaTriangulo() {
    console.log("Area del triangulo");
}
mensaje();
let area = areaCirculo(3);
console.log(area);
console.log(typeof area);
areaTriangulo();
function mensaje2(msg) {
    console.log(msg);
}
mensaje2(100);
mensaje2("abcd");
function mensaje3(msg) {
    console.log(msg);
}
mensaje3(300);
mensaje3("300");
const incrementarV1 = (valor1, valor2) => {
    if (valor2) {
        return valor1 + valor2;
    }
    else {
        return valor1 + 2;
    }
};
let r1 = incrementarV1(10, 20);
console.log(r1);
let r2 = incrementarV1(100);
console.log(r2);
const incrementarV2 = (valor1, valor2 = 10) => {
    return valor1 + valor2;
};
let r3 = incrementarV2(10, 20);
console.log(r3);
let r4 = incrementarV2(200);
console.log(r4);
let mostrarMensaje;
mostrarMensaje = (nombre, apellido) => {
    console.log(`${nombre} ${apellido}`);
};
mostrarMensaje('Eliana', 'Giraldo');
