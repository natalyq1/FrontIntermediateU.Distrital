//promises async await
//El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
console.log('promises async await');

const promesa = new Promise((resolve, reject) => {
    //parametro1 => funcion
    //parametro2 => milisegubdos
    setTimeout(() => resolve('terminada'), 2000)
})
console.log(promesa);//Promise {<pending>}

//then es una funcion---funcion q recibe otra funcion como parametro
promesa.then((resultado) => {
    console.log(resultado);//terminada
    console.log(promesa);//Promise {<fulfilled>: 'terminada'}
})

const mensaje = new Promise((resolve, reject) => {
    //parametro1 => funcion
    //parametro2 => milisegubdos
    setTimeout(() => reject(new Error('Ooopps!')), 2000)//promisesAsyncAwait.js:21 Uncaught (in promise) Error: Ooopps!
})
console.log(mensaje);//Promise {<pending>}

//then es una funcion---funcion q recibe otra funcion como parametro
mensaje
.then((resultado) => {
    console.log(resultado);//terminada
    console.log(mensaje);//Promise {<fulfilled>: 'terminada'}
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('esto se ejecuta al finalizar la promesa');
})

console.log('terminamos!');//sin catch, terminamos y error
//con catch terminamos error sin rojo
//con finally terminamos, promise fullfilled, error y mensaje de finally