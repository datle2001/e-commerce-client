import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductDetailPageComponent } from "./product-detail-page.component";
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SpinnerComponent } from "../shared/spinner/spinner.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('ProductDetailPageComponent', () => {
  let component: ProductDetailPageComponent;
  let fixture: ComponentFixture<ProductDetailPageComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        HttpClientModule,
        MatProgressSpinnerModule,
        ProductDetailPageComponent,
        SpinnerComponent,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})