import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  constructor(public appointmentservice:AppointmentService,public salonservice:SalonService,
    public serviceService:ServiceService,
    public stylistServiceService:StylistServiceService,
    public userdataservice:UserDataService,
    @Inject(MAT_DIALOG_DATA) public data:any){
      this.appointmentId=data
    }
    appointmentId:any;
  appointment:any;
  salon:Salon;
  user:User;
  service:Service;
  services:Service[]=[];  
  stylist:Stylist;
  servicesidarr :string[] = [];
  salonid:number=0;
  
    ngOnInit(){
  
      this.appointmentservice.getAppointmentByAppointmentId(this.appointmentId).subscribe(
      
        data=>{
        this.appointment=data,
        console.log(this.appointment)
       } 
        )
     
    }
   

}
