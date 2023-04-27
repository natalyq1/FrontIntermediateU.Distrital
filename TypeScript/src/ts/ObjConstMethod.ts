//definicion de una clase
class Exercise {
  type: string;
  distance: number;
  date: string;

  //funcion reservada-->instancia el objeto y puede darle valores por defecto
  constructor(type: string, distance: number, date: string = "today") {
    //a ese objeto type pongale lo que venga por esa misma propiedad
    this.type = type;
    this.distance = distance;
    this.date = date;
  }
  //Metodo de negocio
  /**
   * Formats the training for a better view
   * @returns  A formated training
   */
  format() {
    return `On ${this.date} I did ${this.type} for ${this.distance}/kms`;
  }
}

const exercise1 = new Exercise("Long run", 21, "2023-02-11");
const exercise2 = new Exercise("Long run", 21); //si no le paso el tercer dato sera al que deje por defecto cuando cree la instancia
exercise1.type = "Intervals";

//Uso de un metodo de un objeto
console.log(exercise1.format()); //On 2023-02-11 I did Intervals for 21/kms

console.log(exercise2.format()); //On today I did Long run for 21/kms

//declaracion de arreglo de objetos
let exercises : Exercise[] = [];
// Agrega objetos a arreglo
exercises.push(exercise1)
exercises.push(exercise2)

console.log(exercises); // (2) [Exercise, Exercise]
//0: Exercise {type: 'Intervals', distance: 21, date: '2023-02-11'}
//1: Exercise {type: 'Long run', distance: 21, date: 'today'}

//recorre el arreglo de objetos
exercises.forEach((exer) => console.log(exer.format())) //On 2023-02-11 I did Intervals for 21/kms
//On today I did Long run for 21/kms

exercises.push(new Exercise('short walk', 5, '2021-03-25'))

console.log(exercises);//(3) [Exercise, Exercise, Exercise] with it's data
