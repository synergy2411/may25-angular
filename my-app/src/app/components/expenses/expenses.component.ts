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
  showForm: boolean = false;
  selectedExpense!: IExpense;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.fetchExpenses();
  }

  private fetchExpenses() {
    this.expensesService
      .getExpenses()
      .subscribe((expenses) => (this.expenses = expenses));
  }

  onDelete(expenseId: string) {
    this.expensesService.deleteExpense(expenseId).subscribe(() => {
      this.fetchExpenses();
    });
  }

  onCloseForm() {
    this.showForm = false;
    this.fetchExpenses();
  }

  onEdit(expense: IExpense) {
    this.showForm = true;
    this.selectedExpense = expense;
  }
}
