import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class HttpFileIngestService  {

    constructor(private http: HttpClient){

    }
}