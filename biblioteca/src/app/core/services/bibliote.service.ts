import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiblioteService {

  private apiUrl = 'http://localhost/Prueba-tecnica/Libros_api/public/api/';
  constructor(private http: HttpClient) { }

  queryGet(url:string): Observable<any>{
    return this.http.get(this.apiUrl + url);
  }

  queryPost(url:string, body:any): Observable<any>{
    return this.http.post(this.apiUrl + url, body);
  }

  queryDelete(url:string): Observable<any>{
    return this.http.delete(this.apiUrl + url);
  }

}
