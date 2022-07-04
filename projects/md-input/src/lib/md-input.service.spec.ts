import { TestBed } from '@angular/core/testing';

import { MdInputService } from './md-input.service';

describe('MdInputService', () => {
  let service: MdInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
