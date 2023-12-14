// npm install ngx-bootstrap --save
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { UserauthenticationService } from 'src/app/services/userservices/userauthentication.service'; 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {



  p : number =1;
  count : number =8;
  username: string;
  useremail:string;
  salons: Salon[]=[];
  currentIndex: number;
  categories: string[];

  redirect(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
    }
  
  logout() {
    console.log('loggeedout');
    this.userauthentication.logout();
    this.router.navigate(['lpage']);
  }

  ngOnInit(){
    this.username = sessionStorage.getItem("username"); 
    this.useremail=sessionStorage.getItem("usermail");    
    this.salondataservice.getAllEnabledSalonByRatingDesc().subscribe(data=>this.salons=data);
    this.salondataservice.getAllSalonCategories().subscribe(data => this.categories=data);
    // console.log('abcd',this.salondataservice.getAllSalonWithCount());
  }

  getSalonbyCategory(salonCatergory: string) {

    console.log('inside getSalonbyCategory');
    this.salondataservice.getEnabledSalonByCategory(salonCatergory).subscribe(data=>this.salons=data);
    }

  constructor(private viewportScroller: ViewportScroller,private router:Router, private userauthentication: UserauthenticationService, private salondataservice: SalonService){}
  

  
}
