import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
 userData:any;
  ID=0;
  constructor(myActivated:ActivatedRoute ,public myservic:DemoService){
    //console.log(myActivated.snapshot.params["id"]);

    this.ID = myActivated.snapshot.params["id"];
  
  }
  
  ngOnInit(): void {/** fetch */
  this.myservic.GetUserByID(this.ID).subscribe(
    {
      next:(res)=>{this.userData = res},
      error:(err)=>{console.log(err)}
    }
  )




}
  
}
