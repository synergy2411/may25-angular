import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CompAComponent } from './components/demo/comp-a/comp-a.component';
import { CompBComponent } from './components/demo/comp-b/comp-b.component';
import { DirectivesExampleComponent } from './components/demo/directives-example/directives-example.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { OverviewComponent } from './components/demo/products/overview/overview.component';
import { ProductsComponent } from './components/demo/products/products.component';
import { SpecificationComponent } from './components/demo/products/specification/specification.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { EagerModule } from './modules/eager/eager.module';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { StandaloneExampleComponent } from './components/demo/standalone-example/standalone-example.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleComponent,
    DirectivesExampleComponent,
    HighlightDirective,
    PipeExampleComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    CompAComponent,
    CompBComponent,
    ObservableExampleComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ProductsComponent,
    OverviewComponent,
    SpecificationComponent,
  ],
  imports: [
    // imports module to access their functionality
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EagerModule,
    StandaloneExampleComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ], // Registering the dependencies / Services
  bootstrap: [AppComponent], // Root Component loaded here
})
export class AppModule {}
