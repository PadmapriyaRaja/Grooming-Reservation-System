import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';


@Component({
  selector: 'app-salonhomepage',
  templateUrl: './salonhomepage.component.html',
  styleUrls: ['./salonhomepage.component.css']
})
export class SalonhomepageComponent {
  salonname: string;
  constructor(private router:Router,private salonservice:SalonService){}
  ngOnInit(){
    this.salonname = sessionStorage.getItem("salonname");
    console.log(this.salonname);
    if(sessionStorage.getItem("navReloadFlag") == '0'){
      sessionStorage.setItem("navReloadFlag", '1');
      window.location.reload();
    }
  }

logout() {
  this.salonservice.logout();
  sessionStorage.setItem("navReloadFlag", '0');
  this.router.navigate(['salonlogin']);
}
  

  
}
