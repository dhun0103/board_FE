import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'; 
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // private apiUrl = 'http://localhost:8080/posts'; // API URL
  private apiUrl = 'http://13.209.10.106/posts'; // API URL

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);  // Use the Post interface for type checking
  }

  getPost(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: { author: string; title: string; content: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}`, post);
  }

  updatePost(id: string, post: { author?: string; title?: string; content?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
