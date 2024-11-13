import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HomePageComponent } from "./home-page.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, RouterTestingModule.withRoutes([])],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})