import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Stylist } from 'src/app/dao/stylist';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service'; 
import { EditstylistComponent } from '../editstylist/editstylist.component';

@Component({
  selector: 'app-allstylist',
  templateUrl: './allstylist.component.html',
  styleUrls: ['./allstylist.component.css']
})
export class AllstylistComponent {

  stylists: Stylist[]=[];
  recordsPerPage: 10;
  pagenum: any;

  salonidstr=sessionStorage.getItem("salonid");
  salonid=parseInt(this.salonidstr);
  constructor(private stylistservice: StylistServiceService, private matDialog: MatDialog,private router:Router){}
  ngOnInit(){
    this.stylistservice.geAlltStylistBySalonId(this.salonid).subscribe(data => this.stylists=data);
  }

  

  editStylistbtn(stylistid:any){
    this.matDialog.open(EditstylistComponent,{
      width: '700px',
      data:stylistid
    }) 
  }

  deleteStylistbtn(stylistid:any){
    this.stylistservice.deleteStylistById(stylistid).subscribe(()=>console.log("Deleted"));
    window.location.reload();
  }

  addStylistbtn(){
    this.router.navigate(['addstylist']);
  }
}
