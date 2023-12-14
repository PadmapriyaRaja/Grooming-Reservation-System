import { Component } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';

@Component({
  selector: 'app-salon-appointments',
  templateUrl: './salon-appointments.component.html',
  styleUrls: ['./salon-appointments.component.css']
})
export class SalonAppointmentsComponent {

  salonname=sessionStorage.getItem("salonname");
  appointments: any[]=[];
  p : number =1;
  count : number =8;
  matDialog: any;
  salonid:any;

  constructor(private appointmentDataService: AppointmentService)  {
    this.salonid
  }

    ngOnInit(){
      this.appointmentDataService.getAllAppointmentsBySalonId(sessionStorage.getItem("salonid")).subscribe(data => {
        this.appointments = data;
        console.log(data);
      },banckenderror=>this.errorHandling(banckenderror));
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
