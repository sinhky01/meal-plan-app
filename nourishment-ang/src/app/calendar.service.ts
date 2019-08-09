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

  addMeal(): Observable<Meal> {
    const getCalendarUrl = "api/v1/calendar/meal";
    const getCalendarUrlTemp = "http://localhost:9595/api/v1/calendar/meal";
    const uId = sessionStorage.getItem("userId");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const postObject = JSON.stringify({
      "id": {
        "dateTime": new Date("2019-08-11"),
        "userId": 1 //uId
      },
      "mealNum": 1,
      "user": "1", //uId,
      "recipe": {
        "recipeId": 11,
        "name": "Oatmeal Taco",
        "directions": "Cook oatmeal, put into taco shell"
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
