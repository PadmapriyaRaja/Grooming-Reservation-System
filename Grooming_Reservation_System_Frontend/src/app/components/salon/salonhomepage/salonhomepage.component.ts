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
  }

logout() {
  this.salonservice.logout();
  this.router.navigate(['salonlogin']);
}
  

  
}
