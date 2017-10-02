import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

// services
import {PurchaseService} from '../services/app.services.purchase';
// models
import {PurchaseModel} from '../models/app.models.purchase';

@Component({
    selector: 'my-app',
    template: `

        <div class="form-group">
            <label>name</label>
            <input class="form-control" name="username" [(ngModel)]="purchase.customer_name" />
        </div>
        <div class="form-group">
            <label>offering ID</label>
            <input class="form-control" type="number" name="age" [(ngModel)]="purchase.offering_id" />
        </div>
         <div class="form-group">
            <label>quantity</label>
            <input class="form-control" type="number" name="age" [(ngModel)]="purchase.quantity" />
        </div>
        <div class="form-group">
            <button class="btn btn-default" (click)="create(purchase)">Create</button>
        </div>
        <hr>
        <div> <b>List of purchases:</b></div>
        <br>
        <ul>
            <li style="list-style-type: none;" *ngFor="let purchase of purchases">
                <p>customer_name: {{purchase.customer_name}}</p>
                <p>offering_id: {{purchase.offering_id}}</p>
                <p>quantity: {{purchase.quantity}}</p>
            </li>
        </ul>


    `,
    providers: [PurchaseService]
})
export class AppComponent {

    public purchase: {} = {};
    public purchases: PurchaseModel[] = [];

    constructor(
        private purchaseService: PurchaseService
    ){}


    ngOnInit() {
        this.purchaseService.getData().subscribe((resp: Response) => {
            this.purchases = resp.json();
        });
    }

    create(purchase) {
        this.purchaseService.setData(purchase).subscribe((resp: Response) => {
           console.log(resp);
        });
    }

}