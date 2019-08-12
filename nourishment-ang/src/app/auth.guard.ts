import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/auth-guard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authenticationService: AuthenticationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      if(sessionStorage.getItem("username")){
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }
}
