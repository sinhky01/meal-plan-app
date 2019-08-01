import { Injectable } from '@angular/core';
import { Observable, of } from'rxjs';
import { Meal } from './meal';

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
  //  This next line will return observable result from http request
  //  return of(Meal);
 }

  constructor() { }
}
