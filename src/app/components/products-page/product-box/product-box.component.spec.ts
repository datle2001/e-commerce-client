import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ProductBoxComponent } from "./product-box.component";
import { ToastrModule } from "ngx-toastr";
import { MatDividerModule } from "@angular/material/divider";
import { NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { StarComponent } from "../../shared/star/star.component";
import { QuantitySelectComponent } from "../../shared/quantity-select/quantity-select.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        MatDividerModule,
        NgbRatingModule,
        ProductBoxComponent,
        StarComponent,
        QuantitySelectComponent,
        HttpClientModule,
        RouterModule.forRoot([])
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})