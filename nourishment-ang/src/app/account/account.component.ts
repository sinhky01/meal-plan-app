import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  fname: string;
  lname: string;
  u_id: number;
  username: string;
  //ingredients: string[] = ["Pepper", 'Chicken', 'Cinnamon'];
  //favorites: string[] = ["Chicken Bruschetta",'Beef Noodle Stew', 'Pork Stir Fry'];

  public ingredients: string[];
  public favorites: string[];

  request: HttpClient;

  constructor(private user: UserService) { }

  ngOnInit() {

    this.fname= sessionStorage.getItem("fname");
    this.lname= sessionStorage.getItem("lname");
    this.u_id = parseInt(sessionStorage.getItem("userId"), 10);
    this.username = sessionStorage.getItem("username");

    this.getPreferences(parseInt(sessionStorage.getItem("userId"), 10));
    this.getHistory(parseInt(sessionStorage.getItem("userId"), 10));

  }

  getPreferences(id: number): void {
    this.user.getPreferences(id).subscribe(
      ingredients => this.ingredients = ingredients
    );
  }
  getHistory(id: number): void {
    this.user.getHistory(id).subscribe(
      favorites => this.favorites = favorites
    );
  }
}
