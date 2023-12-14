import { Component, Inject } from '@angular/core';
import { Appointment } from 'src/app/dao/appointment';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {

  appointments: any[]=[];
  salon=this.data;
  p : number =1;
  count : number =8;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
    private appointmentService: AppointmentService,
    private matDialog: MatDialog,
    private salondataservice: SalonService
    ){}

  ngOnInit(){
    this.appointmentService.getAllAppointmentsBySalonId(this.salon.salonid).subscribe(
      data =>this.appointments=data
      ),banckenderror=>this.errorHandling(banckenderror)
  }

  errorHandling(banckenderror: any): void {
    this.matDialog.open(InvalidcomponentComponent,{
    width: '250px', data: banckenderror.response}
    );
  }

  
  saveAppointments(data:any){
    this.appointments =data
  }

}
