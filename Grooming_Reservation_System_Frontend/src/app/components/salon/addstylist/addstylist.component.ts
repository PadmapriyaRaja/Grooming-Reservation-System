import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Stylist } from 'src/app/dao/stylist';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service'; 
import { RecordexistcomponentComponent } from '../../popups/recordexistcomponent/recordexistcomponent.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstylist',
  templateUrl: './addstylist.component.html',
  styleUrls: ['./addstylist.component.css']
})
export class AddstylistComponent {
  constructor(private stylistservice:StylistServiceService,private matDialog:MatDialog,private router:Router){}
  stylistid:string=""
  firstname="";
  lastname="";
  stylistphonenum="";
  stylistemail="";
  stylistspecialization="";
  stylistrating=1;
  // salonidstr=sessionStorage.getItem("salonid");
  salonidstr = sessionStorage.getItem("salonid");
  salonid=parseInt(this.salonidstr);
  stylist:Stylist=new Stylist(this.stylistid,this.firstname,this.lastname,this.stylistphonenum,this.stylistemail,this.stylistspecialization,this.stylistrating, this.salonidstr)
  addstylist()
  {
   this.stylistservice.addStylist(this.stylist,this.salonid).subscribe(()=>this.router.navigate(['salonhomepage']),banckenderror=>this.errorHandling(banckenderror));
  }
  errorHandling(banckenderror: any): void {

    if(banckenderror.status==409){
      this.matDialog.open(RecordexistcomponentComponent,{
        width:'250px',
        data:this.stylist.firstname
      });
}
  }
}
