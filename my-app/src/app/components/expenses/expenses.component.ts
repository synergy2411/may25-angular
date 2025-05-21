import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../services/expenses.service';
import { IExpense } from '../../models/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenses!: Array<IExpense>;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService
      .getExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }
}
