import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  username: any;
  usermail: any;
  isUserLoggedIn:boolean=false;
  isSalonLoggedIn: boolean=false;
  isLoggedIn:boolean;
  ngOnInit() {
    this.isUserLoggedIn = this.userauthentication.isUserLoggedIn();
    this.isSalonLoggedIn = this.salonservice.isUserLoggedIn();
    if( this.isUserLoggedIn || this.isSalonLoggedIn){
      this.isLoggedIn =true;
    }

    // Subscribe to route fragment changes
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Scroll to the element with the specified fragment ID
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }


  constructor(private router: Router,
     public userauthentication: UserauthenticationService,
     public salonservice:SalonService,
      private route: ActivatedRoute){
    this.username = sessionStorage.getItem("username");
    
  }

  // logout() {
  //   this.userauthentication.logout();
  //   this.router.navigate(['lpage']);
  // }

  userLogout() {

    this.userauthentication.logout();
    this.router.navigate(['lpage']);
    }
    salonLogout() {

    this.salonservice.logout();
    this.router.navigate(['lpage']);
    }

}
