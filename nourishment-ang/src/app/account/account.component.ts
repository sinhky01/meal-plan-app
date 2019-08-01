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
  ingredient: string = "Pepper";
  favorite: string = "Chicken Bruschetta";



  constructor() { }

  ngOnInit() {
  }

}
