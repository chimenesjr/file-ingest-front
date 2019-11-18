import { FileIngest } from "../model/file-ingest.model";
import { EventEmitter, Injectable } from "@angular/core";
import { HttpFileIngestService } from "./http-file-ingest.service";
import { IFileIngest } from "../model/interface-file-ingest-model";

@Injectable({providedIn: 'root'})
export class FileIngestService {

    public filesChanged = new EventEmitter<IFileIngest[]>();

    private sentFiles: IFileIngest[] = [];

    constructor(private httpFileIngest: HttpFileIngestService){}

    IngestFile(fileIngest: FileIngest) {

        this.httpFileIngest.IngestFile(fileIngest).subscribe(
            (response: FileIngest) => {
                if(response != null)
                {
                    this.sentFiles.push(response);
                    this.filesChanged.emit(this.sentFiles.slice());
                }
                else{

                }
            },
            error => {

            }
        )
    }

    GetFiles() {
        return !! this.sentFiles ? this.sentFiles.slice() : null;
    }

}