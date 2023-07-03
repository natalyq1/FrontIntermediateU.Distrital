import { Transaction } from './models/transaction.model';
import { Component } from '@angular/core';
import { Balance } from './models/balance.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  balance: Balance = {
    amount: 100_000,
    income: 150_000,
    expenses: 50_000,
  };
  transactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: 45,
      category: 'food',
      date: new Date(2023, 6, 26),
    },
    {
      id: '2',
      type: 'expense',
      amount: 280,
      category: 'shopping',
      date: new Date(2023, 6, 24),
    },
    {
      id: '3',
      type: 'expense',
      amount: 60,
      category: 'entertainment',
      date: new Date(2023, 6, 22),
    },
    {
      id: '4',
      type: 'income',
      amount: 500,
      category: 'payroll',
      date: new Date(2023, 6, 20),
    },
  ];
  removeTransaction(TransactionId: string){
    //remove a transaction given its id
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== TransactionId
    );
  }
}

