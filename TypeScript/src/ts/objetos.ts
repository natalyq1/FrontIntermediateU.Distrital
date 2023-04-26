//definicion de una clase
class Training {
  type: string = "";
  distance: number = 0;
  date: string = "";
}
//crea o instancia un nuevo objeto
const t1 = new Training();
const t2 = new Training();

//modifica las propiedads de un objeto
t1.distance = 10;
t2.distance = 21;

console.log(t1); //Training {type: '', distance: 10, date: ''}

//obtiene el valor de una propiedad de un objeto
console.log(t2.distance); // 21
