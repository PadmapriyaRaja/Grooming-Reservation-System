import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../../dao/service';
import { UserDataService } from '../userservices/userdataservice.service'; 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = this.userDataService.url;
  totalserviceprice:number;
  constructor(private http:HttpClient,private userDataService: UserDataService ) { }
  
  getAllServices(){
    return this.http.get<[Service]>(`${this.url}/getAllServices`);
  }

  getAllServicesBySalonId(salonid:number){
    return this.http.get<Service[]>(`${this.url}/geAlltServicesBySalonId/${salonid}`);
  }

  getServicesById(servicesid:number){
    return this.http.get<Service>(`${this.url}/getServicesById/${servicesid}`);
  }

  updateServiceByServiceId(servicesid:number,services:Service){
    return this.http.put<Service>(`${this.url}/updateServiceByServiceId/${servicesid}`,services);
  }
  deleteServiceByServiceId(servicesid:number){
    return this.http.delete<Service[]>(`${this.url}/deleteServiceByServiceId/${servicesid}`);
  }

  saveServices(services:Service,salonid:number){
    return this.http.post<Service>(`${this.url}/addServices/${salonid}`,services);
  }

  sendTotalPrice(serviceprice:number){
   this.totalserviceprice=serviceprice;
   sessionStorage.setItem("totalserviceprice", this.totalserviceprice.toString());
  }

  getTotalPrice():number{
    return this.totalserviceprice;
  }
}
