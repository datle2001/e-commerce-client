import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoginPageComponent } from './login-page.component';
import { LoginServices } from 'src/app/services/login.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { testLoginInfo } from 'src/app/shared/test/data';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLButtonElement;
  let loginServices: LoginServices;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        MatProgressSpinnerModule,
      ],
      declarations: [NgModel, NgForm, SpinnerComponent, LoginPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    emailInput = nativeElement.querySelector('input[name="email"]')!;
    passwordInput = nativeElement.querySelector('input[name="password"]')!;
    loginButton = nativeElement.querySelector('button')!;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email textbox, password textbox, login button should exist', () => {
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(loginButton).toBeTruthy();
  });

  it('should disable Login button when there is no input', () => {
    expect(loginButton.disabled).toBeTrue();
  });

  it('should enable Login button when there are email and password inputs', async () => {
    component.loginInfo.email = testLoginInfo.email;
    component.loginInfo.password = testLoginInfo.password;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(loginButton.disabled).toBeFalse();
    });
  });
});
