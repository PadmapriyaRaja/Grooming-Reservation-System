import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from 'src/app/dao/appointment';
import { User } from 'src/app/dao/user';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';

@Component({
  selector: 'app-viewuserappointments',
  templateUrl: './viewuserappointments.component.html',
  styleUrls: ['./viewuserappointments.component.css']
})
export class ViewuserappointmentsComponent {

  salon: User;
  appointments: any[]=[];
  p : number =1;
  count : number =8;
  user=this.data;

  constructor(private appointmentDataService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data:any
    ){}

  ngOnInit(){
    console.log(this.data)
    this.appointmentDataService.getAppointmentsByUserId(this.data.userid).subscribe(data=>{
      this.appointments=data,
      console.log(data);
    });
  }

}
