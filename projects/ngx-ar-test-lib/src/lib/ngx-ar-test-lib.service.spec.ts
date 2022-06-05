import { TestBed } from '@angular/core/testing';

import { NgxArTestLibService } from './ngx-ar-test-lib.service';

describe('NgxArTestLibService', () => {
  let service: NgxArTestLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxArTestLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
