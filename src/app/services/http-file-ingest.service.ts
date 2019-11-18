import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IFileIngest } from "../model/interface-file-ingest-model";

@Injectable({providedIn: 'root'})
export class HttpFileIngestService  {

    constructor(private http: HttpClient){

    }

    IngestFile (file: IFileIngest) : Observable<IFileIngest>  {
        return this.http.post<IFileIngest>('http://localhost:8080/ingestfile/tiger', file)
        .pipe(
            map(
                (response: IFileIngest) => {
                    return response;
                },
                error => {
                    return null;
                }
            )
        );
    }
}
