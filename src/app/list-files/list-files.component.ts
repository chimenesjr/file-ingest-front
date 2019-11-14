import { Component, OnInit } from '@angular/core';
import { FileIngest } from '../model/file-ingest.model';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  sentFiles : FileIngest[]= [
    new FileIngest("test1", 1),
    new FileIngest("test2", 2)
  ];

  constructor() { }

  ngOnInit() {
  }

}
