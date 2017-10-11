import { TestBed, inject } from '@angular/core/testing';

import { WowDataService } from './wow-data.service';

describe('WowDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowDataService]
    });
  });

  it('should be created', inject([WowDataService], (service: WowDataService) => {
    expect(service).toBeTruthy();
  }));
});
