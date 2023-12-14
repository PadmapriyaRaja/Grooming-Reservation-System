import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/dao/address';
import { AddressServiceService } from 'src/app/services/addressservice/address-service.service'; 

@Component({
  selector: 'app-updateaddress',
  templateUrl: './updateaddress.component.html',
  styleUrls: ['./updateaddress.component.css']
})
export class UpdateaddressComponent {

  address:Address;
  addressid: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private addressService :AddressServiceService)
  { 
    this.addressid = data;
  }

  ngOnInit(){
    this.addressService.getAddressById(this.addressid).subscribe(data=> this.address = data);
  }

  updateAddress() {
    this.addressService.updateAddressById(this.addressid,this.address).subscribe(()=> console.log('Address updated'));
    window.location.reload();
  }

}
