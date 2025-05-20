import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
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
  cnfPassword = new FormControl('', [
    Validators.required,
    this.confirmPasswordValidator,
  ]);

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: this.username,
      password: this.password,
      cnfPassword: this.cnfPassword,
      hobbies: this.fb.array([]),
    });
  }

  get hobbies() {
    return this.registrationForm.get('hobbies') as FormArray;
  }

  addHobby() {
    const newHobby = this.fb.group({
      name: new FormControl(''),
      exp: new FormControl(''),
    });
    this.hobbies.push(newHobby);
  }

  onSubmit() {
    console.log(this.registrationForm);
  }

  static hasExclamationMark(control: AbstractControl): ValidationErrors | null {
    const hasExclamation = control.value.indexOf('!') >= 0;
    return hasExclamation ? null : { hasExcalamationError: true };
  }

  confirmPasswordValidator(control: any): ValidationErrors | null {
    if (control.parent && control.parent.controls) {
      const isMatched =
        control.value === control.parent.controls['password'].value;
      return isMatched ? null : { confirmPasswordError: true };
    }
    return null;
  }
}
