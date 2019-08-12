import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meal } from './meal';
import { MealId } from './mealid';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  // this function will retrieve an array of meal/dates
  // returned items will include 
  /* 1) date
     2) meal(breakfast, lunch, dinner)
     3) recipe
  */
  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.calendarUrl);
  }

  addMeal(mealDate: Date, userId: number, mealNum: number, recipeId: number, name: string, directions: string): Observable<Meal> {
    const getCalendarUrl = "api/v1/calendar/meal";
    const getCalendarUrlTemp = "http://3.130.255.174:9595/api/v1/calendar/meal";
    const uId = sessionStorage.getItem("userId");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const postObject = JSON.stringify({
      "id": {
        "dateTime": mealDate,
        "userId": userId //uId
      },
      "mealNum": mealNum,
      "user": userId, //uId,
      "recipe": {
        "recipeId": recipeId,
        "name": name,
        "directions": directions
      }
    });
    console.log("post part 2");
    console.log(`Calendar Url: ${getCalendarUrl}\n postObject: ${postObject}\n Http options: ${JSON.stringify(httpOptions)}`);
    return this.http.post<Meal>(getCalendarUrl, postObject, httpOptions);
  }

  private calendarUrl = 'api/v1/calendar/user/' + sessionStorage.getItem("userId");

  private calendarUrlTemp = 'http://localhost:9595/api/v1/calendar/user/' + sessionStorage.getItem("userId");



  constructor(private http: HttpClient) { }
}
