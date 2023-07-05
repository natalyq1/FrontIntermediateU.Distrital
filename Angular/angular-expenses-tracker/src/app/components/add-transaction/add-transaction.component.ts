import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  addTransactionForm!: FormGroup;
  ngOnInit(): void {
    //Hook que se ejecuta al montar el componente en el DOM
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(0),
    });
  }
}
