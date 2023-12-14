import { Component, Inject } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.component.html',
  styleUrls: ['./appointmentdetails.component.css'],
  
  
})
export class AppointmentdetailsComponent {

 
  constructor(@Inject(MAT_DIALOG_DATA) public data:number,private activeRoute:ActivatedRoute,private appointmentService:AppointmentService,private matDialog :MatDialog,private router:Router){
    this.stylistidstr=data[2];
    this.salonidstr=data[0];
    this.salonid=parseInt(this.salonidstr)
    this.servicesidstr=data[1];
    this.stylistid=parseInt(this.stylistidstr);
    console.log(this.stylistid);
    console.log(this.stylistidstr);
    console.log(this.servicesidstr);
    console.log(this.salonidstr);
  }
  ngOnInit(){
    // this.salonid=this.activeRoute.snapshot.params['salonid'];
    // this.servicesidstr=this.activeRoute.snapshot.params['servicesid'];
    // this.stylistid= this.activeRoute.snapshot.params['stylistid'];
    
  }
  appointments:Appointment[]=[];

  flag=1;
 //flag:number=0;
  stylistidstr:string="";
  salonidstr:string="";
  appointmentdate="";
  appointmentId:number=0;
  appointmentDatestr:any="";
  appointmentTime="";
  appointmentStatus="Booked";
  appointmentType="";
  bookedid:number;
  salonid:number=0;
  servicesidstr:string;
  stylistid:number=0;
  servicesid:number=0;
  userid1:number=0;
  selectedAppointmentTime: any=null;
  date:Date;
  isDisabled:boolean=true;
  today = new Date().toISOString().split('T')[0];
  appointmenttime= [
    '10:00:00',
    '11:00:00',
    '12:00:00'
  ];

  slots=[
    '10:00:00',
    '11:00:00',
    '12:00:00'
  ];
  count:number=0;
  viewAvailabilty(){
   // this.slots=this.appointmenttime
    for (let k = 0; k < this.appointments.length; k++) {
      for (let l = 0; l < this.appointmenttime.length ; l++) {
         if(this.appointments[k].appointmentTime==this.appointmenttime[l]){
         // console.log(this.appointmenttime[l]);
         console.log(this.slots[l]);
           this.slots.splice(l,1)
           
         }else{
          this.count++;
         }
        
      }
   
   }
   console.log(this.count)
   console.log(this.slots)
  }
  




  selectedAppointmentType:any;
  appointmenttype=[
    'Parlourservice',
    'Homeservice',
    'Onsiteservice'
  ];
 // appointmentDate=new Date(this.appointmentDatestr);
 appointmentDate=this.appointmentDatestr.toString();
 
  appointment: Appointment=new Appointment(this.appointmentId,this.appointmentDate,
    this.appointmentTime,this.appointmentStatus,this.appointmentType,this.salonid,this.stylistid,this.userid1,this.servicesid);
 
  onAppointmentTimeChange(){
    console.log(this.selectedAppointmentTime);
    this.appointment.appointmentTime = this.selectedAppointmentTime;
    
  }
  onAppointmentTypeChange(){
    console.log(this.selectedAppointmentType);
    this.appointment.appointmentType = this.selectedAppointmentType;
    if(this.selectedAppointmentTime!=null && this.flag==1){
      this.isDisabled=!this.isDisabled;
      this.flag=0;
    }
    // if(this.flag==1 && this.appointmentTime!=""){
    //   this.isDisabled=false
      
    // }
  }
  validate(){
    console.log("in validate");
   
    
  }
  useridstr=sessionStorage.getItem("userid");
  
  userid=parseInt(this.useridstr);
  bookAppointment(){
    console.log("in book appointment");
    
    this.appointmentService.saveAppointment(this.appointment,this.userid,this.salonid,this.servicesidstr,this.stylistid).subscribe(data=>{
      console.log("appointment booked"),
      this.bookedid=data.appointmentId,
      
      this.router.navigate(['appointmentdisplay',this.salonid,this.servicesidstr,this.stylistid,this.bookedid]);
      
    });
    
  }

  checkAvailabilty(){
    console.log(this.appointment.appointmentDate);
    console.log(this.stylistid)
     this.appointmentService.checkStylistAvailability(this.appointment.appointmentDate.toString(),this.stylistid).subscribe(
        data=>{
          this.appointments=data,
          console.log(data),
          //this.flag=1,
          this.viewAvailabilty();
        }
     )
    
  }
  
}