import { Component, OnInit } from '@angular/core';
import { Balance } from 'src/app/models/balance.model';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  balance: Balance = {
    amount: 100_000,
    income: 150_000,
    expenses: 50_000,
  };
  transactions: Transaction[] = [];

  constructor(private transactionsService: TransactionsService) {}
  ngOnInit(): void {
    this.transactionsService
      .getTransactions()
      .subscribe((response: Transaction[]) => {
        //console.log(response);
        this.transactions = response;
      });
  }

  removeTransaction(transactionId: string) {
    this.transactionsService
      .remove(transactionId)
      .subscribe((response: Transaction) => {
        console.log(response);
        //remove a transaction given its id
        this.transactions = this.transactions.filter(
          (transaction) => transaction.id !== transactionId
        );
      });
  }
}
