import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  // private apiUrl = 'http://localhost:8080/likes';
  private apiUrl = 'http://13.209.10.106/likes';

  constructor(private http: HttpClient) {}

  addLike(postId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/like`, {});
  }

  getLikesCount(postId: string): Observable<{count : number}> {
    return this.http.get<{count : number}>(`${this.apiUrl}/${postId}/count`);
  }
}
