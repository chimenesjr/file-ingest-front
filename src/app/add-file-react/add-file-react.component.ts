import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileIngest } from '../model/file-ingest.model';
import { FileIngestService } from '../services/file-ingest.service';

@Component({
  selector: 'app-add-file-react',
  templateUrl: './add-file-react.component.html',
  styleUrls: ['./add-file-react.component.css']
})
export class AddFileReactComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private fileService: FileIngestService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      context: ['', Validators.required],
      time_to_hold: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(0)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    var file = new FileIngest();
    file.ContextName = this.registerForm.value.context;
    file.time_to_hold = this.registerForm.value.time_to_hold;
    this.fileService.IngestFile(file);
  }

}
