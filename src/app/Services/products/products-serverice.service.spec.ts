import { TestBed } from '@angular/core/testing';

import { ProductsServericeService } from './products-serverice.service';

describe('ProductsServericeService', () => {
  let service: ProductsServericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
