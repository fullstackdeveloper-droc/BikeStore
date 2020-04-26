import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { 

  }

  getUsers(): Observable<any> {

    return this.http.get<any>(this.usersUrl).pipe(
      map(res => res)
    );
  }

  getUser(id: number): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  }
}