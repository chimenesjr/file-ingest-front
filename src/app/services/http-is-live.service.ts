import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, timer } from "rxjs";
import { switchMap, takeUntil, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpIsLiveService {

    statusChanged = new Subject<boolean>();

    constructor(private http: HttpClient){
        timer(0, 1000)
        .subscribe(()=> this.CheckStatus());
    }

    CheckStatus(){

        this.http.get('http://localhost:8080/islive', {responseType: 'text'})
        .subscribe(
            (response: string) => {
                this.statusChanged.next(response == 'is live OK');
                console.log(response);
            },
            error => { 
                this.statusChanged.next(false) 
            }
        );
    }
}