import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataService } from './userservices/userdataservice.service';
import { EmailFormatClass } from '../dao/email-format-class';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor(private http:HttpClient,
    private dataservice: UserDataService
    ) { }

    url = this.dataservice.url;



    sendOtp(sendOtpUserData:EmailFormatClass){
      return this.http.post<EmailFormatClass>(`${this.url}/send`,sendOtpUserData);
    }
}
