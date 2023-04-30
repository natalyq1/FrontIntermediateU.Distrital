import { Intervals } from "./classes/intervals.js";
import { LongRun } from "./classes/longRun.js";
import { TrainingRun } from "./classes/trainingRun.js";
console.log("Proyecto ");
const anchor1 = document.querySelector("a");
console.log(anchor1);
console.log(anchor1.href);
const anchor2 = document.querySelector(".clase");
console.log(anchor2);
console.log(anchor2.href);
const form = document.querySelector("form");
const inputDate = document.querySelector("#inputDate");
const selectType = document.getElementById("selectType");
const inputDistance = document.querySelector("#inputDistance");
const tbody = document.querySelector("tbody");
console.log(inputDistance);
const TRAINIG_RUN = 1;
const INTERVALS = 2;
const LONG_RUN = 3;
const trainings = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = inputDate.value;
    const type = parseInt(selectType.value);
    const distance = inputDistance.valueAsNumber;
    let newTraining;
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
    trainings.push(newTraining);
    console.log(trainings);
    showTrainings();
});
function showTrainings() {
    tbody.innerHTML = "";
    trainings.forEach((training) => tbody.append(training.getHTMLRow()));
}
