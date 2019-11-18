import { FileIngest } from "../model/file-ingest.model";
import { EventEmitter, Injectable } from "@angular/core";
import { HttpFileIngestService } from "./http-file-ingest.service";

@Injectable({providedIn: 'root'})
export class FileIngestService {

    public filesChanged = new EventEmitter<FileIngest[]>();

    private sentFiles: FileIngest[] = [
        new FileIngest("test1", 1),
        new FileIngest("test2", 2)
    ];

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
        return this.sentFiles.slice();
    }

}