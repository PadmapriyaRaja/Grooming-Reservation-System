import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/dao/address';
import { UserDataService } from '../userservices/userdataservice.service'; 

@Injectable({
  providedIn: 'root'
})
export class AddressServiceService {

  url = this.dataservice.url;

  constructor(private http:HttpClient,private dataservice: UserDataService ) { }


  addAddress(address:Address,userid:number){
    return this.http.post<Address>(`${this.url}/addAddress/${userid}`, address);
  }
  
  getAddressbyUserid(userid:number) {
    return this.http.get<Address[]>(`${this.url}/getAddressbyUserid/${userid}`);
  }

  getAddressById(addressid:number){
    return this.http.get<Address>(`${this.url}/getAddressById/${addressid}`);
  }
  updateAddressById(addressid:number,address:Address){
    return this.http.put<Address>(`${this.url}/updateAddressById/${addressid}`,address);
  }

  deleteAddressById(addressid:number){
    return this.http.delete<Address>(`${this.url}/deleteAddressById/${addressid}`);
  }
}
