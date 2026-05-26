import { TestBed } from '@angular/core/testing';

import { Page1 } from './page1';

describe('Page1', () => {
  let service: Page1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
