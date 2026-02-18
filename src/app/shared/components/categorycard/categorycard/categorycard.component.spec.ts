import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycardComponent } from './categorycard.component';

describe('CategorycardComponent', () => {
  let component: CategorycardComponent;
  let fixture: ComponentFixture<CategorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorycardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
