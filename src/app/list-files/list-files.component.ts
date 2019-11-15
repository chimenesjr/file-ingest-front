import { Component, OnInit } from '@angular/core';
import { FileIngest } from '../model/file-ingest.model';
import { FileService } from '../add-file/file.service';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  sentFiles : FileIngest[];

  constructor(private slFileService: FileService) { }

  ngOnInit() {
    this.sentFiles = this.slFileService.GetFiles();
    this.slFileService.filesChanged
    .subscribe(
      (files: FileIngest[]) => {
        this.sentFiles = files;
      }
    );
  }

}
