webpackJsonp([0],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_create__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillCreatePageModule", function() { return BillCreatePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BillCreatePageModule = (function () {
    function BillCreatePageModule() {
    }
    return BillCreatePageModule;
}());
BillCreatePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__bill_create__["a" /* BillCreatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bill_create__["a" /* BillCreatePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__bill_create__["a" /* BillCreatePage */]
        ]
    })
], BillCreatePageModule);

//# sourceMappingURL=bill-create.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillCreatePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BillCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BillCreatePage = (function () {
    function BillCreatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BillCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillCreatePage');
    };
    return BillCreatePage;
}());
BillCreatePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-bill-create',template:/*ion-inline-start:"/Users/chowdhza/Documents/Ionic2Angular2Firebase2/src/pages/bill-create/bill-create.html"*/'<ion-header> \n  <ion-navbar>\n     <ion-title>New Bill</ion-title>\n   </ion-navbar>\n</ion-header> \n<ion-content padding> \n     <ion-item>\n       <ion-label stacked>Bill Name</ion-label>\n       <ion-input [(ngModel)]="name" type="text" placeholder="How do you identify this bill?"></ion-input>\n    </ion-item> \n    <ion-item> \n      <ion-label stacked>Amount</ion-label> \n      <ion-input [(ngModel)]="amount" type="number" placeholder="How much will you have to pay?"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Due Date</ion-label>\n      <ion-datetime displayFormat="D MMM, YY" pickerFormat="DD MMM YYYY" [(ngModel)]="dueDate"></ion-datetime>\n    </ion-item>\n    <button block (click)="createBill(name, amount, dueDate)"> Create Bill </button>\n</ion-content>\n'/*ion-inline-end:"/Users/chowdhza/Documents/Ionic2Angular2Firebase2/src/pages/bill-create/bill-create.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], BillCreatePage);

//# sourceMappingURL=bill-create.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map