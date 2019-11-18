import { Component, OnInit, EventEmitter } from '@angular/core';
import { FileIngest } from '../model/file-ingest.model';
import { FileIngestService } from '../services/file-ingest.service';
import { FileTypeEnum } from "../model/file-type-enum";
import { IFileIngest } from '../model/interface-file-ingest-model';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  sentFiles : IFileIngest[];
  constructor(private slFileService: FileIngestService) { }

  ngOnInit() {

    this.sentFiles = this.slFileService.GetFiles();

    this.slFileService.filesChanged.subscribe(
      (files) => {
        this.sentFiles = files;
      }
    );
  }
}
