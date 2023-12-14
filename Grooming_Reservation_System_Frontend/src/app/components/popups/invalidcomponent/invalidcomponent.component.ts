import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-invalidcomponent',
  templateUrl: './invalidcomponent.component.html',
  styleUrls: ['./invalidcomponent.component.css']
})
export class InvalidcomponentComponent {
message: any;
  ngOnInit(){

  }
  
  constructor(@Inject(MAT_DIALOG_DATA) public incomingmessage:any){
    this.message =incomingmessage;
  }
}
