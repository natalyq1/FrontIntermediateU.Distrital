import { Intervals } from "./classes/intervals.js";
import { LongRun } from "./classes/longRun.js";
import { TrainingRun } from "./classes/trainingRun.js";
import { ITraining } from "./interfaces/itraining.js";

console.log("Proyecto ");
//Obtiene los elementos del formulario
const anchor1 = document.querySelector("a")!; //con el ! le digo que me crea q ahi hay un anchor con un href
console.log(anchor1); //a
console.log(anchor1.href); //https://www.udistrital.edu.co/

//cast-
//A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
const anchor2: HTMLAnchorElement = document.querySelector(
  ".clase"
) as HTMLAnchorElement; //con este le digo que tipo de elemento contiene y me lo trae
console.log(anchor2); //a
console.log(anchor2.href); //https://www.udistrital.edu.co/

///////////////////////////////////////////////////////////////////////////////////////////////
const form = document.querySelector("form")!;
const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
const selectType = document.getElementById("selectType") as HTMLSelectElement;
const inputDistance = document.querySelector(
  "#inputDistance"
) as HTMLInputElement;
const tbody = document.querySelector("tbody") as HTMLTableSectionElement;

console.log(inputDistance); //input#inputDistance

//DEFINICION DE CONSTANTES DE TIPO DE ENTRENAMIENTO
const TRAINIG_RUN = 1;
const INTERVALS = 2;
const LONG_RUN = 3;

const trainings: ITraining[] = [];

form.addEventListener("submit", (e: SubmitEvent) => {
  //evita enviar la info al servidor
  e.preventDefault();
  //Obtiene los datos del usuario
  const date = inputDate.value;
  const type = parseInt(selectType.value);
  const distance = inputDistance.valueAsNumber; //cambia el dato a numero

  let newTraining: ITraining;
  switch (type) {
    case TRAINIG_RUN:
      newTraining = new TrainingRun(date, distance);
      break;
    case INTERVALS:
      newTraining = new Intervals(date, distance);
      break;
    case LONG_RUN:
      newTraining = new LongRun(date, distance);
      break;
  }

  //Agrega el nuevo entrenamiento a la lista
  trainings.push(newTraining!);
  console.log(trainings); // [TrainingRun, LongRun] con sus respectivos datos

  //muestra los entrenamientos
  showTrainings();

  //console.log(newTraining!);//Intervals {date: '2023-04-04', distance: 5, type: 'Intervals'}
  //console.log(date, type, distance);//2023-04-20 3 3
});

function showTrainings() {
  //Limpia tbody
  tbody.innerHTML = "";

  //Recorre los enteenamientos
  trainings.forEach((training) => tbody.append(training.getHTMLRow()));
  //lo mismo de otra forma mas paso a paso
  //trainings.forEach((training) => {
  //const tr = training.getHTMLRow()
  //tbody.appendChild(tr)
  //})
}
