import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "https://localhost:5001/api";
  readonly PhotoUrl = "https://localhost:5001/Photos"

  constructor(private http:HttpClient) { }


  //PEOPLE - Get all people method
  getPeopleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/people')
  }

  //PEOPLE - update record method 
  updatePeople(val:any){
    return this.http.put<any>(this.APIUrl+'/people', val)
  }

  //PHOTO - to save profile pictures 
  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/employee/savefile', val)
  }

  // CODE TO BE CONTINUE... sonny 
  // The Form of the updating the record got ERROR 

}