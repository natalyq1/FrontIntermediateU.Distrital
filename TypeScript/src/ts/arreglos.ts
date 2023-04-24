console.log('Arreglos');

//Arreglo con tipo de datos implicito
let heroes =['batman', 'Wolverine', 'superman']
console.log(heroes);

//genera error por tipo de dato
//heroes.push(100)
//heroes[1]= 200

heroes[1] = 'flash'
console.log(heroes);//['batman', 'flash', 'superman']


//
let notas = ['Diana', 4.8, "Angie", 4.9]
console.log(notas);// ['Diana', 4.8, 'Angie', 4.9]
notas.push ('adriana')
notas.push(4.5)
console.log(notas);//['Diana', 4.8, 'Angie', 4.9, 'adriana', 4.5]

//error por otro tipo de dato que no se anuncio desde el inicio del la creacion del array
//notas.push(true)


//Arreglos con tipo explicito
let games : string[] = []

games.push('StarCraft', 'MineCraft')
console.log(games);//['StarCraft', 'MineCraft']

//Declaracion de arreglo con tipo union
let grades1: (string | number)[] = []
grades1.push(10,'abc')

//genera error
//grades.push(false)
console.log(grades1);//[10, 'abc']

//Declaracion de arreglo con tipo alias
type Grade = string | number
let grades2: Grade[]= []
grades2.push(100, 'ganaste!')
console.log(grades2);//[100, 'ganaste!']

