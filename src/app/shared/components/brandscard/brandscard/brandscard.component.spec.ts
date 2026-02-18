import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandscardComponent } from './brandscard.component';

describe('BrandscardComponent', () => {
  let component: BrandscardComponent;
  let fixture: ComponentFixture<BrandscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandscardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
