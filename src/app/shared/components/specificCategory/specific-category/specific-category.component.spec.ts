import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCategoryComponent } from './specific-category.component';

describe('SpecificCategoryComponent', () => {
  let component: SpecificCategoryComponent;
  let fixture: ComponentFixture<SpecificCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificCategoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
