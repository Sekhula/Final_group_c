import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {userServiceService} from 'src/app/services/user-service.service'
// import { MustMatch } from 'src/app/_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  submitted = false;



  constructor( private formBuilder: FormBuilder, private  userService:userServiceService ) {

  }

  ngOnInit(): void {

    // const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };

    // this.form = this.formBuilder.group({
    //   firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //   mobileNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: ['']
    // }, formOptions);

    this.form = this.formBuilder.group({
        full_names: new FormControl('', [Validators.required, Validators.minLength(4)]),
        // lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: [''],
        mobile_number: new FormControl('', [Validators.required])
      });

  }

  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.userService.create(this.form.value).subscribe();
  }
}