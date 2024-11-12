import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { HomePageComponent } from "./home-page.component";
import { RouterModule } from "@angular/router";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomePageComponent, RouterModule.forRoot([])],
      declarations: [],
    });

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})