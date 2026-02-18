import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetnewpasswordComponent } from './resetnewpassword.component';

describe('ResetnewpasswordComponent', () => {
  let component: ResetnewpasswordComponent;
  let fixture: ComponentFixture<ResetnewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetnewpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetnewpasswordComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
