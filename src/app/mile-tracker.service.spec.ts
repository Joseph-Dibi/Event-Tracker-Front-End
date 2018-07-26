import { TestBed, inject } from '@angular/core/testing';

import { MileTrackerService } from './mile-tracker.service';

describe('MileTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MileTrackerService]
    });
  });

  it('should be created', inject([MileTrackerService], (service: MileTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
