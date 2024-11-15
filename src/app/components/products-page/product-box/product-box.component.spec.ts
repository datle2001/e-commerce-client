import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ProductBoxComponent } from "./product-box.component";
import { ToastrModule } from "ngx-toastr";
import { MatDividerModule } from "@angular/material/divider";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { StarComponent } from "../../shared/star/star.component";
import { QuantitySelectComponent } from "../../shared/quantity-select/quantity-select.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        MatDividerModule,
        NgbRatingModule,
        ProductBoxComponent,
        StarComponent,
        QuantitySelectComponent,
        HttpClientModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})