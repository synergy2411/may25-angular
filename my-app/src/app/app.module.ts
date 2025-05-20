import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DirectivesExampleComponent } from './components/demo/directives-example/directives-example.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { RegisterComponent } from './components/auth/register/register.component';
import { DataService } from './services/data.service';
import { CompAComponent } from './components/demo/comp-a/comp-a.component';
import { CompBComponent } from './components/demo/comp-b/comp-b.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';

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
  ],
  imports: [
    // imports module to access their functionality
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], // Registering the dependencies / Services
  bootstrap: [AppComponent], // Root Component loaded here
})
export class AppModule {}
