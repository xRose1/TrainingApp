(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-single-module"],{

/***/ "./src/app/single/single.module.ts":
/*!*****************************************!*\
  !*** ./src/app/single/single.module.ts ***!
  \*****************************************/
/*! exports provided: SinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageModule", function() { return SinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single.page */ "./src/app/single/single.page.ts");







var routes = [
    {
        path: '',
        component: _single_page__WEBPACK_IMPORTED_MODULE_6__["SinglePage"]
    }
];
var SinglePageModule = /** @class */ (function () {
    function SinglePageModule() {
    }
    SinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_single_page__WEBPACK_IMPORTED_MODULE_6__["SinglePage"]]
        })
    ], SinglePageModule);
    return SinglePageModule;
}());



/***/ }),

/***/ "./src/app/single/single.page.html":
/*!*****************************************!*\
  !*** ./src/app/single/single.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n   <ion-buttons slot=\"start\">\n     <ion-back-button></ion-back-button>\n   </ion-buttons>\n   \n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-img [src]=\"post?.images?.large\"></ion-img>\n  <div class=\"singlecat\" [innerHtml]=\"post?.images?.category\"></div>\n  <div class=\"tittle\" [innerHtml]=\"post?.title?.rendered\"></div>\n  <div class=\"singlecontent\" [innerHtml]=\"post?.content?.rendered\"></div>\n\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/single/single.page.scss":
/*!*****************************************!*\
  !*** ./src/app/single/single.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tittle {\n  font-size: 30px;\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; }\n\n.singlecontent {\n  padding: 0 20px;\n  text-align: justify; }\n\n.singlecat {\n  background: #333;\n  padding: 5px;\n  color: white;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYXJzZWwvRGVza3RvcC90cmFpbmluZ2FwcC90cmFpbmluZ2FwcC9zcmMvYXBwL3NpbmdsZS9zaW5nbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUVmLHNFQUFzRSxFQUFBOztBQUcxRTtFQUNJLGVBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUvc2luZ2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgIFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XG5cbn1cbi5zaW5nbGVjb250ZW50e1xuICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc2luZ2xlY2F0e1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/single/single.page.ts":
/*!***************************************!*\
  !*** ./src/app/single/single.page.ts ***!
  \***************************************/
/*! exports provided: SinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePage", function() { return SinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _wpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wpservice.service */ "./src/app/wpservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SinglePage = /** @class */ (function () {
    function SinglePage(http, wp, ar) {
        var _this = this;
        this.http = http;
        this.wp = wp;
        this.ar = ar;
        this.postid = this.ar.snapshot.paramMap.get('id');
        this.http.get(this.wp.postslink + '/' + this.postid).subscribe(function (data) {
            _this.post = data;
            console.log("singlepost data", data);
        });
    }
    SinglePage.prototype.ngOnInit = function () {
    };
    SinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single',
            template: __webpack_require__(/*! ./single.page.html */ "./src/app/single/single.page.html"),
            styles: [__webpack_require__(/*! ./single.page.scss */ "./src/app/single/single.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _wpservice_service__WEBPACK_IMPORTED_MODULE_3__["WpserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SinglePage);
    return SinglePage;
}());



/***/ })

}]);
//# sourceMappingURL=single-single-module.js.map