import { TestBed } from '@angular/core/testing';

import { ApiRecipeService } from './api-recipe.service';

describe('ApiRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiRecipeService = TestBed.get(ApiRecipeService);
    expect(service).toBeTruthy();
  });
});
