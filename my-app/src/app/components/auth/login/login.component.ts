import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
// For local bootstrap loading for this component only
// Also remove it from angular.json file
// import "bootstrap/dist/css/bootstrap.min.css";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onSubmitForm(loginForm: NgForm) {
    console.log('Email : ', loginForm.value.email);
    console.log('Password : ', loginForm.value.password);
    this.authService.loginUser(loginForm.value.email, loginForm.value.password);
  }
}
