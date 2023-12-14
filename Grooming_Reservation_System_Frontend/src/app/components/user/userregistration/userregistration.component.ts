import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/dao/user';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service'; 

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  userid: number = 0;
  userfirstname="";
  userlastname="";
  useremail="";
  userphonenumber="";
  userpassword=""; 
  useris_deleted= false;

  user:User = new User(this.userid,this.userfirstname,this.userlastname,this.useremail,this.userphonenumber,this.userpassword,this.useris_deleted);

  register(){
    // console.log(this.user);
    this.userDataService.adduser(this.user).subscribe( () => this.router.navigate(['login']),banckenderror=>this.errorHandling(banckenderror));
  }
  errorHandling(banckenderror: any): void {
    if(banckenderror.status==409){
          this.snackbar.open("User already exists", 'close', {
            duration:3000,
            verticalPosition:'top',  
    });
  }
}

  loginBtn(){
    this.router.navigate(['login']);
  }

  constructor(private userDataService: UserDataService, private router: Router, private snackbar: MatSnackBar){}

}
