import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { TopComponent } from "./top.component";
import { MatBadgeModule } from "@angular/material/badge";
import { RouterTestingModule } from "@angular/router/testing";

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        MatBadgeModule,
        TopComponent,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });


})