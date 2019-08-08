import { Injectable } from '@angular/core';
import { apiRecipe } from '../models/api-recipe.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse,HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiRecipeService {

  error: any;


  constructor(private http: HttpClient) { }

  public fetchMeal(): Observable<apiRecipe>{
    return this.http.get<apiRecipe>('https://www.themealdb.com/api/json/v1/1/random.php').pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse){
    return Observable.throw(error.statusText);
  }
}
