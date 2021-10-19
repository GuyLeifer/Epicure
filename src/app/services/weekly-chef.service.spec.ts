import { TestBed } from '@angular/core/testing';

import { WeeklyChefService } from './weekly-chef.service';

describe('WeeklyChefService', () => {
  let service: WeeklyChefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeeklyChefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
