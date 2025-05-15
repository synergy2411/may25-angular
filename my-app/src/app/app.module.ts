import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
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
