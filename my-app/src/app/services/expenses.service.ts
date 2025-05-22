import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../models/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  // private baseURL = 'http://localhost:3000/expenses';
  private baseURL =
    'https://sk-ng-may-25-default-rtdb.firebaseio.com/expenses.json';

  constructor(private httpClient: HttpClient) {}

  // GET
  getExpenses(): Observable<Array<IExpense>> {
    return this.httpClient.get<Array<IExpense>>(this.baseURL);
  }

  // POST
  createExpense(newExpense: IExpense) {
    return this.httpClient.post(this.baseURL, newExpense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // DELETE
  deleteExpense(expenseId: string) {
    return this.httpClient.delete(`${this.baseURL}/${expenseId}`);
  }

  // Update
  updateExpense(expenseId: string, expense: IExpense) {
    return this.httpClient.patch(`${this.baseURL}/${expenseId}`, expense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
