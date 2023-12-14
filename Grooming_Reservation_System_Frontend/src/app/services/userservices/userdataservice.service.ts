import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../dao/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url='http://localhost:8990';

  constructor(private http: HttpClient) { }

  getUserByEmailPassword(email:string, password:string){
    return this.http.get<User>(`${this.url}/getUserByEmailPassword/${email}/${password}`);
  }

  getUserByEmail(email:string){
    return this.http.get<User>(`${this.url}/getUserByEmailid/${email}`);
  }
  
  adduser(user:User){
    return this.http.post<User>(`${this.url}/addUser`, user);
  }
  
  getUserById(userid:any){
    return this.http.get<User>(`${this.url}/getUserById/${userid}`);
  }

  updateUserById(userid: number, user: User){
    return this.http.put<User>(`${this.url}/updateUserById/${userid}`, user);
  }

  getAllUser(){
    return this.http.get<User[]>(`${this.url}/getAllUser`);
  }

  deleteUser(userid:number) {
    return this.http.delete<User[]>(`${this.url}/deleteUserById/${userid}`);
  }

  enableUserById(userid: any) {
    return this.http.get<User>(`${this.url}/enableUserById/${userid}`);
  }

  searchUserlike(searchValue: string) {
    return this.http.get<User[]>(`${this.url}/searchUserlike/${searchValue}`);
  }

  searchUserByIsDeleted(searchValue: string) {
    return this.http.get<User[]>(`${this.url}/searchUserByIsDeleted/${searchValue}`);
  }
  
}
