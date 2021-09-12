import { TestBed } from '@angular/core/testing';

import { DdataService } from './ddata.service';

describe('DdataService', () => {
  let service: DdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});