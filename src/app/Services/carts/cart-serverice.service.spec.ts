import { TestBed } from '@angular/core/testing';

import { CartServericeService } from './cart-serverice.service';

describe('CartServericeService', () => {
  let service: CartServericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
