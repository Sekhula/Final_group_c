import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class userServiceService {

  constructor(private http: HttpClient, private router: Router,) { }

  login(body:any) {
    return this.http.post(`${environment.loginUrl}`, body).subscribe((user)=>{
      localStorage.setItem('user', JSON.stringify(user));
    })

}

logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');

    this.router.navigate(['/account/login']);
}

register(body:any) {
    return this.http.post(`${environment.registerUrl}`, body);
}
}