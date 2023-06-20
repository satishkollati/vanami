import { TestBed } from '@angular/core/testing';

import { EntityServiceService } from './entity-service.service';

describe('EntityServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntityServiceService = TestBed.get(EntityServiceService);
    expect(service).toBeTruthy();
  });
});
