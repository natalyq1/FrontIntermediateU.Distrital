import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { HttpClientModule } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule]
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all transactions', (done) => {
    service.getTransactions().subscribe((transactions: Transaction[]) => {
      //console.log(transactions);
      expect(transactions.length).toBe(7)
      done()
    })
  });

});
