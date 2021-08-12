import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-std-record',
  templateUrl: './std-record.component.html',
  styleUrls: ['./std-record.component.css']
})
export class StdRecordComponent implements OnInit {

  constructor(private _evtservice:EventService) { }
  public stddata=[]
  public stdRecorddata=[]
    ngOnInit(): void {
      this.fetchEvent()
    }
    fetchEvent(){
     this.stdRecorddata= this._evtservice.std()
       
    }
}
