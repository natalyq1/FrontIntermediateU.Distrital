import { Person } from "./person.js";
export class Student extends Person {
    constructor(firstName, lastName, avg = 3) {
        super(firstName, lastName);
        this.avg = avg;
    }
}
