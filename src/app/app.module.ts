import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddFileComponent } from './add-file-bind/add-file-bind.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { FileIngestService } from './services/file-ingest.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFileReactComponent } from './add-file-react/add-file-react.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    ListFilesComponent,
    AddFileReactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FileIngestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
