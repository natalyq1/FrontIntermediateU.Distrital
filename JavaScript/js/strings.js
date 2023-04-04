//cadena de caracteres
//comillas simples y sencillas
let phrase1 = 'Hello world "today", welcome \'single\', phase '
console.log(phrase1)

//bajar de renglon
let phrase2 = 'U\nN\nI\nD\nO'
console.log(phrase2)

//doble para q tome el back slash
let phrase3 = 'C:\\Nomina\\empleados'
console.log(phrase3)

//concatenar
let pelicula = "Star" + "Wars"
console.log(pelicula);
pelicula += ": The Return of the Jedi "
console.log(pelicula);

let year = 1983;
pelicula+= year
console.log(pelicula);
//string a numbre con Number()

let value1 = Number(5)
console.log(typeof value1);
console.log(value1);

//para emojis windows + .
let mensaje1 ="carita feliz ... 😊 "
console.log(mensaje1);

let longitud =mensaje1.length
console.log(longitud);

let caracter1 = mensaje1[2]
console.log(caracter1);

console.log(mensaje1.substring(4, 10));

//templates y literales
let nombre ='Cata'
let edad = 24
let mensaje2 = 'La estudiante ' + nombre + ' tiene ' + edad +' años'
console.log(mensaje2);

//backtips
let mensaje3 = `Aca es con backtips, es un literal y ${nombre} y su edad ${edad}`
console.log(mensaje3);