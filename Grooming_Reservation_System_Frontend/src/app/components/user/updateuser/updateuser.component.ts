import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/dao/user';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service'; 

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  user: User;
  userid: any;  

    constructor(@Inject(MAT_DIALOG_DATA) public data:any, private userDataService: UserDataService)
    { 
      this.userid = data;
    }

    ngOnInit(){
      this.userDataService.getUserById(this.userid).subscribe(data=> this.user = data);
    }

    saveUser() {
      this.userDataService.updateUserById(this.userid, this.user).subscribe(()=> console.log('user updated'));
      window.location.reload();
    }

}
