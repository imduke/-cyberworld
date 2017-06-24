webpackJsonp([2],{

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(334);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    return ProfilePageModule;
}());
ProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
        ]
    })
], ProfilePageModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfilePage = (function () {
    function ProfilePage(navCtrl, alertCtrl, profileProvider, authProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.profileProvider = profileProvider;
        this.authProvider = authProvider;
    }
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.profileProvider.getUserProfile().on('value', function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.birthDate = userProfileSnapshot.val().birthDate;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('login');
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Your first name & last name",
            inputs: [
                {
                    name: 'firstName',
                    placeholder: 'Your first name',
                    value: this.userProfile.firstName
                },
                {
                    name: 'lastName',
                    placeholder: 'Your last name',
                    value: this.userProfile.lastName
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updateDOB = function (birthDate) {
        this.profileProvider.updateDOB(birthDate);
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newEmail',
                    placeholder: 'Your new email',
                },
                {
                    name: 'password',
                    placeholder: 'Your password',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var newEmail = data.newEmail;
                        _this.profileProvider.updateEmail(data.newEmail, data.password).then(function () {
                            _this.userProfile.email = newEmail;
                        }).catch(function (error) {
                            console.log('ERROR: ' + error.message);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                {
                    name: 'newPassword',
                    placeholder: 'Your new password',
                    type: 'password'
                },
                {
                    name: 'oldPassword',
                    placeholder: 'Your old password',
                    type: 'password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'profile'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/chowdhza/Documents/BORN2CODE/IONIC/CODE/MyEventManager/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Profile</ion-title> \n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()"> <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <ion-list-header> Personal Information </ion-list-header>\n  <ion-item (click)="updateName()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>Name</ion-col>\n        <ion-col col-6 *ngIf="userProfile?.firstName || userProfile?.lastName">{{userProfile?.firstName}} {{userProfile?.lastName}} </ion-col>\n        <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.firstName"><span> Tap here to edit. </span></ion-col> \n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item>\n    <ion-label class="dob-label">Date of Birth</ion-label>\n    <ion-datetime displayFormat="MMM D, YYYY" pickerFormat="D MMM YYYY" [(ngModel)]="birthDate" (ionChange)="updateDOB(birthDate)"> </ion-datetime>\n  </ion-item>\n  <ion-item (click)="updateEmail()">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>Email</ion-col>\n        <ion-col col-6 *ngIf="userProfile?.email">{{userProfile?.email}}</ion-col>\n        <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.email"> <span>Tap here to edit. </span></ion-col>\n      </ion-row>\n    </ion-grid> \n  </ion-item>\n  <ion-item (click)="updatePassword()"> \n    <ion-grid>\n      <ion-row> \n        <ion-col col-6>Password</ion-col>\n        <ion-col col-6 class="placeholder-profile"><span>Tap here to edit.</span> </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item> \n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/chowdhza/Documents/BORN2CODE/IONIC/CODE/MyEventManager/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map