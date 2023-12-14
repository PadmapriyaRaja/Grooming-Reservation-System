import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { EditsalonComponent } from '../editsalon/editsalon.component';
import { SalonapprovepopupComponent } from '../../popups/salonapprovepopup/salonapprovepopup.component';
import { FormBuilder } from '@angular/forms';
import { AppointmentsComponent } from '../appointments/appointments.component';

@Component({
  selector: 'app-allsalons',
  templateUrl: './allsalons.component.html',
  styleUrls: ['./allsalons.component.css']
})
export class AllsalonsComponent {

  searchValue='';
  salons: Salon[]=[];
  p : number =1;
  count : number =10;
  msg: string;
  salStatus: any;
  selectedSalonStatus: any;

  salonStatus= [
    'All Salons',
    'Enabled',
    'Rejected',
    'Disabled',
    'Applied'
  ];


  searchForm =this.fb.nonNullable.group({
    searchValue:'',
  })



  ngOnInit(){
    this.salondataservice.getAllSalon().subscribe(data=>this.salons=data);
    this.selectedSalonStatus='All Salons';
  }

  getAllSalonData() {
    this.salondataservice.getAllSalon().subscribe(data=>this.salons=data);
  }


  onSalonStatusChange() {
    if(this.selectedSalonStatus == 'All Salons'){
      this.getAllSalonData();
    }
    else{
      this.salondataservice.searchSalonByStatus(this.selectedSalonStatus).subscribe(data => this.salons=data);
    }
    }

  searchSalonBySearch(searchValue : string){
    this.salondataservice.searchSalonlike(searchValue).subscribe(data => this.salons=data);
  }

  disableSalon(salonid: string, salon: Salon) {
    this.msg= 'Disabled';
      this.salondataservice.disableSalonById(salonid,salon).subscribe(()=>{
        this.matDialog.open(SalonapprovepopupComponent,{width: '250px', data:this.msg});
      })
    }

  enableSalon(salonid: string, salon: Salon) {
    this.msg= 'Enabled';
      this.salondataservice.enableSalonById(salonid,salon).subscribe(()=>{
        this.matDialog.open(SalonapprovepopupComponent,{width: '250px', data:this.msg});
      })
    }

    onSearchSubmit() {
      this.searchValue = this.searchForm.value.searchValue ?? '';
      if(this.searchValue == ''){
        this.salondataservice.getAllSalon().subscribe(data=>this.salons=data);
      }
      else{
        this.searchSalonBySearch(this.searchValue);
      }
    }

    getAllAppointmentsBySalonId(salon: Salon) {
      this.matDialog.open(AppointmentsComponent,{width: '80%',height: '80%', data:salon});
      }

      
  // delete salon

  // deleteSalon(salonid: any) {
  //   this.msg= 'Deleted';
  //   this.admindataservice.getSalonById(salonid).subscribe(data=> 
  //     this.admindataservice.updateSalonById(salonid,data).subscribe(()=>{
  //       this.matDialog.open(SalonapprovepopupComponent,{width: '250px', data:this.msg});
  //     }))
  // }

    //  Edit Salon
  editSalon(salonid: any) {
    this.matDialog.open(EditsalonComponent,{
      width: '800px',
      height: '1000px',
      data:salonid
    })
  }

  constructor(private salondataservice: SalonService, private matDialog: MatDialog,  private fb: FormBuilder){}


  
}
