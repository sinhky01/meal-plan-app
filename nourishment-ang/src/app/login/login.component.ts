import { Component, OnInit } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/auth-guard.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // loginForm: FormGroup;
  //url: string = 'http://localhost:9595';
  url:string='http://3.130.255.174:9595';
  username: string = '';
  password: string = '';
  user: User;

  constructor(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationService: AuthenticationService
    private http: HttpClient,
    private router: Router
  ){};

  //get f() { return this.loginForm.controls; }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl("username"),
    //   password: new FormControl("password")
    // });
  }

  onSubmit(){
    //this.http.post<User>("hi","hey");
    

    // this.username = (<HTMLInputElement>document.getElementById("username")).value;
    // this.password = (<HTMLInputElement>document.getElementById("password")).value;
    this.http.post<User>(`${this.url}/api/v1/user/login?user=${this.username}`,{}).subscribe(
      user => this.user = user
    );
    console.log('before the first check on the user object');
    console.log(this.user);
    if(this.user){
      console.log("passed the truthy User check");
      if(this.password === this.user.password){
        let id = this.user.userId.toString();
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("userId", id);
        sessionStorage.setItem("fname",this.user.fname);
        sessionStorage.setItem("lname",this.user.lname);
        
        this.router.navigate([`/main`]);
      }
    }
  }

  storeUser(){

  }
}
