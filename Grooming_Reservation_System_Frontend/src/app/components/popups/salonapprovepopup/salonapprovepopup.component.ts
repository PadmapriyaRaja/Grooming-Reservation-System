import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-salonapprovepopup',
  templateUrl: './salonapprovepopup.component.html',
  styleUrls: ['./salonapprovepopup.component.css']
})
export class SalonapprovepopupComponent {
reload() {
window.location.reload();
}
  
  message: String;

  constructor(@Inject(MAT_DIALOG_DATA) public incomingmessage:any){
    this.message =incomingmessage;
  }

}
