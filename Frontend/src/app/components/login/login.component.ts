import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service'                                                                                                                                                                                  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private  authService: UserServiceService) { }

  ngOnInit(): void {
  }
  
  get f(){
    return this.loginform.controls;
  }
  submit(){
    console.log(this.loginform.value);
    this.authService.login(this.loginform.value);
  }
}
  // submit(){
  //   console.log(this.form.value);
    // this.authService.readAll().subscribe(data => {
    //   const user = data;
    //   for(let i = 0; i <= user.length; i++){

    //     if(this.form.value.password == user[i].password && this.form.value == user[i].email){
    //       this.loginStatus = true;
    //       break;
    //     }
    //     else{
    //       this.loginStatus = false
    //     }
    //   }
      
    // });
  


