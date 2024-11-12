import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbRatingModule],
      declarations: [ StarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
