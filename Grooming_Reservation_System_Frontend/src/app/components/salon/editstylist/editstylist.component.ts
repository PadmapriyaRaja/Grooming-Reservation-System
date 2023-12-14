import { Component, Inject } from '@angular/core';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service'; 
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Stylist } from 'src/app/dao/stylist';

@Component({
  selector: 'app-editstylist',
  templateUrl: './editstylist.component.html',
  styleUrls: ['./editstylist.component.css']
})
export class EditstylistComponent {

  stylist:Stylist
  stylistid:number
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private stylistservice:StylistServiceService){
    this.stylistid=data
  }
  
  ngOnInit(){
    this.stylistservice.getStylistById(this.stylistid).subscribe(data=> this.stylist = data);
  }
  saveStylist(){
    this.stylistservice.updateStylist(this.stylist,this.stylistid).subscribe(()=> console.log('stylist updated'))
    window.location.reload();
  }
}
