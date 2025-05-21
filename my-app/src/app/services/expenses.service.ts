import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../models/expense';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private baseURL = 'http://localhost:3000/expenses';

  constructor(private httpClient: HttpClient) {}

  // GET
  getExpenses(): Observable<Array<IExpense>> {
    return this.httpClient.get<Array<IExpense>>(this.baseURL);
  }

  // POST
  createExpense() {}
  // DELETE
  deleteExpense(expenseId: string) {
    return this.httpClient.delete(`${this.baseURL}/${expenseId}`);
  }
}
