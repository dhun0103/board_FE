import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private apiUrl = 'http://localhost:8080';
  // private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addLike(postId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/likes/${postId}/like`, {});
  }

  getLikesCount(postId: string): Observable<{count : number}> {
    return this.http.get<{count : number}>(`${this.apiUrl}/likes/${postId}/count`);
  }
}
