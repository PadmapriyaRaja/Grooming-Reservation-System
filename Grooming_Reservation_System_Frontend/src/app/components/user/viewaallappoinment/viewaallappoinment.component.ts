import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Appointment } from 'src/app/dao/appointment';
import { Salon } from 'src/app/dao/salon';
import { AppointmentService } from 'src/app/services/appointmentservices/appointment.service';
import { InvoiceComponent } from '../invoice/invoice.component';


@Component({
  selector: 'app-viewaallappoinment',
  templateUrl: './viewaallappoinment.component.html',
  styleUrls: ['./viewaallappoinment.component.css']
})
export class ViewaallappoinmentComponent {
  p : number =1;
  count : number =10;
  appointments:any[]=[];
  salon:Salon
  today = new Date().toISOString().split('T')[0];
  appointment:Appointment;
  
  
  useridstr=sessionStorage.getItem("userid").toString();
  userid=parseInt(this.useridstr);
  appointment1: Appointment;
  
  constructor(private appointmentdataservice: AppointmentService,
    private matDialog:MatDialog
    ){}


  ngOnInit(){
    this.appointmentdataservice.getAppointmentsByUserId(this.userid).subscribe(
      data=>{
        this.appointments=data
      }
    )
  }
  viewInvoice(appointmentid){
    this.matDialog.open(InvoiceComponent,{
      
        width:'700px',
        height: '700px',
        data: appointmentid
      
    })
  }

  cancel(appointmentid){
      this.appointmentdataservice.getAppointmentByAppointmentId(appointmentid).subscribe(data=>
        {
          this.appointment=data,
          console.log(this.appointment),
          this.updatetatus(appointmentid)

        }
      )
      
  }
  updatetatus(appointmentid: any) {
 
      this.appointmentdataservice.updateappointmentstatus(appointmentid,this.appointment).subscribe(
        data=>{this.appointment1=data,
        window.location.reload()}
      )
      
  }
}
