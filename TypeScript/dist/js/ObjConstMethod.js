"use strict";
class Exercise {
    constructor(type, distance, date = "today") {
        this.type = type;
        this.distance = distance;
        this.date = date;
    }
    format() {
        return `On ${this.date} I did ${this.type} for ${this.distance}/kms`;
    }
}
const exercise1 = new Exercise("Long run", 21, "2023-02-11");
const exercise2 = new Exercise("Long run", 21);
exercise1.type = "Intervals";
console.log(exercise1.format());
console.log(exercise2.format());
let exercises = [];
exercises.push(exercise1);
exercises.push(exercise2);
console.log(exercises);
exercises.forEach((exer) => console.log(exer.format()));
exercises.push(new Exercise('short walk', 5, '2021-03-25'));
console.log(exercises);
