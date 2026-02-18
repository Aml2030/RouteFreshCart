import { TestBed } from '@angular/core/testing';

import { CheckPlateFormService } from './check-plate-form.service';

describe('CheckPlateFormService', () => {
  let service: CheckPlateFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckPlateFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
