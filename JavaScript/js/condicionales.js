console.log(5 > 5);
console.log(5 >= 5);
console.log(5 < 5);
console.log(5 <= 5);
// Comparación de valor -> ==
console.log(5 == 5);
console.log(5 == "5"); // true
console.log(0 == false); // true
// Comparación de valor y tipo -> ===
console.log(5 === 5);
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
// Negación
console.log(!(5 === 5));

let a = 5;
let b = 6;

console.log(a > 4 && a < 10); // true
console.log(a > 3 && a < 2); // false
console.log(a > 4 || a < 2); // true
console.log(a > 6 || a < 3); // false

let x = 3;

// Una sola opción
if (x === 5) {
  console.log("x es igual a 5");
}

// Dos opciones
if (x === 3) {
  console.log("x es igual a 3");
} else {
  console.log("x es diferente a 3");
}

// Muchas opciones
if (x === 1) {
  console.log("X vale 1");
} else if (x === 2) {
  console.log("X vale 2");
} else if (x === 3) {
  console.log("X vale 3");
}

if (x === 1) {
  console.log("X vale 1");
}
if (x === 2) {
  console.log("X vale 2");
}
if (x === 3) {
  console.log("X vale 3");
}

if (x === 1) console.log("X vale 1");
if (x === 2) console.log("X vale 2");
if (x === 3) console.log("X vale 3");