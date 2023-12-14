import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  private BASE_URL = 'https://demo.codingbirdsonline.com/country-state-city-dropdown-api/index.php?endpoint=';
	constructor(private http: HttpClient) {}
	/**
	 * Fetch All Countries
	 * @returns Observable
	 */
	public getCountries(): Observable<any> {
	  return this.http.get<any>(this.BASE_URL + 'getcountry');
	}
	/**
	 * Get states for a country
	 * @param countryName
	 * @returns Observable
	 */
	public getStates(countryName: string): Observable<any> {
	  return this.http.get<any>(
		this.BASE_URL + 'getstate&country_id=' + countryName
	  );
	}
	/**
	 * Get cities for a state
	 * @param stateName
	 * @returns Observable
	 */
	public getCities(stateName: string): Observable<any> {
	  return this.http.get<any>(this.BASE_URL + 'getcity&state_id=' + stateName);
	}
}
