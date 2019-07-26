(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"categoryMenu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n          pullingIcon=\"arrow-dropdown\"\n          pullingText=\"Pull to refresh\"\n          refreshingSpinner=\"circles\"\n          refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card *ngFor=\"let post of posts\">\n        <a [routerLink]=\"['/','single', post.id]\">\n        <ion-card-header>\n          <ion-img [src]=\"post.images.large\"></ion-img>\n          <ion-card-title [innerHtml]=\"post.title.rendered\"></ion-card-title>\n        </ion-card-header>\n       <ion-card-content [innerHtml]=\"post.excerpt.rendered\">\n        </ion-card-content>\n        </a>\n      </ion-card>\n\n      <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content\n            loadingSpinner=\"bubbles\"\n            loadingText=\"Loading more data...\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  background: #efefef; }\n\nion-card a {\n  text-decoration: none; }\n\nion-card-title {\n  font-size: 25px;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; }\n\nion-card-content {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYXJzZWwvRGVza3RvcC90cmFpbmluZ2FwcC90cmFpbmluZ2FwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxlQUFlO0VBQ2Ysc0VBQXNFLEVBQUE7O0FBRzFFO0VBQ0ksWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5pb24tY2FyZCAgYXtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24tY2FyZC10aXRsZXtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcblxufVxuaW9uLWNhcmQtY29udGVudHtcbiAgICBjb2xvcjpibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wpservice.service */ "./src/app/wpservice.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var HomePage = /** @class */ (function () {
    function HomePage(http, wp) {
        var _this = this;
        this.http = http;
        this.wp = wp;
        this.counter = 1;
        this.http.get(this.wp.postslinkwithpagination + this.counter).subscribe(function (data) {
            _this.posts = data;
            console.log(data);
        }, function (err) {
            alert(err);
        });
    }
    HomePage.prototype.doRefresh = function (event) {
        var _this = this;
        this.wp.getPosts().subscribe(function (data) {
            _this.posts = data;
            console.log(data);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    HomePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.counter++;
            _this.http.get(_this.wp.postslinkwithpagination + _this.counter).subscribe(function (data) {
                _this.posts = data;
                console.log(data);
            });
        }, 500);
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _wpservice_service__WEBPACK_IMPORTED_MODULE_2__["WpserviceService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map