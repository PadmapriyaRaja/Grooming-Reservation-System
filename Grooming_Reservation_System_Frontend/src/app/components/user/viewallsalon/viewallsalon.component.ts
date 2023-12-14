import { Component } from '@angular/core';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';

@Component({
  selector: 'app-viewallsalon',
  templateUrl: './viewallsalon.component.html',
  styleUrls: ['./viewallsalon.component.css']
})
export class ViewallsalonComponent {

  salons: Salon[]=[];
  p : number =1;
  count : number =8;
  categories: string[];

  constructor(private salondataservice: SalonService){}

    ngOnInit(){
     this.getAllSalons();
      this.salondataservice.getAllSalonCategories().subscribe(data => this.categories=data);
    }

    getAllSalons(){
      this.salondataservice.getAllEnabledSalon().subscribe(data => this.salons=data);
    }

    getSalonbyCategory(salonCatergory: string) {
      this.salondataservice.getEnabledSalonByCategory(salonCatergory).subscribe(data=>this.salons=data);
      }

    

}
  


