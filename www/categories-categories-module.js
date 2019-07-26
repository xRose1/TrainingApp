(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");







var routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]
    }
];
var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.page.html":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"categoryMenu\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Category</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-button (click)=\"badge.set(10)\">  set 10     </ion-button>\n      <ion-button (click)=\"badge.clear()\">  clear 10     </ion-button>\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n          <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n          </ion-refresher-content>\n      </ion-refresher>\n  \n      <ion-card *ngFor=\"let post of posts\">\n          <a [routerLink]=\"['/','single', post.id]\">\n          <ion-card-header>\n            <ion-img [src]=\"post.images.large\"></ion-img>\n            <ion-card-title [innerHtml]=\"post.title.rendered\"></ion-card-title>\n          </ion-card-header>\n         <ion-card-content [innerHtml]=\"post.excerpt.rendered\">\n          </ion-card-content>\n          </a>\n        </ion-card>\n  \n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n              loadingSpinner=\"bubbles\"\n              loadingText=\"Loading more data...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/categories/categories.page.scss":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _wpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wpservice.service */ "./src/app/wpservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");






var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(badge, http, wp, ar) {
        var _this = this;
        this.badge = badge;
        this.http = http;
        this.wp = wp;
        this.ar = ar;
        this.counter = 1;
        this.categoryid = this.ar.snapshot.paramMap.get('id');
        this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + this.categoryid + '&per_page=2&page=' + this.counter).subscribe(function (data) {
            _this.posts = data;
            console.log("category data", data);
        });
    }
    CategoriesPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + this.categoryid).subscribe(function (data) {
            _this.posts = data;
            console.log("category data", data);
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    CategoriesPage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            _this.counter++;
            _this.http.get('https://trainingapp.gremza.com/wp-json/wp/v2/posts?categories=' + _this.categoryid + '&per_page=2&page=' + _this.counter).subscribe(function (data) {
                _this.posts = data;
                console.log("category data", data);
            });
        }, 500);
    };
    CategoriesPage.prototype.ngOnInit = function () {
    };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.page.html */ "./src/app/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/categories/categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__["Badge"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _wpservice_service__WEBPACK_IMPORTED_MODULE_3__["WpserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map