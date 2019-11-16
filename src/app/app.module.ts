import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddFileComponent } from './add-file-bind/add-file-bind.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { FileIngestService } from './services/file-ingest.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFileReactComponent } from './add-file-react/add-file-react.component';
import { HttpClientModule } from "@angular/common/http";
import { IsLiveComponent } from './is-live/is-live.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    ListFilesComponent,
    AddFileReactComponent,
    IsLiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FileIngestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
