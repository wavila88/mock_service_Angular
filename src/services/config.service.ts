import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private ChuckUrl = 'https://lds-work-node.herokuapp.com/api/v1/getUsers'; // URL to web api

  constructor(private http: HttpClient) {}

  public getUsuarios(): Observable<any> {
    return this.http.get<any>(this.ChuckUrl);
  }
}
