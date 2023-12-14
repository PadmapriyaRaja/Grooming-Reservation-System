import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { UpdatesalonprofileComponent } from '../updatesalonprofile/updatesalonprofile.component';

@Component({
  selector: 'app-salonprofile',
  templateUrl: './salonprofile.component.html',
  styleUrls: ['./salonprofile.component.css']
})
export class SalonprofileComponent {
  constructor(private salonservice:SalonService,private matDialog : MatDialog){}
  salon: Salon;
  salonidstr= sessionStorage.getItem("salonid");
  salonid=parseInt(this.salonidstr);
  ngOnInit(){
    console.log("in salon profile")
    this.salonservice.getSalonById(this.salonid).subscribe(data=>this.salon=data);
  }
  editSalonbtn(){
    this.matDialog.open(UpdatesalonprofileComponent,{
      width: '700px',
      height:'1000px',
      data:this.salonid
    })
  }
}
