import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
constructor(private router:Router,private servicesServices:ServiceService,private appointmentService:AppointmentService){}
  totalserviceprice= parseInt(sessionStorage.getItem("totalserviceprice"));
  usename=sessionStorage.getItem("username");
  useremail=sessionStorage.getItem("usermail");
  flag:number=0;
  appointmentidstr=sessionStorage.getItem("appointmentid");
  appointmentid=parseInt(this.appointmentidstr);
  appointment:Appointment;
  ngOnInit(){
    this.appointmentService.getAppointmentByAppointmentId(this.appointmentid).subscribe(
      data=>this.appointment=data
    )
  }
  // paynow(){
  //   const RazorpayOpitions={
  //     description:'Sample Razorpay demo',
  //     currency:'INR',
  //     amount:this.totalserviceprice*100,
  //     name:this.usename,
  //     key:'rzp_test_ATUM4LgQCQei4i',
  //     image:'http://i.imgur.com/FApqk3D.jpeg',
  //     prefills:{
  //       name:this.usename,
  //       email:this.useremail,
  //       phone:'9999999999'

  //     },
  //     theme:{
  //       color:'#f37254'
  //     },
  //     modal:{
  //       ondismiss:()=>{
  //         console.log('dismissed')
  //       }
  //     }
  //   }
  //   const sucessCallBack=(paymentid:any)=>{
  //     console.log(paymentid)
      
      
  //   }
  //   const failureCallBack=()=>{
  //     console.log('failed')
  //   }

  //   Razorpay.open(RazorpayOpitions,sucessCallBack,failureCallBack),
  //   this.router.navigate(['homepage']);
  // }
  
  payNow(){
    
     const RazorpayOptions={
      description:"Chromacuts Payment",
      currency:'INR',
      amount: this.totalserviceprice * 100,
      name:'Chromacuts',
      key:'rzp_test_wfSbOdujuA59pc',
      image:'http://i.imgur.com/FApqk3D.jpeg',
       
      handler: (response:any) =>{
        
        this.processResponse(response);  
        if(response){
          this.onSubmit();
          this.router.navigate(['/homepage'])
        }
        },
        prefill:{
          name:'customer name',
          contact:'1234567890',
          email:'admin@gmail.com'
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
    this.appointmentService.updateBooking(this.appointmentid,this.appointment);
  }

}
//5267 3181 8797 5449
//success@razorpay
