import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.component.html',
  styleUrls: ['./change-pw.component.css']
})
export class ChangePwComponent implements OnInit {
  userName: string;
  password1: string;
  password2: string;
  
  constructor() { }

  ngOnInit() {
  }

}
