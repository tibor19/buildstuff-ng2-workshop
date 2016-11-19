import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Http } from '@angular/http';

@Injectable()
export class RecipeService {

  constructor(private http: Http) { }

  getRecipe() {
    return this.http.get('/api/recipe.json').map(respose => {
      if (respose.status === 200) {
        return respose.json();
      }
    });
  }

  getRecipes() {
    return this.http.get('/api/recipies.json').map(respose => {
      if (respose.status === 200) {
        return respose.json();
      }
    });
  }

}
