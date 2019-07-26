import { TestBed } from '@angular/core/testing';

import { WpserviceService } from './wpservice.service';

describe('WpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpserviceService = TestBed.get(WpserviceService);
    expect(service).toBeTruthy();
  });
});
