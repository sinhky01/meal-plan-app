import { Injectable } from '@angular/core';
import { Observable, of } from'rxjs';
import { Meal } from './meal';
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

 private calendarUrl = 'api/v1/calendar';
 // this is a hardwired search for user 1 for now, will need to make the user# parameter mutable
 private calendarUrlTemp = 'http://localhost:9595/api/v1/calendar/user/1';

  constructor(private http: HttpClient) { }
}
