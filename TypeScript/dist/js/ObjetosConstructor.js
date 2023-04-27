"use strict";
class Train {
    constructor(type, distance, date = 'today') {
        this.type = type;
        this.distance = distance;
        this.date = date;
    }
}
const train1 = new Train('Long run', 21, '2023-02-11');
const train2 = new Train('Long run', 21);
train1.type = 'Intervals';
console.log(train1);
console.log(train2);
