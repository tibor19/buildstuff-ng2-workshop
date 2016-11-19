/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomRecipeGuardService } from './random-recipe-guard.service';

describe('RandomRecipeGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomRecipeGuardService]
    });
  });

  it('should ...', inject([RandomRecipeGuardService], (service: RandomRecipeGuardService) => {
    expect(service).toBeTruthy();
  }));
});
