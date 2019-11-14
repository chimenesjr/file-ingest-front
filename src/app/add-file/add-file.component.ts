import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileService } from './file.service';
import { FileIngest } from '../model/file-ingest.model';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css'],
  providers:[FileService]
})
export class AddFileComponent implements OnInit {
  
  @ViewChild('contextName') contextNameRef: ElementRef;
  @ViewChild('timeToHold') timeToHoldRef: ElementRef;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  onFileSubmit(){
    var file = new FileIngest();
    file.context = this.contextNameRef.nativeElement.value;
    file.time_to_hold = this.timeToHoldRef.nativeElement.value;
    this.fileService.IngestFile(file);
  }
}
