import { TestBed, inject } from '@angular/core/testing';

import { JeopardyapiService } from './jeopardyapi.service';

describe('JeopardyapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeopardyapiService]
    });
  });

  it('should be created', inject([JeopardyapiService], (service: JeopardyapiService) => {
    expect(service).toBeTruthy();
  }));
});
