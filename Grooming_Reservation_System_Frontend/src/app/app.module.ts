import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './components/user/userhomepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserregistrationComponent } from './components/user/userregistration/userregistration.component';
import { SalonregistrationComponent } from './components/salon/salonregistration/salonregistration.component';
import { LpageComponent } from './components/lpage/lpage.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminhomepageComponent } from './components/admin/adminhomepage/adminhomepage.component';
import { AllusersComponent } from './components/admin/allusers/allusers.component';
import { AllsalonsComponent } from './components/admin/allsalons/allsalons.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SalonLoginComponent } from './components/salon/salonlogin/salonlogin.component';
import { SalonhomepageComponent } from './components/salon/salonhomepage/salonhomepage.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EdituserComponent } from './components/admin/edituser/edituser.component';
import { EditsalonComponent } from './components/admin/editsalon/editsalon.component';
import { SalonrequestsComponent } from './components/admin/salonrequests/salonrequests.component';
import { SalonapprovepopupComponent } from './components/popups/salonapprovepopup/salonapprovepopup.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ViewuserComponent } from './components/user/viewuser/viewuser.component';
import { ViewallserviceComponent } from './components/user/viewallservice/viewallservice.component';
import { UpdateaddressComponent } from './components/user/updateaddress/updateaddress.component';
import { UpdateuserComponent } from './components/user/updateuser/updateuser.component';
import { UseraddressComponent } from './components/user/useraddressregister/useraddress.component';
import { ViewaallappoinmentComponent } from './components/user/viewaallappoinment/viewaallappoinment.component';
import { ViewaddressComponent } from './components/user/viewaddress/viewaddress.component';
import { ViewallsalonComponent } from './components/user/viewallsalon/viewallsalon.component';
import { ViewallstylistComponent } from './components/user/viewallstylist/viewallstylist.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AllserviceComponent } from './components/salon/allservice/allservice.component';
import { EditserviceComponent } from './components/salon/editservice/editservice.component'; 
import { MatRadioModule } from '@angular/material/radio';
import { AddserviceComponent } from './components/salon/addservice/addservice.component';
import { UpdatesalonprofileComponent } from './components/salon/updatesalonprofile/updatesalonprofile.component';
import { SalonprofileComponent } from './components/salon/salonprofile/salonprofile.component';
import { AddstylistComponent } from './components/salon/addstylist/addstylist.component';
import { EditstylistComponent } from './components/salon/editstylist/editstylist.component';
import { AllstylistComponent } from './components/salon/allstylist/allstylist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersidebarComponent } from './components/usersidebar/usersidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AboutComponent } from './components/about/about.component';
import { SalonpageComponent } from './components/user/salonpage/salonpage.component';
import { ViewallappointmentsComponent } from './components/admin/viewallappointments/viewallappointments.component';
import { ViewuserappointmentsComponent } from './components/admin/viewuserappointments/viewuserappointments.component';
import { AdminViewAllStylistComponent } from './components/admin/admin-view-all-stylist/admin-view-all-stylist.component';
import { MatTableModule } from '@angular/material/table';
import { SalonAppointmentsComponent } from './components/salon/salon-appointments/salon-appointments.component';
import { AppointmentdetailsComponent } from './components/user/appointment/appointmentdetails/appointmentdetails.component';
import { AppointmentdisplayComponent } from './components/user/appointment/appointmentdisplay/appointmentdisplay.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component'; 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    UserregistrationComponent,
    SalonregistrationComponent,
    LpageComponent,
    AdminhomepageComponent,
    AllusersComponent,
    AllsalonsComponent,
    AppointmentsComponent,
    SalonLoginComponent,
    SalonhomepageComponent,
    EdituserComponent,
    EditsalonComponent,
    SalonrequestsComponent,
    SalonapprovepopupComponent,
    ViewuserComponent,
    ViewallserviceComponent,
    UpdateaddressComponent,
    UpdateuserComponent,
    UseraddressComponent,
    ViewaallappoinmentComponent,
    ViewaddressComponent,
    ViewallsalonComponent,
    ViewallstylistComponent,
    UpdatesalonprofileComponent,
    AllserviceComponent,
    EditserviceComponent,
    AddserviceComponent,
    SalonprofileComponent,
    AddstylistComponent,
    EditstylistComponent,
    AllstylistComponent,
    NavbarComponent,
    UsersidebarComponent,
    FooterComponent,
    AboutComponent,
    SalonpageComponent,
    ViewallappointmentsComponent,
    ViewuserappointmentsComponent,
    AdminViewAllStylistComponent,
    SalonAppointmentsComponent,
    AppointmentdetailsComponent,
    AppointmentdisplayComponent,
    PaymentComponent,
    TermsAndConditionsComponent
    
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    CarouselModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatTableModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
