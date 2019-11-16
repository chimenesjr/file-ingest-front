import { Component, OnInit } from '@angular/core';
import { HttpIsLiveService } from '../services/http-is-live.service';

@Component({
  selector: 'app-is-live',
  templateUrl: './is-live.component.html',
  styleUrls: ['./is-live.component.css']
})
export class IsLiveComponent implements OnInit {

  constructor(private httpIsLIve: HttpIsLiveService) { }

    isLive: boolean = false;
    status = 'offline';

  ngOnInit() {
    this.httpIsLIve.statusChanged.subscribe((data:boolean)=>{
      this.isLive = data;
      this.status = data ? 'online' : 'offline';
    });
  }

}
