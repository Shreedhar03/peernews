import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private url: String = 'http://localhost:8080/api/users';

  public registerUser(user: User): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }
  public loginUser(username: String, password: String): Observable<any> {
    return this.http.post(`${this.url}/login`, { username, password });
  }
}
