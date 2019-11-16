import { FileIngest } from "../model/file-ingest.model";
import { EventEmitter } from "@angular/core";

export class FileIngestService {

    public filesChanged = new EventEmitter<FileIngest[]>();

    private sentFiles: FileIngest[] = [
        new FileIngest("test1", 1),
        new FileIngest("test2", 2)
    ];

    IngestFile(fileIngest: FileIngest) {
        this.sentFiles.push(fileIngest);
        this.filesChanged.emit(this.sentFiles.slice());
    }

    GetFiles() {
        return this.sentFiles.slice();
    }

}