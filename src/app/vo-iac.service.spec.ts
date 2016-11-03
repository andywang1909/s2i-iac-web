/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoIacService } from './vo-iac.service';

describe('Service: VoIac', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoIacService]
    });
  });

  it('should ...', inject([VoIacService], (service: VoIacService) => {
    expect(service).toBeTruthy();
  }));
});
