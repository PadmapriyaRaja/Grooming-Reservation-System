import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/dao/service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';


@Component({
  selector: 'app-viewallservice',
  templateUrl: './viewallservice.component.html',
  styleUrls: ['./viewallservice.component.css']
})
export class ViewallserviceComponent {
  

service: Service[]=[];
recordsPerPage: string|number;
pagenum: string|number;
services: Service[]=[];
selectedServices: number[] = [];
selectedServicesstr:string="";
salonid:number;
totalprice:number=0;

constructor(private serviceService: ServiceService,private router:Router,private activeRoute:ActivatedRoute){}
ngOnInit(){
  this.salonid=this.activeRoute.snapshot.params['salonid'];
  this.serviceService.getAllServicesBySalonId(this.salonid).subscribe(data => this.services=data);
}

toggleService(servicesId: number) {
  if (this.selectedServices.includes(servicesId)) {
    this.selectedServices = this.selectedServices.filter((id) => id !== servicesId);
  } else {
    this.selectedServices.push(servicesId);
  }
  console.log(this.selectedServices)
}

Onsubmit(){
  for (let i = 0; i < this.services.length; i++) {
    for (let j = 0; j < this.selectedServices.length; j++) {
      if(this.services[i].servicesid==this.selectedServices[j]){
          this.totalprice+=this.services[i].servicesprice;
      }
      
    }
    
  }
  console.log(this.totalprice);
  this.serviceService.sendTotalPrice(this.totalprice);

  for (let index = 0; index < this.selectedServices.length; index++) {
    this.selectedServicesstr=this.selectedServicesstr+this.selectedServices[index].toString()+",";  
  }

  this.router.navigate(['viewallstylist',this.salonid,this.selectedServicesstr])
}
}
