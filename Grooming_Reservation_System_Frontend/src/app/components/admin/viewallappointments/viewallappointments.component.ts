import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { MatDialog } from '@angular/material/dialog';
import { Appointment } from 'src/app/dao/appointment';

@Component({
  selector: 'app-viewallappointments',
  templateUrl: './viewallappointments.component.html',
  styleUrls: ['./viewallappointments.component.css']
})
export class ViewallappointmentsComponent {
  
  salon: any;
  appointments: any;

  constructor(private appointmentdataservice: AppointmentService,
    private matDialog: MatDialog,
    ){}

  ngOnInit(){
    this.appointmentdataservice.getAllAppointments().subscribe(
    data => {this.appointments =data, 
              console.log(this.appointments);
           }),banckenderror=>this.errorHandling(banckenderror)
    }
  
    errorHandling(banckenderror: any): void {
      this.matDialog.open(InvalidcomponentComponent,{
      width: '250px', data: banckenderror.response}
      );
    }
  }