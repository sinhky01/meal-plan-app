import { Injectable } from '@angular/core';
import { Observable, of } from'rxjs';
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
   return this.http.get<Meal[]>(this.calendarUrlTemp);
 }

 private calendarUrl = 'api/v1/calendar/user/' + sessionStorage.getItem("userId");
 
 private calendarUrlTemp = 'http://localhost:9595/api/v1/calendar/user/' + sessionStorage.getItem("userId");

  constructor(private http: HttpClient) { }
}
