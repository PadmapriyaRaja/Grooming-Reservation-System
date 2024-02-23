import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent {


  constructor(private router:Router, private userauthentication:UserauthenticationService){}

  username: string;

  ngOnInit(){
    this.username = sessionStorage.getItem("username");
    if(sessionStorage.getItem("navReloadFlag") == '0'){ 
      sessionStorage.setItem("navReloadFlag", '1');
      window.location.reload();
    }
  }

  logout() {
    this.userauthentication.logout();
    sessionStorage.setItem("navBarReloadFlag", '1');
    this.router.navigate(['lpage']);
  }

}
