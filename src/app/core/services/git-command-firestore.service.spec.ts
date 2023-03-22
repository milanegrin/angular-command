import { TestBed } from '@angular/core/testing';

import { GitCommandFirestoreService } from './git-command-firestore.service';

describe('GitCommandFirestoreService', () => {
  let service: GitCommandFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitCommandFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
