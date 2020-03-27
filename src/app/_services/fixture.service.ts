import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Fixture } from "../model/fixture";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private REST_API_SERVER = "http://localhost:3000/fixtures";

  constructor(private httpClient:HttpClient) { }

getData():Observable<any>{
  return this.httpClient.get(this.REST_API_SERVER);
}
getDataById(id:number):Observable<any>{
  return this.httpClient.get(this.REST_API_SERVER +'/'+ id);
}
addFixture(fixture: Fixture): Observable<any>{
  return this.httpClient.post(this.REST_API_SERVER, fixture);
}
deleteFixture(id:number): Observable<any>{
  return this.httpClient.delete(this.REST_API_SERVER+'/' + id);
}
}
