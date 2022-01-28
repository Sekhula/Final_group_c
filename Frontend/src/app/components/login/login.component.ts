import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { userServiceService } from 'src/app/services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform= new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private  authService: userServiceService) { }

  ngOnInit(): void {

  }

  get f(){
    return this.loginform.controls;
  }
  submit(){
    console.log(this.loginform.value);
    this.authService.create(this.loginform.value);
  }

}
