import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stylist } from '../../dao/stylist';
import { UserDataService } from '../userservices/userdataservice.service';

@Injectable({
  providedIn: 'root'
})
export class StylistServiceService {

  constructor(private http:HttpClient,private dataservice: UserDataService ) { }
  url = this.dataservice.url;

  getAllStylist(){
    return this.http.get<Stylist[]>(`${this.url}/getAllStylist`);
  }

  geAlltStylistBySalonId(salonid:number){
    return this.http.get<Stylist[]>(`${this.url}/geAlltStylistBySalonId/${salonid}`);
  }
  addStylist(stylist:Stylist,salonid : any){
    return this.http.post<Stylist>(`${this.url}/addStylist/${salonid}`,stylist)
  }
  updateStylist(stylist:Stylist,stylistid:number){
    return this.http.put<Stylist>(`${this.url}/updateStylistById/${stylistid}`,stylist)
  }
  getStylistById(stylistid:number){
    return this.http.get<Stylist>(`${this.url}/getStylistById/${stylistid}`)
  }
  deleteStylistById(stylistid:number){
    return this.http.delete<Stylist[]>(`${this.url}/deleteStylistById/${stylistid}`)
  }

}
