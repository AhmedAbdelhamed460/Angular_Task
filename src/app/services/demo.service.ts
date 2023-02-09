import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myclient:HttpClient) {}
 private  url = "https://jsonplaceholder.typicode.com/users";
   
   getall(){
    return this.myclient.get(this.url)
   }
   GetUserByID(id:any){
    return this.myclient.get(this.url+"/"+id);
  }
}
