import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IFileIngest } from "../model/interface-file-ingest-model";
import { FileTypeEnum } from "../model/file-type-enum";
import { environment } from './../../environments/environment';

@Injectable({providedIn: 'root'})
export class HttpFileIngestService  {

    constructor(private http: HttpClient){

    }

    IngestFile (file: IFileIngest) : Observable<IFileIngest>  {
        return this.http.post<IFileIngest>(`${environment.apiUrl}/ingestfile/${FileTypeEnum[file.type]}`, file)
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
