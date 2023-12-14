import { Component } from '@angular/core';
import { MatDialog} from  '@angular/material/dialog';
import { EdituserComponent } from '../edituser/edituser.component';
import { User } from 'src/app/dao/user';
import { FormBuilder } from '@angular/forms';
import { UserDataService } from 'src/app/services/userservices/userdataservice.service';
import { ViewuserappointmentsComponent } from '../viewuserappointments/viewuserappointments.component';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {


  users: any[]=[];
  searchValue='';
  p : number =1;
  count : number =8;
  ButtonDiv: boolean;
  selectedUserStatus: any;
  userStatus= [
    'All Users',
    'Enabled',
    'Disabled'
  ];

  constructor(private userDataService: UserDataService , private matDialog: MatDialog, private fb: FormBuilder){}

  searchForm =this.fb.nonNullable.group({
    searchValue:'',
  })

  ngOnInit():void{
    this.userDataService.getAllUser().subscribe(data =>
      this.users = data);
  }
  deleteUser(userid:number) {
    this.userDataService.deleteUser(userid).subscribe();
    window.location.reload();
  }

  editUser(userid: any) {
    this.matDialog.open(EdituserComponent,{
      width: '700px',
      data:userid
    })
  }

  viewUserAppointments(user: User) {
    this.matDialog.open(ViewuserappointmentsComponent,{width: '80%',height: '80%', data:user});
    }

  enableUserById(userid: any) {
    this.userDataService.enableUserById(userid).subscribe();
    window.location.reload();
  }

  searchUserBySearch(searchValue : string){
    this.userDataService.searchUserlike(searchValue).subscribe(data => this.users=data);
  }

  onSearchSubmit() {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    if(this.searchValue == ''){
      this.userDataService.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
       this.searchUserBySearch(this.searchValue);
      }
  }

  onSalonStatusChange() {
    if(this.selectedUserStatus == 'All Users'){
      this.userDataService.getAllUser().subscribe(data =>
        this.users = data);
    }
    else{
      this.userDataService.searchUserByIsDeleted(this.selectedUserStatus).subscribe(data =>
        this.users = data);
    }
  }

}
