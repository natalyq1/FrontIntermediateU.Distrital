console.log('TUPLES');

//ejemplo arreglo
let arreglo = ['Cata', 21, true]
arreglo[0]= 122
arreglo[2] = 'Mary'
console.log(arreglo);//3) [122, 21, 'Mary']

//definicion de un tuple
let tuple: [string, number, boolean]
let tuple2: [string, number] = ['Emilio', 13]

//modifica el tuple
tuple = ['Valeria', 10, false]
//modifica un valor de tuple con el mismo tipo de dato declarado
tuple[1] = 100

console.log(tuple);// ['Valeria', 100, false]
console.log(tuple2);//['Emilio', 13]



