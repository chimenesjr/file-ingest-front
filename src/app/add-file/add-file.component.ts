import { Component, OnInit } from '@angular/core';
import { FileService } from './file.service';
import { FileIngest } from '../model/file-ingest.model';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
  providers:[FileService]
})
export class AddFileComponent implements OnInit {
  
  fileIngest: FileIngest;

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.fileIngest = new FileIngest();
  }

  onFileSubmit(){
    this.fileService.IngestFile(this.fileIngest);
  }
}
