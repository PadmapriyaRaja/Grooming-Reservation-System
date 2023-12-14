import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/dao/service';
import { ServiceService } from 'src/app/services/serviceservices/service.service';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css'],
 
})
export class EditserviceComponent {

  services:Service
  servicesid:number
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private servicesservice:ServiceService){
    this.servicesid=data,
    
    console.log(this.servicesid);
  }
  setradio(selected:string){
    this.services.servicesgendertype=selected;
  }
//   onChange(defaultselected) {
//     this.services.servicesgendertype= defaultselected.target.value;
//  }
  ngOnInit(){
    console.log("oninit");
    this.servicesservice.getServicesById(this.servicesid).subscribe(data=> this.services = data);
    this.setradio(this.services.servicesgendertype);
    
  }
  saveServices(){
    this.servicesservice.updateServiceByServiceId(this.servicesid,this.services).subscribe(()=> console.log('stylist updated'))
    window.location.reload();
  }
}
