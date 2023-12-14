import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/dao/appointment';
import { Salon } from 'src/app/dao/salon';
import { Service } from 'src/app/dao/service';
import { Stylist } from 'src/app/dao/stylist';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';


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
                public stylistServiceService:StylistServiceService){
    
  }
  appointmentId:any
  userid:number
  appointment:Appointment
  salonid:number
  servicesid:number
  stylistid:number

  salon:Salon;
  //services:Service[]=[];
  stylist:Stylist;

  stylistfirstname="";
  stylistlastname="";
  
  totalserviceprice:number;
    ngOnInit(){
      // this.totalserviceprice=this.serviceService.getTotalPrice();
      this.totalserviceprice = parseInt(sessionStorage.getItem("totalserviceprice"));
      console.log(this.totalserviceprice);
      this.salonid=this.activeRoute.snapshot.params['salonid'];
      this.servicesid=this.activeRoute.snapshot.params['servicesid'];
      this.stylistid=this.activeRoute.snapshot.params['stylistid'];
      this.appointmentId=this.activeRoute.snapshot.params['appointmentid'];
      sessionStorage.setItem("appointmentid",this.appointmentId);
      this.appointmentService.getAppointmentByAppointmentId(this.appointmentId).subscribe(
        data=>{
          this.appointment=data,
         
          this.getSalonname(),
          //this.getServicesname(),
          this.getStylistname()
          
          
        }
      )
    }

  
  getStylistname() {
    this.stylistServiceService.getStylistById(this.stylistid).subscribe(
      data=>this.stylist=data
      
    )
  }
  // getServicesname() {
  //   this.serviceService.getServicesById(this.servicesid).subscribe(
  //     data=>{
  //       this.services=data
  //     }
  //   )
  // }
  getSalonname() {
    this.salonservice.getSalonById(this.salonid).subscribe(
     data=>this.salon=data
    )
    
  }

  
    
}
