import { Injectable } from '@angular/core';
import { Ingredient} from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { MealComposition } from '../models/meal-composition.model';

import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  error: any;
  readonly uriBase: string = "http://3.130.255.174:9595/api/v1/";
  constructor(private http:HttpClient) { }

  //TODO set get path based on id passed
  public fetchRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.uriBase + 'recipe/view/' + id).pipe(catchError(this.handleError));
  }

  public fetchAllRecipes(): Observable<Array<Recipe>> {
    return this.http.get<Array<Recipe>>(this.uriBase + 'recipe/view/all').pipe(catchError(this.handleError));
  }

  //TODO set path based on recipeId passed. Server should return as array of ingredients
  public fetchIngredients(recipeId: number):Observable<Array<Ingredient>> {
    return this.http.get<Array<Ingredient>>(this.uriBase + 'ingredients/meal/' + recipeId).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    return Observable.throw(error.statusText);
  }
}