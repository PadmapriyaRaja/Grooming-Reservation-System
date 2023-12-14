import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Salon } from 'src/app/dao/salon';
import { UserDataService } from '../userservices/userdataservice.service'; 
import { Service } from 'src/app/dao/service';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
    
  salon:Salon;
  isUserLoggedIn(){
    let salon= sessionStorage.getItem('salonemailid');
    return !(salon==null);
  }

  logout(){
    sessionStorage.removeItem('salonemailid');
    sessionStorage.removeItem('salonname');
  }
  

  constructor(private http:HttpClient, private dataservice: UserDataService) { }

  url = this.dataservice.url;

  addsalon(salon: Salon) {
   return this.http.post<Salon>(`${this.url}/saveSalon`,salon);
  }
 
  getSalonByEmailPassword(salonemailid :string,salonpassword:string){
    return this.http.get<Salon>(`${this.url}/getSalonByEmailPassword/${salonemailid}/${salonpassword}`)
  }
  
  getAllSalon(){
    return this.http.get<Salon[]>(`${this.url}/getAllSalon`);
  }

  // getAllSalonWithCount(){
  //   return this.http.get<any[]>(`${this.url}/getAllSalon`, { observe: 'response' }).subscribe(data=>{
  //     const contentRangeHeader = data.headers.get('Content-Range');

  //       if (contentRangeHeader) {
  //         const totalItems = +contentRangeHeader.split('/').pop();
  //         // console.log('Total items:', totalItems);
  //       }

  //       // Your data handling logic here
  //       // console.log('Data from backend:', data.body);
  //   });
  // }

  updateSalonById(salonid: any, salon: Salon){
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`,salon);
  }
  
  searchSalonlike(value: string) {
    return this.http.get<Salon[]>(`${this.url}/searchSalonlike/${value}`);
  }
  
  searchSalonByStatus(selectedSalonStatus: any) {
    return this.http.get<Salon[]>(`${this.url}/searchSalonByStatus/${selectedSalonStatus}`);
  }
  
  getSalonById(salonid:any){
    return this.http.get<Salon>(`${this.url}/getSalonById/${salonid}`)
  }

  disableSalonById(salonid: any, salon: Salon){
    salon.salonstatus='Disabled';
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`, salon);
  }

  enableSalonById(salonid: any, salon: Salon){
    salon.salonstatus='Enabled';
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`, salon);
  }

  rejectSalonById(salonid: any, salon: Salon){
    salon.salonstatus='Rejected';
    return this.http.put<Salon>(`${this.url}/updateSalonById/${salonid}`, salon);
  }

  deleteSalonById(salonid: any){
    return this.http.delete<Salon>(`${this.url}/deleteSalonByid/${salonid}`);
  }

  getAllSalonCategories() {
    return this.http.get<string[]>(`${this.url}/getAllSalonCategories`);
  }

  getAllEnabledSalon(){
    return this.http.get<Salon[]>(`${this.url}/getAllEnabledSalon`);
  }

  getAllCities(obj:any){
    return this.http.get<Salon[]>(`https://countriesnow.space/api/v0.1/countries/state/cities`,obj);
  }

  geAlltServicesBySalonId(salonid:any){
    return this.http.get<Service[]>(`${this.url}/geAlltServicesBySalonId/${salonid}`);
  }

  getAllEnabledSalonByRatingDesc() {
    return this.http.get<Salon[]>(`${this.url}/getAllEnabledSalonByRatingDesc`);
  }

  getEnabledSalonByCategory(salonCatergory: string) {
      return this.http.get<Salon[]>(`${this.url}/getEnabledSalonByCategory/${salonCatergory}`);
  }

}
  
  

