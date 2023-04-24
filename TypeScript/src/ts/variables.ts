console.log("TypeScript app");

//tipo implicito --> JS Style
let edad: number = 55;
console.log(edad);
console.log(typeof edad);

edad = 30;
console.log(edad);

//tipo implicito --> JS Style
//tipos primitivos: number, string, boolean
let months: number;
let firstName: string;
let isAdult: boolean;
months = 12;

//tipo Union, permite mas de un tipo de dato
let identificador: number | string
identificador = 3
identificador = 'Catalina'
console.log(identificador);//Catalina

//tipo Alias
type StringOrNumber = number | string
//definir una variable con un alias que ya tiene unos tipos de datos
let variable: StringOrNumber
variable = 3
variable = 'Frontend'
console.log(variable);//Frontend

// Tipo any
let dato: any
dato = 10
dato = 'Backend'
dato = false
console.log(dato);//false


