import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { userServiceService } from 'src/app/services/user-service.service';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
