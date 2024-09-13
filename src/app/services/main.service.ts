import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = environment.apiUrl;

  // private apiUrl = 'http://localhost:8080/main';

  constructor(private http: HttpClient) {}

  subscribeEmail(email: string): Observable<any> {
    return this.http.post(this.apiUrl, { email });
  }
}
