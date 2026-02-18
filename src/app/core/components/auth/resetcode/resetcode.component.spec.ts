import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetcodeComponent } from './resetcode.component';

describe('ResetcodeComponent', () => {
  let component: ResetcodeComponent;
  let fixture: ComponentFixture<ResetcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetcodeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
