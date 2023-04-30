import { ITraining } from "../interfaces/itraining.js";

export class TrainingRun implements ITraining {
  type: string;
  constructor(public date: string, public distance: number) {
    this.type = "Training run";
  }

  format(): string {
    return `I ran ${this.distance}k on ${this.date}`;
  }
  getHTMLRow(): HTMLTableRowElement {
    //crea el tr
    const tr = document.createElement("tr");
    //crea las celdas td
    const tdDate = document.createElement("td");
    tdDate.innerText = this.date;
    const tdType = document.createElement("td");
    tdType.textContent = this.type;
    const tdDistance = document.createElement("td");
    tdDistance.innerText = `${this.distance}k`;
    //agrega las celdas <td> al <tr>
    tr.append(tdDate, tdType, tdDistance);
    return tr;
  }
}
