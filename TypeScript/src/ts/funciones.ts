console.log("funciones");

//: void para decir que no retorna ningun dato
const mensaje = (): void => {
  console.log("Desde una funcion");
  //no se retorna ningun dato, por :void da error
  //return 'hello'
};

const areaCirculo = (radio: number): number => {
  //pi * radio2
  const area = Math.PI * Math.pow(radio, 2); //el math permite hacer calculos rapidos
  return area;
};

function areaTriangulo() {
  console.log("Area del triangulo");
}

mensaje();

let area: number = areaCirculo(3);
console.log(area); //28.274333882308138
console.log(typeof area); //number

areaTriangulo();

//parametros de tipo union
function mensaje2(msg: string | number): void {
  console.log(msg);
}
mensaje2(100); //100
mensaje2("abcd"); //abcd

type TipoMensaje = string | number;
//parametros de tipo alias
function mensaje3(msg: TipoMensaje) {
  console.log(msg);
}
mensaje3(300); //300
mensaje3("300"); //300-type string
//genera error
//mensaje3(false)

// definir parametros opcionales
const incrementarV1 = (valor1: number, valor2?: number): number => {
  //? quiere decir opcional
  if (valor2) {
    return valor1 + valor2;
  } else {
    return valor1 + 2;
  }
  //expresion ternaria
  //return valor2 ? valor1 + valor2 : valor1 +2
};
let r1: number = incrementarV1(10, 20);
console.log(r1); //30

let r2: number = incrementarV1(100);
console.log(r2); //102

//definicion de parametros con valor por default
const incrementarV2 = (valor1: number, valor2: number = 10): number => {
    return valor1 + valor2
}

let r3 = incrementarV2(10, 20)
console.log(r3);//30

let r4 = incrementarV2(200)
console.log(r4);//210


//definicion del signature o encabezado de una funcion
let mostrarMensaje : (a: string, b: string) => void
//crea la funcion respetando la definicion del signature
mostrarMensaje = (nombre: string, apellido : string) => {
    console.log(`${nombre} ${apellido}`);
    
}
//invoca la funcion 
mostrarMensaje ('Eliana', 'Giraldo')//Eliana Giraldo