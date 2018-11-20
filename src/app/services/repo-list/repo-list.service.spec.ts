import { TestBed } from '@angular/core/testing';

import { RepoListService } from './repo-list.service';

describe('RepoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoListService = TestBed.get(RepoListService);
    expect(service).toBeTruthy();
  });
});
