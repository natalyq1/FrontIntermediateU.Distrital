//destructuring
//se usa en objetos muy grandes, se llaman propiedad sin necesidad de acceder con el punto
//La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
console.log('app')

const usuario = {
  nombre: 'catalina',
  edad: 21,
  correo: 'cata@gmail.com',
  locacion: 'cartagena',
}

console.log(usuario) //{nombre: 'catalina', edad: 21}

//acceder a propiedades
const nombre = usuario.nombre
const edad = usuario.edad

console.log(nombre) //catalina
console.log(edad) //21

const usuario2 = {
  name: 'catalina',
  age: 21,
  correo: 'cata@gmail.com',
  locacion: 'cartagena',
}
//accede a propiedades con destructuring
const { name, age, correo, locacion } = usuario2
console.log(name)
console.log(age)
console.log(correo)
console.log(locacion)

const usuario3 = {
  apellido: 'catalina',
  años: 21,
  email: 'cata@gmail.com',
  lugar: 'cartagena',
}
//accede a propiedades con destructuring renombrando variables
const { apellido: firstName, años, email, lugar } = usuario3
console.log(firstName)
console.log(años)
console.log(email)
console.log(lugar)

//objeto
const weather = {
  today: { min: 9, max: 20 },
  tomorrow: { min: 5, max: 10 },
}

console.log(weather)

//accede una propiedad compleja
const {
  tomorrow: { max },
} = weather

//accede a una propiedad compleja renombrando la variable
const {
  tomorrow: { max: maxTomorrow },
} = weather

console.log(max)
console.log(maxTomorrow)

//destruturing en funciones

function imprimirUbicacionV1(user) {
  console.log(user.ciudad, user.pais)
}
function imprimirUbicacionV2({ ciudad, pais }) {
  console.log(ciudad, pais)
}

const user = {
  nombre: 'jhon',
  apellido: 'cardozo',
  ciudad: 'medellin',
  pais: 'Colombia',
}
//invocar la funcion
imprimirUbicacionV1(user)
imprimirUbicacionV2(user)

//SWAPING
//TRADICIONAL
let a = 5
let b = 10
let temp = a //5
a = b //10
b = temp[ //5
  //SWAPING CON DESTRUCTURING
  (a, b)
] = [b, a]
console.log(a) //10
console.log(b) //[10,10]

//destructuring con arreglos
const numeros = [10, 20, 30, 40, 50, 60, 70]
//acceso por subindice- tradicional
const primero = numeros[0]
const segundo = numeros[1]
//acceso por destructuring
const [first, second, third] = numeros
//acceso por destructuring saltando posiciones
const [uno, dos, , cuarto, , , septimo] = numeros
//destructuring con operador spread ...
const [p, , , q, ...resto] = numeros
//destructuring de una posicion con un valor por default
const [, , l = 30] = numeros

console.log(primero, segundo) //10, 20
console.log(first, second, third) // 10 20 30
console.log(uno, dos, cuarto, septimo) //10 20 40 70

console.log(resto) //(3) [50, 60, 70]
console.log(l) //30

const nombreCompleto = 'Cata Cardozo'

const nombramiento = nombreCompleto.split(' ')
console.log(nombramiento) //(2) ['Cata', 'Cardozo']

//convierte string a array y hace destructuring de cada posicion en variables
const [fisrtN, lastN] = nombreCompleto.split(' ')
console.log(fisrtN) //Cata
console.log(lastN) //Cardozo

//destructuring de un arreglo retornado de una funcion
function calcular(numero1, numero2) {
  const suma = numero1 + numero2
  const resta = numero1 > numero2 ? numero1 - numero2 : numero2 - numero1
  const division = numero1 / numero2
  const multiplicacion = numero1 * numero2
  return [suma, resta, multiplicacion, division]
}
//destructuring
const [suma, resta, multiplicacion, division] = calcular(2, 8)

console.log(suma, resta, multiplicacion, division) //10 6 16 0.25

//los nombres de mi variable no importan
const [s, r, m, d] = calcular(8, 12)
console.log(s, r, m, d) //20 4 96 0.6666666666666666

//llamado de calcular sin destructuring
console.log(calcular(3, 9)) //(4) [12, 6, 27, 0.3333333333333333]

const peliculas = [
  { id: 1, titulo: 'Titanic' },
  { id: 2, titulo: 'Terminator' },
  { id: 3, titulo: 'Avatar' },
]

const [{ titulo }] = peliculas
console.log(titulo) //Titanic

const [{ titulo: titulo1 }, , { titulo: titulo3 }] = peliculas
console.log(titulo1, titulo3) //Titanic, Avatar
