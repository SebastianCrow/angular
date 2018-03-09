import { TestBed, inject } from '@angular/core/testing';

import { InputOutputService } from './input-output.service';

describe('InputOutputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputOutputService]
    });
  });

  it('should be created', inject([InputOutputService], (service: InputOutputService) => {
    expect(service).toBeTruthy();
  }));
});
