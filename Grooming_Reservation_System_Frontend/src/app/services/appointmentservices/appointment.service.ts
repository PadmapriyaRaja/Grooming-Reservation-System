import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { UserDataService } from '../userservices/userdataservice.service';

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

  getAppointmentsByUserId(userid: any) {
    return this.http.get<Appointment[]>(`${this.url}/getAppointmentByUserId/${userid}`);
  }

  saveAppointment(appointment:Appointment,userid:number,salonid:number,serviceidstr:string,stylistid:number){
    return this.http.post<Appointment>(`${this.url}/saveAppointment/${userid}/${salonid}/${stylistid}/${serviceidstr}`,appointment);
  }

  
  getAppointmentByAppointmentId(appointmentId:number){
    return this.http.get<Appointment>(`${this.url}/getAppointmentByAppointmentId/${appointmentId}`);
  }
 
  checkStylistAvailability(appointmentdate:string,stylistid:number){
    return this.http.get<Appointment[]>(`${this.url}/checkStylistAvailability/${appointmentdate}/${stylistid}`);
  }

  updateBooking(appointmentid:number,appointment:Appointment){
    // appointment.appointmentStatus = 'Booked';
    return this.http.put<Appointment>(`${this.url}/updateBooking/${appointmentid}`,appointment); 
  }

  getAllBookedAppointments(userid:number){
    return this.http.get<Appointment[]>(`${this.url}/getAllBookedAppointments/${userid}`);
  }
}
