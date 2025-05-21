import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private baseURL = 'http://localhost:3000/expenses';

  constructor(private httpClient: HttpClient) {}

  // GET
  getExpenses() {
    this.httpClient.get(this.baseURL).subscribe(console.log);
  }

  // POST
  createExpense() {}
  // DELETE
  deleteExpense() {}
}
