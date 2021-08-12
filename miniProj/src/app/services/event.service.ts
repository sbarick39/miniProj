import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {std} from "../model/std.model"

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(public http:HttpClient) { }
 public record:std[]=[
  {
    id:1,
    name:"soubhagya",
     image:"/assets/emp2.png",
    desc:"lorem ipsum",
    data:"2020-04-23T18:25:43.511Z"
   },
   {
    id:1,
    name:"Raj",
     image:"/assets/emp1.png",
    desc:"lorem ipsum",
    data:"2020-04-23T18:25:43.511Z"
   },
   {
    id:1,
    name:"Manash",
     image:"/assets/emp3.png",
    desc:"lorem ipsum",
    data:"2020-04-23T18:25:43.511Z"
   },
   {
    id:1,
    name:"Rahul",
     image:"/assets/emp1.png",
    desc:"lorem ipsum",
    data:"2020-04-23T18:25:43.511Z"
   },
 ]

  std():std[]{
    return this.record
  }
}
