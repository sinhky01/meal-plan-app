import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    error: any;
    //url: string = 'http://localhost:4200';
    url: string = 'http://localhost:9595';
    //url: string = 'http://3.130.255.174:9595';

    constructor(private http: HttpClient) { }

    public fetchUser(id: number): Observable<User>{
        return this.http.get<User>(`${this.url}/api/v1/user/${id}`).pipe(catchError(this.handleError));

    }
    // public checkLogin(username: string, password: string): Observable<User>{
    //     return this.http.post<User>(`${this.url}/api/v1/user/login`,JSON.stringify(new User(username,password))).pipe(catchError(this.handleError));
    // }
    public getPreferences(id: number): Observable<Array<string>>{
        return this.http.get<Array<string>>(`${this.url}/api/v1/preferences/preferences/${id}`).pipe(catchError(this.handleError));
    }
    public getHistory(id: number):Observable<Array<string>>{
        return this.http.get<Array<string>>(`${this.url}/api/v1/history/user/${id}/favorited`).pipe(catchError(this.handleError));
    }
    public handleError(error: HttpErrorResponse){
        return Observable.throw(error.statusText);
    }

}