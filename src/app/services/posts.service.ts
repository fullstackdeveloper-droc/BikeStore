import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiUrl: string = "https://jsonplaceholder.typicode.com/posts/";
  constructor(private http: HttpClient) { 

  }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res)
    );
  }
}
