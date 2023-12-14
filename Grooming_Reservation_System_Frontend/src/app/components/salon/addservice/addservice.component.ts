import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/dao/service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent {
  constructor(private serviceservices:ServiceService,private router:Router){}
  servicesid:number=0;
  servicesname="";
  servicesdescription="";
  servicesprice:number=100;
  servicesgendertype="";
  salonidstr=sessionStorage.getItem("salonid");
  salonid = parseInt(this.salonidstr);
  setradio(selected:string){
    this.services.servicesgendertype=selected;
  }
  services:Service=new Service(this.servicesid,this.servicesname,this.servicesdescription,this.servicesprice,this.servicesgendertype)
  addServices()
  {
   this.serviceservices.saveServices(this.services,this.salonid).subscribe(()=>this.router.navigate(['salonhomepage']));
  }
}
