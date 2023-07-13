import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { BalanceComponent } from '../balance/balance.component';
import { TransactionsComponent } from '../transactions/transactions.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [HomeComponent, BalanceComponent, TransactionsComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    //console.log(compiled); //<div id="root0" _nghost-a-c3559178710="" ng-version="16.1.2"><div _ngcontent-a-c3559178710="" class="main"...
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with css class called main', () => {
    const div = compiled.querySelector('.main')
    expect(div).toBeTruthy()
  });
});
