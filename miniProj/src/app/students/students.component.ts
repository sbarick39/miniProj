import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(public _evtservice:EventService) { }
  public stddata=[]
  public stdRecorddata=[]
    ngOnInit(): void {
      this.fetchEvent()
    }
    fetchEvent(){
     this.stddata= this._evtservice.std()
     
    }

}
