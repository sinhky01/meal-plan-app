import { MealId } from './mealid'
// The purpose of this class is to be used with calendar service component, at least temporarily
export class Meal {
  id: MealId;
  mealNum: number; // number to represent breakfast, lunch, etc.
  constructor(id: MealId, mealNum: number){
    this.id = id;
    this.mealNum = mealNum;
  }
}