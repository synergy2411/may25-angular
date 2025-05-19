import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { DirectivesExampleComponent } from './components/demo/directives-example/directives-example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/auth/login/login.component';

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
  ],
  imports: [
    // imports module to access their functionality
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Injecting the dependencies / Services
  bootstrap: [AppComponent], // Root Component loaded here
})
export class AppModule {}
