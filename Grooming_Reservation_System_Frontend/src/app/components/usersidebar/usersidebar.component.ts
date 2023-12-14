import { Component } from '@angular/core';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { ViewallsalonComponent } from '../user/viewallsalon/viewallsalon.component';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css'],
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `,
})
export class UsersidebarComponent {
categories: any;

  constructor(private salondataservice: SalonService,
      private viewallsalon: ViewallsalonComponent){}

  ngOnInit(){
    this.salondataservice.getAllSalonCategories().subscribe(data => this.categories=data);
  }

  getSalonByCategory(salonCategory:any){
    // this.salondataservice.getEnabledSalonByCategory(salonCategory).subscribe(data => this.categories=data);
    this.viewallsalon.getSalonbyCategory(salonCategory);
  }

}
