import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getShortUrl(url: String): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      withCredentials: true,
      headers: headers,
      responseType: 'text' as const,
    };
    return this.http.post(`${this.baseUrl}` + 'get-short-url', JSON.stringify(url), options);
  }

  getUrlByID(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      withCredentials: true,
      headers: headers,
      responseType: 'text' as const,
    };
    return this.http.post(`${this.baseUrl}` + 'get-url-by-id', id, options);
  }
}
