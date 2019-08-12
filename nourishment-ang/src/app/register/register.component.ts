import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  fname: string = '';
  lname: string = '';
  password: string = '';
  passwordConfirm: string = '';
  user: User;
  
  
  //url: string = 'http://localhost:9595';
  url: string = 'http://3.130.255.174:9595';

  constructor(
    private http: HttpClient,
    private router: Router

  ) {}

  ngOnInit() {
  }

  onSubmit() {
    console.log("hit method");
    if (this.password === this.passwordConfirm) {
      console.log("passed if");
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      this.user=new User();
      //this.user.userId=11111111;
      this.user.username = this.username;
      this.user.fname = this.fname;
      this.user.lname = this.lname;
      this.user.password = this.password;
      this.http.post<User>(`${this.url}/api/v1/user/user`, JSON.stringify(this.user),httpOptions).subscribe(
        user => this.user = user
      );

      this.router.navigate([`/login`]);
    }
  }

}
