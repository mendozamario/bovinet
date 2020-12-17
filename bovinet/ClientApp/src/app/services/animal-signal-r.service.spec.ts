import { TestBed } from '@angular/core/testing';

import { AnimalSignalRService } from './animal-signal-r.service';

describe('AnimalSignalRService', () => {
  let service: AnimalSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
