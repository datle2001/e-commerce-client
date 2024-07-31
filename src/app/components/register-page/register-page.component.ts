import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginServices } from 'src/app/services/login.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class RegisterPageComponent {
  protected readonly registerFormGroup = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    lastName: new FormControl<string>('', Validators.required),
    sex: new FormControl<string>('', Validators.required),
    dob: new FormControl<Date>(new Date(), Validators.required),
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', Validators.required),
  });

  constructor(
    private loginService: LoginServices,
    private spinnerService: SpinnerService,
    private router: Router
  ) {}

  onSignupButtonClick() {
    const signupInfo: User = {
      firstName: this.registerFormGroup.controls.firstName.value!,
      lastName: this.registerFormGroup.controls.lastName.value!,
      sex: this.registerFormGroup.controls.sex.value!,
      dob: this.registerFormGroup.controls.dob.value!.toISOString().substring(0, 10),
      email: this.registerFormGroup.controls.email.value!,
      password: this.registerFormGroup.controls.password.value!,
    };

    this.spinnerService.show = true;
    this.loginService.signup(signupInfo).subscribe({
      next: (token) => {  
        console.log(token);
              
        this.spinnerService.show = false;
        this.loginService.loginUser(token);
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        this.spinnerService.show = false;
        console.error(error);
      },
    });
  }
}
