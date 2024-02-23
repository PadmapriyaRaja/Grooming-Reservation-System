import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { UserDataService } from '../userservices/userdataservice.service';
import { Address } from 'src/app/dao/address';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  

  url = this.userDataService.url;

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  getAllAppointments(){
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointments`);
  }
  getAllAppointmentsBySalonId(salonid: any){
    return this.http.get<Appointment[]>(`${this.url}/getAllAppointmentsBySalonId/${salonid}`);
  }

  getAppointmentsByUserId(userid: number) {
    return this.http.get<Appointment[]>(`${this.url}/getAppointmentByUserId/${userid}`);
  }

  saveAppointment(appointment:Appointment,userid:number,salonid:number,serviceidstr:string,stylistid:number,addressid:number){
    return this.http.post<Appointment>(`${this.url}/saveAppointment/${userid}/${salonid}/${stylistid}/${addressid}/${serviceidstr}`,appointment);
  }

  
  getAppointmentByAppointmentId(appointmentId:number){
    return this.http.get<Appointment>(`${this.url}/getAppointmentByAppointmentId/${appointmentId}`);
  }
 
  checkStylistAvailability(appointmentdate:string,stylistid:number){
    return this.http.get<Appointment[]>(`${this.url}/checkStylistAvailability/${appointmentdate}/${stylistid}`);
  }

  updateBooking(appointmentId:number,appointment:Appointment){
    console.log("inside update booking");
    
    return this.http.put<Appointment>(`${this.url}/updateBookingByAppointmentId/${appointmentId}`,appointment); 
  }

  getAllBookedAppointments(userid:number){
    return this.http.get<Appointment[]>(`${this.url}/getAllBookedAppointments/${userid}`);
  }

  getAddressbyUserid(userid: number) {
    return this.http.get<Address[]>(`${this.url}/getAddressbyUserid/${userid}`);
  }

  updateappointmentstatus(appointmentId: number,appointment:Appointment) {
   return this.http.put<Appointment>(`${this.url}/updateCancelByAppointmentId/${appointmentId}`,appointment);
  }
  
}
