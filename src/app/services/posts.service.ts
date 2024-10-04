import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'; 
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://localhost:8080'; // API URL
  // private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);  // Use the Post interface for type checking
  }

  getPost(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  createPost(post: { author: string; title: string; content: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/posts`, post);
  }

  updatePost(id: string, post: { author?: string; title?: string; content?: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/posts/${id}`, post);
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/posts/${id}`);
  }
}
