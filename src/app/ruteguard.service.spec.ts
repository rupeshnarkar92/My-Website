import { TestBed } from '@angular/core/testing';

import { RuteguardService } from './ruteguard.service';

describe('RuteguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuteguardService = TestBed.get(RuteguardService);
    expect(service).toBeTruthy();
  });
});
