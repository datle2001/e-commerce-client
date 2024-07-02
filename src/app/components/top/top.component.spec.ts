import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { TopComponent } from "./top.component";
import { MatBadgeModule } from "@angular/material/badge";

describe('TopComponent', () => {
  let component: TopComponent;
  let fixture: ComponentFixture<TopComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot([]),
        MatBadgeModule
      ],
      declarations: [TopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });


})