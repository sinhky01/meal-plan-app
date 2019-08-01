import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  fname: string = "Ricky";
  lname: string = "Richardson";
  u_id: number = 178456;
  ingredient: string = "Pepper";
  favorite: string = "Chicken Bruschetta";
  
  constructor() { }

  ngOnInit() {
  }

}
