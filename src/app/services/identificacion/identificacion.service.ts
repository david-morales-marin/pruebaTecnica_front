import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdentificacionService {

  private API_SERVER = "http://localhost:9090/users/";

  constructor(
    private httpClient: HttpClient
  ) { }

 public getAllidentificacion(): Observable<any>{
   return this.httpClient.get(this.API_SERVER);
 }

}
