import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddFileComponent } from './add-file-bind/add-file-bind.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { FileIngestService } from './services/file-ingest.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    ListFilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FileIngestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
