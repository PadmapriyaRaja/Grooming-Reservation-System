import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recordexistcomponent',
  templateUrl: './recordexistcomponent.component.html',
  styleUrls: ['./recordexistcomponent.component.css']
})
export class RecordexistcomponentComponent {

  reload() {
    window.location.reload();
    }
      
      message: String;
    
      constructor(@Inject(MAT_DIALOG_DATA) public incomingmessage:string){
        this.message = incomingmessage;
      }
    
}
