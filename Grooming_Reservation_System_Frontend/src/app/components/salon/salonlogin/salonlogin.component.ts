import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';


@Component({
  selector: 'app-salonlogin',
  templateUrl: './salonlogin.component.html',
  styleUrls: ['./salonlogin.component.css']
})

export class SalonLoginComponent {

  inpusermail= "";
  inpuserpass= "";
  errorMessage="Invalid Credentials";
  loginuser:boolean= false ;
  

  constructor(private salonservice:SalonService, private router: Router,private matDialog: MatDialog){}

  registerbtn(){
    this.router.navigate(['salonregistration']);
  }
  handlelogin() {
      console.log("In handle login")
      this.salonservice.getSalonByEmailPassword(this.inpusermail,this.inpuserpass).subscribe(
        data=>{
              sessionStorage.setItem("salonemailid",data.salonemailid),
              sessionStorage.setItem("salonname",data.salonname),
              sessionStorage.setItem("salonid",data.salonid),
              this.router.navigate(['salonhomepage']),
              this.loginuser = true
              },banckenderror=>this.errorHandling(banckenderror)
        
              );
            
          
          }
          
          errorHandling(banckenderror: any): void {
            if(banckenderror.status==400){
              this.matDialog.open(InvalidcomponentComponent,{
                width: '250px', 
                data:"Invalid Credentials"
              })
          }
          else{
            this.matDialog.open(InvalidcomponentComponent,{
              width: '250px',
              data:"Cannot Connect to Server"
          })
          }

          }
        
        
    
}


