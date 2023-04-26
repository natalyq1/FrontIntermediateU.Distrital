//definicion de objeto con valore predeterminados
let movie1 = {
    title: 'Django Unchained',
    year: 2012
}
console.log(movie1);

movie1.title ='Pulp Fiction'
movie1.year = 1991

console.log(movie1);


//definicion de caracteristicasdel objeto con tipos de propiedades
let movie2: {
    title: string
    year:number
}
//creacion del objeto, no aceptara mas datos de los declarados o datos diferentes
movie2 = {
    title: 'ABC',
    year:123
}

movie2.title = 'ZYX'
movie2.year = 3452

console.log(movie2);//{title: 'ZYX', year: 3452}
