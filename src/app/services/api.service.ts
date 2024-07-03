import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user-interface';
import { Observable } from 'rxjs';
import { NewsItem } from '../interfaces/news-item.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private userURL: String = 'http://localhost:8080/api/users';
  private newsURL: String = 'http://localhost:8080/api/news';

  public registerUser(user: User): Observable<any> {
    return this.http.post(`${this.userURL}/register`, user);
  }
  public loginUser(username: String, password: String): Observable<any> {
    // store response in a variable
    const response = this.http.post(`${this.userURL}/login`, {
      username,
      password,
    });
    // return the response
    console.log({ response });
    return response;
  }

  public getNews(): Observable<any> {
    const response = this.http.get(`${this.newsURL}`);
    return response;
  }

  public getNewsById(id: string): Observable<any> {
    const response = this.http.get(`${this.newsURL}/${id}`);
    return response;
  }

  public postNews(news: NewsItem): Observable<any> {
    return this.http.post(`${this.newsURL}/create`, news);
  }
}
