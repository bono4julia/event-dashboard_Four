import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Service {

    constructor(private http: Http) {
    }
}
