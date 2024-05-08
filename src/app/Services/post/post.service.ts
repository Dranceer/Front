import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private API_URL = 'https://fureverfundingnojwt.up.railway.app/post';

  constructor(private httpClient: HttpClient) { }

  // Lista de todos los Posts
  public getPosts(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/all-post`);
  }

  // Guardar el Post
  public savePost(post: any): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/save-post`, post);
  }

  public updatePost(post: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/updatePost`, post);
  }

  public deletePost(post: any): Observable<any> {
    return this.httpClient.put(`${this.API_URL}/deletePost/{id}`, post);}
}
