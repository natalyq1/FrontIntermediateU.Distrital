console.log('OOP');

//variable
let variable = 0;

//array
let arreglo = [1, 2, 3]

//Objeto
//JSON --> JavaScript Object Notation
let usuario = {
    nombre: 'Catalina',
    apellido: 'Romer',
    edad: 43,
    hobbies: ['musica', 'ejercicio', 'canto'],//array
    ubicacion: {
        ciudad: 'Melbourne',
        pais: 'Australia'
    },
    //método
    esAdulto(){
        return this.edad >= 18
    }
}

console.log(usuario);

//notación punto
let nombre = usuario.nombre
console.log(nombre);

//notación llaves
let edad = usuario['edad']
console.log(edad);

//objeto con método
console.log(usuario.esAdulto());

const NIVEL_BASICO = 1;
const NIVEL_INTERMEDIO = 2;
const NIVEL_AVANZADO = 3;

let curso = {
  materia: "programación",
  creditos: 4,
  estudiantes: ["Juan Pablo", "Andrés Mateo", "Eliana Paola"],
  nivel: NIVEL_INTERMEDIO,
};

console.log(curso);

// Modificar atributo de un objeto
curso.materia = "Frontend Intermedio";
console.log(curso);

// Si el tributo no existe, lo agrega
curso.universidad = "UDFJC";
console.log(curso);

// Eliminar un atributo de un objeto
delete curso.creditos;
console.log(curso);

// Verifica si un objeto tiene un atributo--true
let tieneNivel = curso.hasOwnProperty("nivel");
console.log(tieneNivel);

delete curso.nivel;

tieneNivel = curso.hasOwnProperty("nivel");
console.log(tieneNivel);//false

const pelicula1 = {
  titulo: "Titanic",
  anio: 1997,
};
console.log(pelicula1);
pelicula1.anio = 2000;
console.log(pelicula1);

const pelicula2 = {
  titulo: "Avatar 2",
  anio: 2023,
};
console.log(pelicula2);
// "congela" el objeto
Object.freeze(pelicula2);
// Genera un error dado que se intenta modificar
// una propiedad de un objeto "congelado"
pelicula2.anio = 1990;
console.log(pelicula2);