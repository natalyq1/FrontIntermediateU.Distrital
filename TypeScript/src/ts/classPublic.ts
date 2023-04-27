//en programacion orientada por objetos se usa _nombredato

//puede haber encapsulamineto public, readonly y private

//version alterna de la clase con el constructor implicito
class Movie {
  constructor(
  public _name: string= "Phi",
  readonly _year: number= 1995,
  public _genre: string= "sci-fi",
  private _comments: string= "abc"
) {
  }
  public get comments() {//asi se crea una publica pero aun no se puede modificar
    return this._comments;
  }

  public set comments(newCommment) {//aca ya lo hago modificable
    this._comments =  newCommment;
  }

  format() {
    return `On ${this._year} the ${this._name} was relesead, the _genre is: ${this._genre} and these are the _comments: ${this._comments}`;
  }
}

const mov1 = new Movie();
console.log(mov1); //Movie {_name: 'Phi', _year: 1995, _genre: 'sci-fi', _comments: 'abc'}

console.log(mov1.format()); //On 1995 the Phi was relesead, the _genre is: sci-fi and these are the _comments: abc

//la propiedad no se puede acceder directamente, da error
//console.log(mov1._comments)

console.log(mov1._year); //1995
//no puedo asignar un nuevo valor a _year porque es read only, solo lectura, da error
//mov1.year =1998

//gracias a el get y set, el atributo de privado pasa a ser publico
//set
mov1.comments = 'The movie was terrific'
//get
console.log(mov1); //Movie {_name: 'Phi', _year: 1995, _genre: 'sci-fi', _comments: 'The movie was terrific'}
