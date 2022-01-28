import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  login(value: any) {
    throw new Error('Method not implemented.');
  }

  private baseURL = 'http://localhost:3000/api/users';

  constructor(private httpClient: HttpClient) { }

  //Geting all products from the db
  readAll(): Observable<any> {
    return this.httpClient.get(this.baseURL);
  }
  //Getting a product by speciefied ID
  read(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }
//Adding a product to the db
  create(data: any): Observable<any> {
    return this.httpClient.post(this.baseURL, data);
  }
//Update or modify the specified product
  update(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.baseURL}/${id}`, data);
  }
//Delete a specified product from the db
  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
//Delete all products in the db
  deleteAll(): Observable<any> {
    return this.httpClient.delete(this.baseURL);
  }
// //Get the product by searching
//   searchByName(name: any): Observable<any> {
//     return this.httpClient.get(`${this.baseURL}?name=${name}`);
//   }
}