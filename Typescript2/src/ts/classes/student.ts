//hijo
import { Person } from "./person.js";

export class Student extends Person {
    constructor(firstName: string, lastName: string, public avg: number = 3) {
      super(firstName, lastName);
    }
  }