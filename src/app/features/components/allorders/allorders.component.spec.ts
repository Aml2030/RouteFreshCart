import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordersComponent } from './allorders.component';

describe('AllordersComponent', () => {
  let component: AllordersComponent;
  let fixture: ComponentFixture<AllordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllordersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllordersComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
