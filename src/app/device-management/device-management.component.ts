import { Component, OnInit } from '@angular/core';
import { Http,HttpModule  } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-device-management',
  templateUrl: './device-management.component.html',
  styleUrls: ['./device-management.component.scss']
})
export class DeviceManagementComponent implements OnInit {

   myData: Array<any>;
  constructor(private http:Http) {
    this.http.get('http://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => 
          this.myData = res )
   }

  ngOnInit() {
    console.log(this.myData);
  }

}
