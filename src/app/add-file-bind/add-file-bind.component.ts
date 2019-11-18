import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileIngestService } from '../services/file-ingest.service';
import { IFileIngest } from '../model/interface-file-ingest-model';

@Component({
  selector: 'app-add-file-bind',
  templateUrl: './add-file-bind.component.html',
  styleUrls: ['./add-file-bind.component.css'],
})

export class AddFileComponent implements OnInit {
  
  @ViewChild('contextName') contextNameRef: ElementRef;
  @ViewChild('timeToHold') timeToHoldRef: ElementRef;

  constructor(private fileService: FileIngestService) { }

  ngOnInit() {
  }

  onFileSubmit(){
    var file = new IFileIngest();
    file.contextName = this.contextNameRef.nativeElement.value;
    file.time_to_hold = this.timeToHoldRef.nativeElement.value;
    this.fileService.IngestFile(file);
  }
}
