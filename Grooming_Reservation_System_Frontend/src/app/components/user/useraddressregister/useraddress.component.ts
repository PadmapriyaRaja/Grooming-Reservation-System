import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/dao/address'; 
import { AddressServiceService } from 'src/app/services/addressservice/address-service.service'; 

@Component({
  selector: 'app-useraddress',
  templateUrl: './useraddress.component.html',
  styleUrls: ['./useraddress.component.css']
})
export class UseraddressComponent {

addressid:number=0;
houseno="";
street="";
city="";
state="";
zipcode="";
country="";
  
  useridstr=sessionStorage.getItem("userid");
  userid=parseInt(this.useridstr);
constructor(private addressService:AddressServiceService,private router:Router){}
address:Address =new Address(this.addressid,this.houseno,this.street,this.city,this.state,this.zipcode,this.country);


registerAddress() {
  this.addressService.addAddress(this.address,this.userid).subscribe(()=>this.router.navigate['viewuser']);
}
  


}
