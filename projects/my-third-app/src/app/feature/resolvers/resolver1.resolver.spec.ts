import { TestBed } from '@angular/core/testing';

import { Resolver1Resolver } from './resolver1.resolver';

describe('Resolver1Resolver', () => {
  let resolver: Resolver1Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(Resolver1Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
