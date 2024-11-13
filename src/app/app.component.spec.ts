import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        MatBadgeModule,
        TopComponent,
        AppComponent,
        BrowserAnimationsModule,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'e-commerce'`, () => {
    expect(component.title).toEqual('e-commerce');
  });

  it('should display navigation bar', () => {
    expect(document.querySelector('#nav-bar')).toBeTruthy();
  });
});
