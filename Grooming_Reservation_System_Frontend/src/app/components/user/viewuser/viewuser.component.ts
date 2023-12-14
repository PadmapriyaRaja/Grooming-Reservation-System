import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/dao/user';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';

import { ActivatedRoute } from '@angular/router';
import { UpdateuserComponent } from '../updateuser/updateuser.component';


@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent {

  user:User;
  usermail:string;
  

  constructor(private userDataService: UserDataService, private matDialog: MatDialog,private activeRoute:ActivatedRoute){}

  ngOnInit():void{
    this.usermail=sessionStorage.getItem("usermail");
    
    console.log(this.usermail);
    this.userDataService.getUserByEmail(this.usermail).subscribe(data =>
      this.user = data, );
  }
  // deleteUser(userid:number) {
  //   this.dataserviceService.deleteUser(userid).subscribe(()=>console.log("Deleted"));
  //   window.location.reload();
  // }

  updateUser(userid: any):void {
   this.matDialog.open(UpdateuserComponent,{
      width: '700px',
      data:userid
    })
  
  }

}
