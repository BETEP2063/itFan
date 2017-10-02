"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// services
var app_services_purchase_1 = require("../services/app.services.purchase");
var AppComponent = (function () {
    function AppComponent(purchaseService) {
        this.purchaseService = purchaseService;
        this.purchase = {};
        this.purchases = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purchaseService.getData().subscribe(function (resp) {
            _this.purchases = resp.json();
        });
    };
    AppComponent.prototype.create = function (purchase) {
        this.purchaseService.setData(purchase).subscribe(function (resp) {
            console.log(resp);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n        <div class=\"form-group\">\n            <label>name</label>\n            <input class=\"form-control\" name=\"username\" [(ngModel)]=\"purchase.customer_name\" />\n        </div>\n        <div class=\"form-group\">\n            <label>offering ID</label>\n            <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"purchase.offering_id\" />\n        </div>\n         <div class=\"form-group\">\n            <label>quantity</label>\n            <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"purchase.quantity\" />\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-default\" (click)=\"create(purchase)\">Create</button>\n        </div>\n        <hr>\n        <div> <b>List of purchases:</b></div>\n        <br>\n        <ul>\n            <li style=\"list-style-type: none;\" *ngFor=\"let purchase of purchases\">\n                <p>customer_name: {{purchase.customer_name}}</p>\n                <p>offering_id: {{purchase.offering_id}}</p>\n                <p>quantity: {{purchase.quantity}}</p>\n            </li>\n        </ul>\n\n\n    ",
        providers: [app_services_purchase_1.PurchaseService]
    }),
    __metadata("design:paramtypes", [app_services_purchase_1.PurchaseService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map