console.log("modules");
//debe ser .js
import { Training } from "./classes/training.js";
import { Person } from "./classes/person.js";
import { Teacher } from './classes/teacher.js';
import { Student } from "./classes/Student.js";

const t1 = new Training("Long run", 21, "2023-04-27");
console.log(t1); //Training {type: 'Long run', distance: 21, date: '2023-04-27', comments: ''}

const p1 = new Person("Cata", "Cardozo");
console.log(p1); // Person {firstName: 'Cata', lastName: 'Cardozo'}
console.log(p1.getFullName()); // Cata Cardozo


//Polimorfismo- objeto que hereda de person
const s1: Person = new Student("Valeria", "Medina", 4.5);
console.log(s1); // Student {firstName: 'Valeria', lastName: 'Medina', avg: 4.5}
console.log(s1.getFullName()); //Valeria Medina

//Polimorfismo- objeto que hereda de person
const teacher1: Person = new Teacher('Liliana', 'Ramirez', '007')
console.log(teacher1); // Teacher {firstName: 'Liliana', lastName: 'Ramirez', document: '007'}
console.log(teacher1.getFullName()); // Liliana Ramirez