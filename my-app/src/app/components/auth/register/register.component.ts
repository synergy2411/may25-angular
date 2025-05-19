import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    RegisterComponent.hasExclamationMark,
  ]);
  cnfPassword = new FormControl('', [Validators.required]);

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: this.username,
      password: this.password,
      cnfPassword: this.cnfPassword,
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

  static hasExclamationMark(control: AbstractControl): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { hasExcalamationError: true };
  }

  confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
    console.log(this && this.registrationForm);
    if (this && this.registrationForm) {
      console.log(this.registrationForm.get('password')!.value);
      const isMatched =
        control.value === this.registrationForm.get('password')!.value;
      return isMatched ? null : { confirmPassword: true };
    } else {
      return null;
    }
  }
}
