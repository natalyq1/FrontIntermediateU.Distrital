const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];

// for in -> recorre las claves del arreglo
for (const key in dias) {
  console.log(dias[key]);
}

// for of -> recorre los valores del arreglo
for (const valor of dias) {
  console.log(valor);
}

// forEach
dias.forEach((dia) => console.log(dia));

// for tradicional
for (let posicion = 0; posicion < dias.length; posicion++) {
  console.log(dias[posicion]);
}