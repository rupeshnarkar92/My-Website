import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RuteguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    if(localStorage.getItem("currentUser")) {
      return true
    }
    this.router.navigate(['/Login'], {queryParams:{returnUrl: state.url}});
    return false;
  }
}
