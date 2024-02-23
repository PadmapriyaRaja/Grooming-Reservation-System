import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  constructor(private dialogRef:MatDialogRef<TermsAndConditionsComponent>){}
  backtopage(){
    this.dialogRef.close();
  }
}
