import { formatDate } from '@angular/common';
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
    const date: string = new Date().toISOString().split('T')[0];
    //const date: string = formatDate(new Date(2022, 7, 30), 'yyyy-MM-dd', 'en')
    
    //Hook que se ejecuta al montar el componente en el DOM
    this.addTransactionForm = new FormGroup({
      amount: new FormControl(),
      type: new FormControl('expense'),
      category: new FormControl('food'),
      date: new FormControl(date),
    });
  }
}
