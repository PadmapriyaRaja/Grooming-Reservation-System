import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserauthenticationService } from './userservices/userauthentication.service';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{
  constructor(private userauthentication:UserauthenticationService,
    public router:Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.userauthentication.isUserLoggedIn()){
          return true;
        }else{
          this.router.navigate(['login']);
        }
        return false; 
  }
  

}
