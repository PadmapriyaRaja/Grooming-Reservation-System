import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-lpage',
  templateUrl: './lpage.component.html',
  styleUrls: ['./lpage.component.css']
})
export class LpageComponent {

  ngOnInit(){
    if(sessionStorage.getItem("navReloadFlag") == '1'){
      window.location.reload();
      sessionStorage.setItem("navReloadFlag", '0');
    }
    else{
      sessionStorage.setItem("navReloadFlag", '0');
    }
  }
  toName:string=""
  message:string=""
  emailaddress:string="";
 
  async sendEmail(){
  
  emailjs.init('LoBRX2-7OGdsF-RST');
  let response= emailjs.send("service_dn35s9b","template_m7ovp4y",{
  
      message: this.message,
      to_name: this.toName,
      from_email: this.emailaddress,
     
    });
    alert("Message has been sent");
  }
}
