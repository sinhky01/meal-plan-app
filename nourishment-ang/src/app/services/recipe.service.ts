import { Injectable } from '@angular/core';
import { Ingredient} from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';

import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  error: any;

  constructor(private http:HttpClient) { }

  //TODO set get path based on id passed
  public fetchRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>('').pipe(catchError(this.handleError));
  }

  //TODO set path based on recipeId passed. Server should return as array of ingredients
  public fetchIngredients(recipeId: number):Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>('').pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    return Observable.throw(error.statusText);
  }
}
