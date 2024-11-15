import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm, NgModel } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { mockLoginInfo } from 'src/app/shared/test/data';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let loginButton: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        MatProgressSpinnerModule,
        SpinnerComponent,
        LoginPageComponent,
        RouterTestingModule.withRoutes([]),
        BrowserAnimationsModule,
      ],
      declarations: [NgModel, NgForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();

    const nativeElement: HTMLElement = fixture.nativeElement;
    emailInput = nativeElement.querySelector('input[formControlName="email"]')!;
    passwordInput = nativeElement.querySelector(
      'input[formControlName="password"]'
    )!;
    loginButton = nativeElement.querySelector('button')!;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable Login button when there is no input', () => {
    expect(loginButton.disabled).toBeTrue();
  });

  it('should disable Login button when there is no email input', async () => {
    emailInput.value = mockLoginInfo.email;
    emailInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(loginButton.disabled).toBeTrue();
  });

  it('should disable Login button when there is no password input', async () => {
    passwordInput.value = mockLoginInfo.password;
    passwordInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(loginButton.disabled).toBeTrue();
  });

  it('should enable Login button when there are email and password inputs', async () => {
    emailInput.value = mockLoginInfo.email;
    emailInput.dispatchEvent(new Event('input'));
    passwordInput.value = mockLoginInfo.password;
    passwordInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    expect(loginButton.disabled).toBeFalse();
  });

  it('should hide navigation bar', () => {
    expect(document.querySelector('#nav-bar')).toBeFalsy();
  });
});
