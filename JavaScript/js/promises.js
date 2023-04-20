//promises
//El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
console.log('promises async await');

//funcion tradicional por parametro
const hayValor = false
let mensaje = new Promise(function (resolve, reject){
    //acciones a ejecutar
    if (hayValor) {
        resolve('si hay un valor')
    }else{
        reject('¡error!, no hay valor')
    }
})

console.log(mensaje); //true= Promise {<fulfilled>: 'si hay un valor'}
// false= Promise {<rejected>: '¡error!, no hay valor'}
//promises.js:11 Uncaught (in promise) ¡error!, no hay valor

// Función arrow anónima por parámetro
let mensaje2 = new Promise((resolve, reject) => {
    reject("ERROR 1");
  });
  console.log(mensaje2);
  
  // Fucnión separada del constructor de Promise
  function manejador(resolve, reject) {
    reject("ERROR 2");
  }
  let mensaje3 = new Promise(manejador);
  console.log(mensaje3);