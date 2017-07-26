import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private configService:ConfigService, private router: Router){}

  ip:any;
  model : any = {};
  login = () => {
    this.configService.GetAll('login').subscribe(data => {
      //console.log("getAll", data)
    });

    this.configService.getAPI('login').subscribe(
          data => {
             this.router.navigate(['/dashboard']);
          }, 
          err => {
              console.log("err", err);
          });
  }

}
