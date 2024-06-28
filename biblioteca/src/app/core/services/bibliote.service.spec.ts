import { TestBed } from '@angular/core/testing';

import { BiblioteService } from './bibliote.service';

describe('BiblioteService', () => {
  let service: BiblioteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiblioteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
