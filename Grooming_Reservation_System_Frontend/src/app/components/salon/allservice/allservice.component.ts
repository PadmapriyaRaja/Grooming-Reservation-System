import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Service } from 'src/app/dao/service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';
import { EditserviceComponent } from '../editservice/editservice.component';

@Component({
  selector: 'app-allservice',
  templateUrl: './allservice.component.html',
  styleUrls: ['./allservice.component.css']
})
export class AllserviceComponent {

  salonidstr=sessionStorage.getItem("salonid");
  salonid=parseInt(this.salonidstr);
  constructor(private serviceservice: ServiceService, private matDialog: MatDialog,private router:Router){}
  ngOnInit(){
    this.serviceservice.getAllServicesBySalonId(this.salonid).subscribe(data => this.services=data);
  }

  services: Service[]=[];
  recordsPerPage:5;
  pagenum:number= 1;

  editServicesbtn(servicesid:any){
    this.matDialog.open(EditserviceComponent,{
      width: '700px',
      data:servicesid
    })
  }
  deleteServicesbtn(servicesid:number){
    this.serviceservice.deleteServiceByServiceId(servicesid).subscribe(()=>console.log("Deleted"));
    window.location.reload();
  }
  addServicesbtn(){
    this.router.navigate(['addservice']);
  }
}
