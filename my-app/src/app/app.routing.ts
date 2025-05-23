import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { loginGuard } from './guards/login.guard';
import { ProductsComponent } from './components/demo/products/products.component';
import { OverviewComponent } from './components/demo/products/overview/overview.component';
import { SpecificationComponent } from './components/demo/products/specification/specification.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'users', // http://localhost:4200/user
    component: UsersComponent,
  },
  {
    path: 'pipes',
    component: PipeExampleComponent,
  },
  {
    path: 'observables',
    component: ObservableExampleComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':productId/overview/:name',
        component: OverviewComponent,
      },
      {
        path: 'specification',
        component: SpecificationComponent,
      },
    ],
  },
  {
    path: '**', // http://localhost:4200/doesnotexists
    component: PageNotFoundComponent,
  },
];
