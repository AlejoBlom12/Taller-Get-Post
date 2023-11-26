import { TestBed } from '@angular/core/testing';

import { PostAutoService } from './post-auto.service';

describe('PostAutoService', () => {
  let service: PostAutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
