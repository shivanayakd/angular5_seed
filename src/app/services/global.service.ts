import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class GlobalService {
    public headers: Headers;
    public requestoptions: RequestOptions;
    public res: Response;

    constructor(public http: Http) { }

    // Post request handles all the api post calls and also error handling
    public serveRequest(url: string, reqType: any, extraHeaders?: any, data?: any): any {
        this.headers = new Headers();
        this.headers.append("Content-type", "application/json");
        if (extraHeaders) {
            extraHeaders.forEach(element => {
                this.headers.append(element.type, element.value);
            });
        }

        this.requestoptions = new RequestOptions({
            method: (reqType == "Get") ? RequestMethod.Get : RequestMethod.Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });

        return this.http.request(new Request(this.requestoptions))
            .map((res: Response) => {
                console.log('in mapping of serve req====', { status: res.status, json: res.json() });
                return { status: res.status, json: res.json() };
            })
            .catch((error: any) => {     //catch Errors here using catch block
                return Observable.throw(new Error(error.status));
            });
    }
}
