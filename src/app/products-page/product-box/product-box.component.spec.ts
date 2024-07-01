import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ProductBoxComponent } from "./product-box.component";
import { ToastrModule } from "ngx-toastr";

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let fixture: ComponentFixture<ProductBoxComponent>;

  beforeEach( async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      declarations:[ProductBoxComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductBoxComponent);
    component = fixture.componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
})