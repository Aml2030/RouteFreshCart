import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcardComponent } from './productcard.component';

describe('ProductcardComponent', () => {
  let component: ProductcardComponent;
  let fixture: ComponentFixture<ProductcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
