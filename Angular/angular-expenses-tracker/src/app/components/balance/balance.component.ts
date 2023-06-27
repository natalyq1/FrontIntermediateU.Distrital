import { Component, Input } from '@angular/core';
import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  //Parámetro de entrada
  @Input() title: string = '';
  @Input() balance: Balance = {
    amount: 55_000,
    income: 100_000,
    expenses: 45_000
  }
}
