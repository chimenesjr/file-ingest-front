import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FileIngest } from "../model/file-ingest.model";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class HttpFileIngestService  {

    constructor(private http: HttpClient){

    }

    IngestFile (file: FileIngest) : Observable<FileIngest>  {
        return this.http.post<FileIngest>('http://localhost:8080/ingestfile', file, {responseType: 'json'})
        .pipe(
            map(
                (response: FileIngest) => {
                    return response;
                },
                error => {
                    return null;
                }
            )
        );
    }
}
