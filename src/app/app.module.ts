import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddFileComponent } from './add-file/add-file.component';
import { ListFilesComponent } from './list-files/list-files.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFileComponent,
    ListFilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
