//herencia padre 
export class Person {
    constructor(private firstName: string, private lastName: string) {}
    //metodo de negocio
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }