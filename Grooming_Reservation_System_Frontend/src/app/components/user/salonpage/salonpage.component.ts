import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { Service } from 'src/app/dao/service';
import { Stylist } from 'src/app/dao/stylist';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';


@Component({
  selector: 'app-salonpage',
  templateUrl: './salonpage.component.html',
  styleUrls: ['./salonpage.component.css'],
  styles:[
    
  ]
})
export class SalonpageComponent {

  p : number =1;
  count : number =4;
  salon: Salon;
  salonid: any;
  services: Service[];
  stylists: Stylist[];

  constructor(private salondataservice: SalonService, 
    private stylistDataService: StylistServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit(){
    this.salonid = this.activeRoute.snapshot.params['salonid'];
    this.salondataservice.getSalonById(this.salonid).subscribe(data => this.salon=data);   
    this.salondataservice.geAlltServicesBySalonId(this.salonid).subscribe(data => this.services=data);
    this.stylistDataService.geAlltStylistBySalonId(this.salonid).subscribe(data => this.stylists =data);
  }
  
  OnselectSalon(salonid:string) {
    this.router.navigate(['viewallservice',salonid]);
  }

}
