import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  fname: string;
  lname: string;
  u_id: number;
  username: string;
  //ingredient: string = "Pepper";
  //favorite: string = "Chicken Bruschetta";
  
  constructor() { }

  ngOnInit() {
    this.fname= sessionStorage.getItem("fname");
    this.lname= sessionStorage.getItem("lname");
    this.u_id = parseInt(sessionStorage.getItem("userId"), 10);
    this.username = sessionStorage.getItem("username");
  }

}
