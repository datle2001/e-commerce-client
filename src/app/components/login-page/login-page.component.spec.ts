import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { LoginServices } from 'src/app/services/login.service';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { LoginPageComponent } from './login-page.component';
import { testLoginInfo } from 'src/app/shared/test/data';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLButtonElement;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        MatProgressSpinnerModule,
        SpinnerComponent,
        LoginPageComponent,
        RouterModule.forRoot([]),
        BrowserAnimationsModule
      ],
      declarations: [NgModel, NgForm],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    emailInput = nativeElement.querySelector('input[formControlName="email"]')!;
    passwordInput = nativeElement.querySelector('input[formControlName="password"]')!;
    loginButton = nativeElement.querySelector('button')!;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable Login button when there is no input', () => {
    expect(loginButton.disabled).toBeTrue();
  });

  it('should disable Login button when there is no email input', async () => {
    emailInput.value = testLoginInfo.email;
    emailInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(loginButton.disabled).toBeTrue();
  });

  it('should disable Login button when there is no password input', async () => {
    passwordInput.value = testLoginInfo.password;
    passwordInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(loginButton.disabled).toBeTrue();
  });

  it('should enable Login button when there are email and password inputs', async () => {
    emailInput.value = testLoginInfo.email;
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.value = testLoginInfo.password;
    passwordInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    expect(loginButton.disabled).toBeFalse();
  });
});
