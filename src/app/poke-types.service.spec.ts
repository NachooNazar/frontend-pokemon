import { TestBed } from '@angular/core/testing';

import { PokeTypesService } from './poke-types.service';

describe('PokeTypesService', () => {
  let service: PokeTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
