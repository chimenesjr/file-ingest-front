import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileIngest } from '../model/file-ingest.model';
import { FileIngestService } from '../services/file-ingest.service';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
})

export class AddFileComponent implements OnInit {
  
  @ViewChild('contextName') contextNameRef: ElementRef;
  @ViewChild('timeToHold') timeToHoldRef: ElementRef;

  constructor(private fileService: FileIngestService) { }

  ngOnInit() {
  }

  onFileSubmit(){
    var file = new FileIngest();
    file.context = this.contextNameRef.nativeElement.value;
    file.time_to_hold = this.timeToHoldRef.nativeElement.value;
    this.fileService.IngestFile(file);
  }
}
