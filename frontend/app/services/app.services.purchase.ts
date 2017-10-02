import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import {PurchaseModel} from '../models /app.models.purchase';

@Injectable()
export class PurchaseService{

    constructor(
        private http: Http
    ) {
        //
    }

    public purchases: PurchaseModel[]=[];
    private url: string = 'http://back2/api/purchase';
    private headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });


    getData(): Observable<PurchaseModel[]>{
        return this.http.get(this.url);
    }

    setData(purchase: PurchaseModel){
        return this.http.post(this.url, JSON.stringify(purchase), { headers: this.headers });
    }
}