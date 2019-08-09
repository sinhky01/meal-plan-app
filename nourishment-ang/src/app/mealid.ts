export class MealId {
  dateTime: Date;
  userId: number; 
  
  constructor(dateTime: Date, userId: number){
    this.dateTime = dateTime;
    this.userId = userId;
  }
}