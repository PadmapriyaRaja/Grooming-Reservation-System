import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/dao/user';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';

import { EmailFormatClass } from 'src/app/dao/email-format-class';
import { EmailserviceService } from 'src/app/services/emailservice.service';

@Component({
  selector: 'app-forgotpasssword',
  templateUrl: './forgotpasssword.component.html',
  styleUrls: ['./forgotpasssword.component.css']
})
export class ForgotpassswordComponent {
  useremail:string;
  user:User;
  isDisabled:boolean=true;
  isEmailDisabled:boolean=true;
  isAuthorised:boolean=false;
  firstpassword:string;
  secondpassword:string;
  isOptSent: boolean=false;
  isUserPresent:boolean=false;
  otp: number;
  inpOtp: number;
  
  
 constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private userservice:UserDataService,
    private matDialog:MatDialog,
    private emailService: EmailserviceService
  ){}
 validateUser(){
    this.userservice.checkUserExists(this.useremail).subscribe(
      data=> {this.isUserPresent=data,
        this.enableOtpField()

      },banckenderror=>this.errorHandling(banckenderror)
    )
 }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==400){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"Something Went Wrong"
      })
    }
  }

  enableOtpField(){
    
    if(!this.isUserPresent){
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"No user found"
      })
    }
    else{
      this.isEmailDisabled=!this.isEmailDisabled;
      this.sendOtp()
      this.isDisabled=!this.isDisabled;
     
    }
  }

  sendOtp(){
  const to=`${this.useremail}`;
  const  subject="Password Reset";
  this.otp =Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  const  body=`Greetings from ChromaCuts!! \nYour One-Time Password (OTP) is: ${this.otp} to reset password for ChromaCuts account \n DO NOT share it with anyone`;
  const sendOtpUserData: EmailFormatClass = new EmailFormatClass(to, subject, body);
  this.emailService.sendOtp(sendOtpUserData).subscribe();
  this.matDialog.open(InvalidcomponentComponent,{
    width: '250px', 
    data:"OTP Sent successfully"
  })
  }

  checkOtp() {
    
    if(this.otp == this.inpOtp){
      this.isDisabled=!this.isDisabled;
      this.isAuthorised = !this.isAuthorised;
   
    }
    else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"Incorrect OTP"
      })
    }
  }

  savePass(user: User){
    user.userpassword = this.firstpassword;
    this.userservice.updateUserById(user.userid,user).subscribe(
      ()=>{
      console.log("password is updated"),
      window.location.reload();
      }),banckenderror=>this.errorHandling(banckenderror)
  }

  updatepass(){
     if(this.firstpassword == this.secondpassword){
      // this.user.userpassword=this.firstpassword;
      console.log(this.useremail)
      this.userservice.getUserByEmail(this.useremail).subscribe(data=>this.savePass(data));
      console.log(this.user)
      
     }else{
      this.matDialog.open(InvalidcomponentComponent,{
        width: '250px', 
        data:"password does not match"
      })
     }
  }

}
