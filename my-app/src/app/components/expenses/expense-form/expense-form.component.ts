import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesService } from '../../../services/expenses.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output() childFormEvent = new EventEmitter();

  constructor(private expensesService: ExpensesService) {}

  onSubmit(expenseForm: NgForm) {
    // console.log(expenseForm.value);
    this.expensesService.createExpense(expenseForm.value).subscribe(() => {
      this.childFormEvent.emit();
    });
  }
}
