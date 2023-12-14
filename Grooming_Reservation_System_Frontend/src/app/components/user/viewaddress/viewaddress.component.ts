import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/dao/address';
import { AddressServiceService } from 'src/app/services/addressservice/address-service.service'; 
import { UpdateaddressComponent } from '../updateaddress/updateaddress.component';

@Component({
  selector: 'app-viewaddress',
  templateUrl: './viewaddress.component.html',
  styleUrls: ['./viewaddress.component.css']
})
export class ViewaddressComponent {


  constructor(private addressService:AddressServiceService, private matDialog: MatDialog){}
recordsPerPage: string|number;
pagenum: string|number;
address: Address[]=[];

useridstr=sessionStorage.getItem("userid");
useridd=parseInt(this.useridstr);

ngOnInit(){
 
  this.addressService.getAddressbyUserid(this.useridd).subscribe(data => this.address=data);
}
updateaddress(addressid: any) {
  this.matDialog.open(UpdateaddressComponent,{
    width: '700px',
    data:addressid
  })
    
}
deleteaddress(addressid: number) {
 this.addressService.deleteAddressById(addressid).subscribe();
 window.location.reload();
  }
  
}
