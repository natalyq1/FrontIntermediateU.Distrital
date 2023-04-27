"use strict";
class Movie {
    constructor(_name = "Phi", _year = 1995, _genre = "sci-fi", _comments = "abc") {
        this._name = _name;
        this._year = _year;
        this._genre = _genre;
        this._comments = _comments;
    }
    get comments() {
        return this._comments;
    }
    set comments(newCommment) {
        this._comments = newCommment;
    }
    format() {
        return `On ${this._year} the ${this._name} was relesead, the _genre is: ${this._genre} and these are the _comments: ${this._comments}`;
    }
}
const mov1 = new Movie();
console.log(mov1);
console.log(mov1.format());
console.log(mov1._year);
mov1.comments = 'The movie was terrific';
console.log(mov1);
