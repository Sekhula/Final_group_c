// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductServiceService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseURL = 'http://localhost:3000/api/products';
  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }

  read(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseURL, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }

  searchByName(name: any): Observable<any> {
    return this.httpClient.get(`${this.baseURL}?name=${name}`);
  }
}
