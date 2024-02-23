import { Component } from '@angular/core';
import { Stylist } from 'src/app/dao/stylist';
import { StylistServiceService } from 'src/app/services/stylistservices/stylist-service.service';

@Component({
  selector: 'app-admin-view-all-stylist',
  templateUrl: './admin-view-all-stylist.component.html',
  styleUrls: ['./admin-view-all-stylist.component.css']
})
export class AdminViewAllStylistComponent {

  p : number =1;
  count : number =8;
  stylists: any[]=[];

  constructor(private stylistDataService: StylistServiceService){}

  ngOnInit(){
    this.stylistDataService.getAllStylist().subscribe(data=>this.stylists=data);
  }


}
