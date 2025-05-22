import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesService } from '../../../services/expenses.service';
import { IExpense } from '../../../models/expense';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense!: IExpense;
  title = 'Add New Expense';
  expenseTitle: string = '';
  expenseAmount: number = 0;
  expenseCreatedAt: string = '';

  @Output() childFormEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();

  ngOnInit(): void {
    if (this.expense) {
      this.title = 'Edit Expense';
      this.expenseTitle = this.expense.title;
      this.expenseAmount = this.expense.amount;
      this.expenseCreatedAt = this.expense.createdAt;
    }
  }

  constructor(private expensesService: ExpensesService) {}

  onSubmit(expenseForm: NgForm) {
    // console.log(expenseForm.value);
    this.expensesService.createExpense(expenseForm.value).subscribe(() => {
      this.childFormEvent.emit();
    });
  }

  onKeyPress(event: KeyboardEvent) {
    console.log(event.key);
    // if the key is `ESC`, then close the form
  }

  onCancel() {
    this.cancelEvent.emit();
  }
}
