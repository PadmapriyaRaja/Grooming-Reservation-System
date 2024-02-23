import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Appointment } from 'src/app/dao/appointment';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';

declare var Razorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  
})
export class PaymentComponent {
constructor(private router:Router,private servicesServices:ServiceService,private appointmentService:AppointmentService,private activatedRoute:ActivatedRoute){}
  totalserviceprice= parseInt(sessionStorage.getItem("totalserviceprice"));
  usename=sessionStorage.getItem("username");
  useremail=sessionStorage.getItem("usermail");
  flag:number=0;
  appointmentid:number;
  //appointmentidstr=sessionStorage.getItem("appointmentid");
  //appointmentid=parseInt(this.appointmentidstr);
  appointment:Appointment;
  ngOnInit(){
    this.appointmentid=this.activatedRoute.snapshot.params['appointmentid'];
    this.appointmentService.getAppointmentByAppointmentId(this.appointmentid).subscribe(
      data=>{this.appointment=data,
        console.log(data)
      }
    )
  }
  
  
  payNow(){
    
     const RazorpayOptions={
      description:"Chromacuts Payment",
      currency:'INR',
      amount: this.totalserviceprice * 100,
      name:'Chromacuts',
      key:'rzp_test_ATUM4LgQCQei4i',
      image:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp',
       
      handler: (response:any) =>{
        
        this.processResponse(response);  
        if(response){
          this.onSubmit();
          this.router.navigate(['appointmentreciept'])
        }
        },
        prefill:{
          name:'customer name',
          contact:'1234567890',
          email:'groomingreservation@gmail.com'
        },
        
      theme:{
        color:'#056df5'
      },
      modal:{
        ondismiss:()=>{
          console.log("dismissed"); 
        }
      } 
     }
     var razorPayObject=new Razorpay(RazorpayOptions);
        razorPayObject.open();

       
  }
  // if(this.flag==1){
  
  
  processResponse(response: any) {
    console.log(response);  
  }

  onSubmit() {
    console.log('update called');
    this.appointmentService.updateBooking(this.appointmentid,this.appointment).subscribe(
      data=>{
        console.log("appointment booked");
      }
    )
  }

}
//5267 3181 8797 5449
//success@razorpay
