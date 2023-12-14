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
  }

  logout() {
    this.userauthentication.logout();
    this.router.navigate(['lpage']);
  }

}
