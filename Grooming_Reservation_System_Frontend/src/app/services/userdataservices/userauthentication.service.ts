import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataserviceService } from './userdataservice.service';
import { User } from '../../dao/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserauthenticationService {
  userdata : User;
  email: string;
  constructor(private dataservice: DataserviceService, private router: Router) { }

  validateUser(usermail: string , userpass: string ) {
    return this.dataservice.getUserByEmailPassword(usermail,userpass);
  }
  

  isUserLoggedIn(){
    let user= sessionStorage.getItem('usermail');
    return !(user==null);
  }

  logout(){
    sessionStorage.removeItem("usermail");
    sessionStorage.removeItem("username");
  }
  
}

