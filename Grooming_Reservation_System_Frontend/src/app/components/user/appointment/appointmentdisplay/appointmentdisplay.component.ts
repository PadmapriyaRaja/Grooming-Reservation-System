import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/dao/appointment';
import { Salon } from 'src/app/dao/salon';
import { Service } from 'src/app/dao/service';
import { Stylist } from 'src/app/dao/stylist';
import { User } from 'src/app/dao/user';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';


@Component({
  selector: 'app-appointmentdisplay',
  templateUrl: './appointmentdisplay.component.html',
  styleUrls: ['./appointmentdisplay.component.css'],
 
})
export class AppointmentdisplayComponent {
  constructor( public activeRoute:ActivatedRoute,
               public appointmentService:AppointmentService,
                public router:Router,
                public salonservice:SalonService,
                public serviceService:ServiceService,
                public stylistServiceService:StylistServiceService,
                public userdataservice:UserDataService){
    
  }
  appointmentId:any
  userid:number
  appointment:Appointment
  salonid:number
  servicesidstr:string
  servicesidarr :string[] = [];
  stylistid:number
  serviceidnum :number
  date:Date;
  salon:Salon;
  user:User;
  service:Service;
  services:Service[]=[];  
  stylist:Stylist;
  today = new Date().toISOString().split('T')[0];
  stylistfirstname="";
  stylistlastname="";
  
  totalserviceprice:number;
    ngOnInit(){
      
      this.totalserviceprice = parseInt(sessionStorage.getItem("totalserviceprice"));
      console.log(this.totalserviceprice);
      this.salonid=this.activeRoute.snapshot.params['salonid'];
      this.servicesidstr=this.activeRoute.snapshot.params['servicesid'];
      console.log(this.servicesidstr);
      this.stylistid=this.activeRoute.snapshot.params['stylistid'];
      this.appointmentId=this.activeRoute.snapshot.params['appointmentid'];
      this.userid=parseInt(sessionStorage.getItem("userid"));
      sessionStorage.setItem("appointmentid",this.appointmentId);
      this.appointmentService.getAppointmentByAppointmentId(this.appointmentId).subscribe(
        data=>{
          this.appointment=data,
         
          this.getSalonname(),
          this.getServicesname(),
          this.getStylistname(),
          this.getUsername()
          
          
        }
      )
    }
  getUsername() {
    this.userdataservice.getUserById(this.userid).subscribe(
      data=>this.user=data
    )
  }

  
  getStylistname() {
    this.stylistServiceService.getStylistById(this.stylistid).subscribe(
      data=>this.stylist=data
      
    )
  }
  getServicesname() {
    this.servicesidarr = this.servicesidstr.split(",")
    console.log(this.servicesidarr);
    for (let index = 0; index <this.servicesidarr.length-1; index++) {
    this.serviceService.getServicesById(parseInt(this.servicesidarr[index])).subscribe(
      data=>{
        this.service=data,
        this.services.push(this.service)
      }
    )
    }
  }
  getSalonname() {
    this.salonservice.getSalonById(this.salonid).subscribe(
     data=>this.salon=data
    )
    
  }

  
    
}
