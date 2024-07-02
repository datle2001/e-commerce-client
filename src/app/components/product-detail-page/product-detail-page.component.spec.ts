import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductDetailPageComponent } from "./product-detail-page.component";
import { ToastrModule } from "ngx-toastr";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "../shared/spinner/spinner.component";

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), RouterModule.forRoot([]), HttpClientModule, MatProgressSpinnerModule],
      declarations: [ProductDetailPageComponent, SpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})