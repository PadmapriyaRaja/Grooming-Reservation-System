import { Component, Inject } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/dao/address';
import { ServiceService } from 'src/app/services/serviceservices/service.service';


@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.css'],
  
  
})
export class AppointmentdetailsComponent {

 
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private activeRoute:ActivatedRoute,private appointmentService:AppointmentService,private matDialog :MatDialog,private router:Router,private services:ServiceService){
    this.stylistidstr=data[2];
    this.salonidstr=data[0];
    this.salonid=parseInt(this.salonidstr)
    this.servicesidstr=data[1];
    this.stylistid=parseInt(this.stylistidstr);
    console.log(this.stylistid+"style");
    console.log(this.stylistidstr);
    console.log(this.servicesidstr);
    console.log(this.salonidstr);
  }
  ngOnInit(){
    this.appointment.appointmentGrandTotal= parseFloat(sessionStorage.getItem("totalserviceprice"));
    console.log("price="+this.appointment.appointmentGrandTotal);
    
  }
  appointments:Appointment[]=[];
  addr:Address;
  flag=1;
  stylistidstr:string="";
  salonidstr:string="";
  appointmentdate="";
  appointmentId:number=0;
  appointmentDatestr:any="";
  appointmentTime="";
  appointmentStatus="Cancelled";
  appointmentType="";
  appointmentGrandTotal:number=0;
  bookedid:number;
  salonid:number=0;
  servicesidstr:string;
  stylistid:number=0;
  servicesid:number=0;
  addressid:number=0;
  userid1:number=0;
  selectedAppointmentTime: any=null;
  selectedAddress: any=null;
  date:Date;
  isDisabled:boolean=true;
  isAvailable:boolean=true;
  today = new Date().toISOString().split('T')[0];
  appointmenttime= [
    '10:00:00',
    '13:00:00',
    '16:00:00'
  ];

  appointmenttime1:any[]=[];

  

  slots:any[]=[];
  time = new Date().toLocaleTimeString();
  address:Address[]=[];
  count:number=0;

  /* To display the slots on the current Day according to the current Time */
  slotCheckCurrentDay() {
    console.log("current day");
    console.log(this.appointments);
      for (let i = 0; i < this.appointmenttime.length; i++) {
       
        if(parseInt(this.appointmenttime[i]) > parseInt(this.time)){
         
          this.appointmenttime1.push(this.appointmenttime[i])
        }else{
          console.log("abcd")
        }
        
      }
      console.log(this.appointmenttime1);
      this.slots=this.appointmenttime1;
      console.log(this.slots);
    for (let k = 0; k < this.appointments.length; k++) {
      for (let l = 0; l < this.appointmenttime1.length ; l++) {
         if(this.appointments[k].appointmentTime==this.appointmenttime1[l]){
           this.slots.splice(l,1)
           
         }
        
      }  
  }
  }

  /* To display the slots on the future days   */
  slotCheckOtherDay(){
    console.log("other day")
    this.slots=this.appointmenttime;
    console.log(this.slots+"other");
    console.log(this.appointments);
    for (let k = 0; k < this.appointments.length; k++) {
      console.log(this.appointments[k].appointmentTime+" f")
           for (let l = 0; l < this.appointmenttime.length ; l++) {
            console.log(this.appointments[k].appointmentTime+" e")
              if(this.appointments[k].appointmentTime == this.appointmenttime[l]){
              
              console.log(this.slots[l]+"o");
                this.slots.splice(l,1)
                
              }else{
               console.log("ab")
              }
             
           }
        
    }
        console.log("after splice other"+this.slots)
  }

  /* Function to call currentDay and future days slots  */
  viewAvailabilty(){
  
   console.log(this.time);
    
    if(this.appointment.appointmentDate.toString() == this.today){
        this.slotCheckCurrentDay();
    }else{
     this.slotCheckOtherDay();
    }
  
  }
 


  selectedAppointmentType:any;
  appointmenttype=[
    'Parlourservice',
    'Homeservice',
    'Onsiteservice'
  ];
 appointmentDate=this.appointmentDatestr.toString();
 
  appointment: Appointment=new Appointment(
    this.appointmentId,
    this.appointmentDate,
    this.appointmentTime,
    this.appointmentStatus,
    this.appointmentType,
    this.appointmentGrandTotal,
    this.salonid,
    this.stylistid,
    this.userid1,
    this.servicesid);
 
  /* To change the appointment time  */
  onAppointmentTimeChange(){
    console.log(this.selectedAppointmentTime);
    this.appointment.appointmentTime = this.selectedAppointmentTime;
    
  }

  /* To change the appointment type  */
  onAppointmentTypeChange(){
    console.log(this.selectedAppointmentType);
    this.appointment.appointmentType = this.selectedAppointmentType;
  }

  useridstr=sessionStorage.getItem("userid");
  
  userid=parseInt(this.useridstr);
  bookAppointment(){
    console.log("in book appointment");
    
    /* To save the appointment in backend */
    this.appointmentService.saveAppointment(this.appointment,this.userid,this.salonid,this.servicesidstr,this.stylistid,this.addressid).subscribe(data=>{
      console.log("appointment booked"),
      this.bookedid=data.appointmentId,
      this.matDialog.closeAll();
      this.router.navigate(['appointmentdisplay',this.salonid,this.servicesidstr,this.stylistid,this.bookedid]);
      
    });
    
  } 
  
  /* To check the availability of the stylist */
  checkAvailabilty(){
    console.log(this.appointment.appointmentDate);
    console.log(this.stylistid)
     this.appointmentService.checkStylistAvailability(this.appointment.appointmentDate.toString(),this.stylistid).subscribe(
        data=>{
          this.appointments=data,
          console.log(data),
          this.isAvailable=!this.isAvailable;
          this.viewAvailabilty(),
          this.fetchaddress();
        }
     )
    
  }

  /* To fetch the address of the particular user */
  fetchaddress() {
    this.appointmentService.getAddressbyUserid(this.userid).subscribe(
      data=>{
        this.address=data;
      }
    )
  }
  
  /* To fetch the address of the particular user */
  onAddressChange(){
    
     this.addressid=this.selectedAddress.addressid;
     if(this.selectedAppointmentType!=null && this.selectedAppointmentTime!=null &&this.flag==1){
      this.isDisabled=!this.isDisabled;
      this.flag=0;
    }
  }
  
}
