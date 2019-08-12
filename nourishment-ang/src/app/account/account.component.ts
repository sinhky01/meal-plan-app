import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  fname: string = sessionStorage.getItem("fname");
  lname: string = sessionStorage.getItem("lname");
  u_id: number = parseInt(sessionStorage.getItem("id"),10);
  username: string = sessionStorage.getItem("username");
  //ingredients: string[] = ["Pepper", 'Chicken', 'Cinnamon'];
  //favorites: string[] = ["Chicken Bruschetta",'Beef Noodle Stew', 'Pork Stir Fry'];

  public ingredients: string[];
  public favorites: string[];

  request: HttpClient;

  constructor(private user:UserService) { }

  ngOnInit() {
    sessionStorage.setItem("fname","Ricky");
    sessionStorage.setItem("lname","Rickyson");
    sessionStorage.setItem("username","fish_are_friends");
    sessionStorage.setItem("id","1");

    this.getPreferences(parseInt(sessionStorage.getItem("id"),10));
    this.getHistory(parseInt(sessionStorage.getItem("id"),10));

  }

  getPreferences(id: number): void{
    this.user.getPreferences(id).subscribe(
      ingredients => this.ingredients = ingredients
    );
  }
  getHistory(id: number): void{
    this.user.getHistory(id).subscribe(
      favorites => this.favorites = favorites
    );
  }
}
