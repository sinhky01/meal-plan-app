import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  fname: string = "Ricky";
  lname: string = "Richardson";
  u_id: number = 178456;
  username: string = "fish_are_friends_not_food"
  ingredients: string[] = ["Pepper", 'Chicken', 'Cinnamon'];
  favorites: string[] = ["Chicken Bruschetta",'Beef Noodle Stew', 'Pork Stir Fry'];



  constructor() { }

  ngOnInit() {
  }

}
