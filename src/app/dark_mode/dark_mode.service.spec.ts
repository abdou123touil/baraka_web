import { TestBed } from '@angular/core/testing';

import { dark_modeService } from './dark_mode.service';

describe('ServicesService', () => {
  let service: dark_modeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dark_modeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
