import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Stylist } from 'src/app/dao/stylist';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';
import { AppointmentdetailsComponent } from '../appointment/appointmentdetails/appointmentdetails.component';


@Component({
  selector: 'app-viewallstylist',
  templateUrl: './viewallstylist.component.html',
  styleUrls: ['./viewallstylist.component.css']
})
export class ViewallstylistComponent {

  
  stylist: Stylist[]=[];
  p : number =1;
  count : number =8;

servicesidstr:string;
salonidstr:string="";
  salonid: number;
  ids:string[]=[];


constructor(private stylistService: StylistServiceService,private activeRoute:ActivatedRoute,private router:Router,private matDialog:MatDialog){}
ngOnInit(){
  this.salonidstr=this.activeRoute.snapshot.params['salonid'];
  this.salonid=parseInt(this.salonidstr);
  this.ids.push(this.salonidstr);
  this.servicesidstr = this.activeRoute.snapshot.params['servicesid'];
  this.ids.push(this.servicesidstr);
  this.stylistService.geAlltStylistBySalonId(this.salonid).subscribe(data => this.stylist=data);
}
OnselectStylist(stylistid:string){
  console.log(stylistid+"stylistid")
  this.ids.push(stylistid);
  console.log(this.ids);
  
  
 let dialogRef = this.matDialog.open(AppointmentdetailsComponent,{
    width: '700px',
   
    data:this.ids
  })
  dialogRef.afterClosed().subscribe(result=>{
    window.location.reload();
  })

}

}
