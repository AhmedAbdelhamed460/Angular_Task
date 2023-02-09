import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any;
  constructor(myservic:DemoService){
myservic.getall().subscribe(
  {
    next:(data)=>{this.users=data ;},
    error:(err)=>{},

  }
)
  }
}
