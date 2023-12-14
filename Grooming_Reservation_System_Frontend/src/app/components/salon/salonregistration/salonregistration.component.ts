import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Salon } from 'src/app/dao/salon';
import { SalonService } from 'src/app/services/salonservices/salonservice.service';
import { RecordexistcomponentComponent } from '../../popups/recordexistcomponent/recordexistcomponent.component';
import { InvalidcomponentComponent } from '../../popups/invalidcomponent/invalidcomponent.component';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-salonregistration',
  templateUrl: './salonregistration.component.html',
  styleUrls: ['./salonregistration.component.css']
})
export class SalonregistrationComponent {

  public loading = false;
  public countries: any[] = [];
  public states: any[] = [];
  public cities: any[] = [];
  countryId: any;
  countryName: string;
  stateId: any;
  stateName: string;
  cityId: any;
  salonStat: any;
  


  salonCategories: string[]=['Hair salon','Barber','Massages','Nail salon','Waxing','Facials','Hair care','Hair cutting','Tanning','Hybrid'];
  timeString='';
  selectedSalonBuisnesHoursStart: any;
  selectedSalonBuisnesHoursEnd: any;
  selectedSalonBuisnesDayStart: string;
  selectedSalonBuisnesDayEnd: string;
  msg:string;
  salonBuisnesDayStart: any;
  selectedCountry: any;

  salonBuisnesDaysStart:string[]=[
    'Monday-Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  salonBuisnesDaysEnd:string[]=[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  SalonBuisnesHours1:any[]=[
    {title: 'Select', value: ''},
    {title: '9 am', value: '9'},
    {title: '12 pm', value: '12'},
  ];
  SalonBuisnesHours2:any[]=[
    {title: 'Select', value: ''},
    {title: '3 pm', value: '15'},
    {title: '6 pm', value: '18'},
    {title: '9 pm', value: '21'},
  ];
  dayString: string;
  



    onSalonStatusChange() {
      if(this.selectedSalonBuisnesDayStart == this.selectedSalonBuisnesDayEnd){
        this.selectedSalonBuisnesDayEnd='select';
        this.msg ='Salon Opening and closing cannot be same';
        this.matDialog.open(InvalidcomponentComponent,{
          width: '700px',
          data:this.msg
        })
        
      }
      
      }
    
      // onSalonCategoryChange() {
      //   console.log(this.saloncategory);
      //   console.log(this.salon.saloncategory);
      //   }

      createTimeString() {
        this.timeString = this.selectedSalonBuisnesHoursStart.value+ ':00-' +this.selectedSalonBuisnesHoursEnd.value+':00';
        console.log('timestring is: ' , this.timeString);
      }
      
      craeteDayString(){
        if(this.selectedSalonBuisnesDayStart == 'Monday-Sunday'){
          this.dayString = this.selectedSalonBuisnesDayStart;
          console.log('daystring is: ' , this.dayString);
        }
        else{
          this.dayString = this.selectedSalonBuisnesDayStart+ '-' + this.selectedSalonBuisnesDayEnd;
          console.log('daystring is: ' , this.dayString);
        }
        if(this.selectedSalonBuisnesDayStart == this.selectedSalonBuisnesDayEnd){
          this.msg ='Buisnes opening and closing day cannot be same';
          this.msg ='Please select Salon Buisnes Days';
          this.matDialog.open(InvalidcomponentComponent,{
            width: '700px',
            data:this.msg
          })
          this.selectedSalonBuisnesDayEnd='';

        }
        }

  
  
	
  salonid="";
  salonname ="";
  salonaddress="";
  saloncity=""; 
  salonpincode="";
  salonstate="";
  salonphone="";
  salonemailid="";
  salonopeninghours="";
  salondescription="";
  salonrating="1";
  salonpassword="";
  salonstatus="Applied";
  saloncategory='';
  salonpicurl='';
  saloncountry='';

  salon :Salon = new Salon(
    this.salonid,
    this.salonname,
    this.salonaddress,
    this.saloncity, 
    this.salonpincode,
    this.salonstate,
    this.salonphone,
    this.salonemailid,
    this.salonopeninghours,
    this.salondescription,
    this.salonrating,
    this.salonpassword,
    this.salonstatus,
    this.saloncategory,
    this.salonpicurl,
    this.saloncountry
    );

    // addressForm = this.builder.group({
    //   salonname: this.builder.control('',[Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    //   salonaddress: this.builder.control('', [Validators.required]),
    //   saloncity: this.builder.control('', [Validators.required,Validators.required]),
    //   state: this.builder.control('', [Validators.required,Validators.required]),
    //   pincode: this.builder.control('', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')]),
    //   country: this.builder.control('', [Validators.required,Validators.required])
    // })

  constructor(
    private salonservice: SalonService ,
    private router: Router,
    private matDialog:MatDialog,
    private dataService: DataService){}
  
  ngOnInit() {
    this.getCountries();    
    // this.salonservice.getAllSalonCategories().subscribe(data=> this.salonCategories=data);
  }

       salonregister(){
        if(this.salonBuisnesDayStart=='select'){
          this.msg ='Please select Salon Buisnes Days';
          this.matDialog.open(InvalidcomponentComponent,{
            width: '700px',
            data:this.msg
          })
        }
        else{
          this.salon.salonopeninghours = this.dayString + ' ' + this.timeString; 
          this.salon.saloncategory =  this.saloncategory;
          this.salon.saloncountry = this.saloncountry;
          this.salon.salonstate = this.salonstate;
          this.salon.saloncity = this.saloncity;
          console.log(this.salon);        
          this.salonservice.addsalon(this.salon).subscribe( () => this.router.navigate(['salonlogin']),banckenderror=>this.errorHandling(banckenderror));
        }
    
      }
      errorHandling(banckenderror: any): void {
        if(banckenderror.status==409){
              this.matDialog.open(RecordexistcomponentComponent,{
                width:'250px',
                data:banckenderror.response
              });
        }
      }

  
  setSalonCity(city: any) {
    this.saloncity = city;
    }
  private getCountries() {
    this.loading = true;
    this.dataService.getCountries().subscribe(
      (response) => {
        this.countries = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }

  
  public getCountryId(){
    for(let i=0;i<this.countries.length;i++){
      if(this.countries[i].name == this.countryName){
          this.countryId = this.countries[i].id;
          break;
      }
    }
  }

  public getStateId(){
    for(let i=0;i<this.states.length;i++){
      if(this.states[i].name == this.stateName){
          this.stateId = this.states[i].id;
          break;
      }
    }
  }
  

  /**
   * Selects country, and gets the states for it
   * @param country
   * @returns void
   */
  public selectCountry(country: any) {
    this.saloncountry=country;
    if (!country) {
      this.states = [];
      this.cities = [];
      return;
    }
    this.loading = true;
    this.countryName = country;
    this.getCountryId();
    this.dataService.getStates(this.countryId).subscribe(
      (response) => {
        this.states = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }
  /**
   * Selects the state and gets cities for it
   * @param state
   * @returns void
   */
  public selectState(state: any) {
    this.salonstate=state;
    if (!state) {
      this.cities = [];
      return;
    }
    this.loading = true;
    this.stateName = state;

    this.getStateId();
  
    this.dataService.getCities(this.stateId).subscribe(
      (response) => {
        this.cities = response.data;
        this.loading = false;
      },
      (error) => {
        console.log('Something went wrong: ', error);
      }
    );
  }


  loginBtn(){
    this.router.navigate(['salonlogin']);
  }  

}
