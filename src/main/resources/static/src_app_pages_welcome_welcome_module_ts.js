"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["src_app_pages_welcome_welcome_module_ts"],{

/***/ 5247:
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeRoutingModule": function() { return /* binding */ WelcomeRoutingModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.component */ 5338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: _welcome_component__WEBPACK_IMPORTED_MODULE_2__.WelcomeComponent
}];
var WelcomeRoutingModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function WelcomeRoutingModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WelcomeRoutingModule);
});

WelcomeRoutingModule.ɵfac = function WelcomeRoutingModule_Factory(t) {
  return new (t || WelcomeRoutingModule)();
};

WelcomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: WelcomeRoutingModule
});
WelcomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WelcomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5338:
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": function() { return /* binding */ WelcomeComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);







function WelcomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "401");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "No right to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "home page");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var WelcomeComponent = /*#__PURE__*/function () {
  function WelcomeComponent(router) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WelcomeComponent);

    this.router = router;
    this.error401 = false;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WelcomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      if ('/401' == this.router.url) {
        this.error401 = true;
      }
    }
  }]);

  return WelcomeComponent;
}();

WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
  return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

WelcomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WelcomeComponent,
  selectors: [["app-welcome"]],
  decls: 3,
  vars: 4,
  consts: [["id", "notfound", 4, "ngIf"], ["id", "notfound"], [1, "notfound"], [1, "notfound-404"], ["href", "/"]],
  template: function WelcomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, WelcomeComponent_div_2_Template, 11, 0, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "welcome.welcome-to-bpaas"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error401);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n#notfound[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n}\n\n#notfound[_ngcontent-%COMP%]   .notfound[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.notfound[_ngcontent-%COMP%] {\n  max-width: 460px;\n  width: 100%;\n  text-align: center;\n  line-height: 1.4;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%] {\n  position: relative;\n  width: 180px;\n  height: 180px;\n  margin: 0px auto 50px;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #ffa200;\n  transform: rotate(45deg);\n  border: 5px dashed #000;\n  border-radius: 5px;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child:before {\n  content: \"\";\n  position: absolute;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  top: -5px;\n  box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.1) inset;\n  border-radius: 5px;\n}\n\n.notfound[_ngcontent-%COMP%]   .notfound-404[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Cabin\", sans-serif;\n  color: #000;\n  font-weight: 700;\n  margin: 0;\n  font-size: 90px;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  text-align: center;\n  height: 40px;\n  line-height: 40px;\n}\n\n.notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Cabin\", sans-serif;\n  font-size: 33px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 7px;\n}\n\n.notfound[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Cabin\", sans-serif;\n  font-size: 16px;\n  color: #000;\n  font-weight: 400;\n}\n\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Cabin\", sans-serif;\n  display: inline-block;\n  padding: 10px 25px;\n  background-color: #0288d1;\n  border: none;\n  border-radius: 40px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.2s all;\n}\n\n.notfound[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #1a5c80;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFWSxzQkFBQTtBQUNaOztBQUVFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUdRLGdDQUFBO0FBQ1o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBR1Esd0JBQUE7RUFDUix1QkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBRVEsb0RBQUE7RUFDUixrQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUdRLGdDQUFBO0VBQ1IsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUVBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuICBcclxuICAjbm90Zm91bmQgLm5vdGZvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQge1xyXG4gICAgbWF4LXdpZHRoOiA0NjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQ+ZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmEyMDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXI6IDVweCBkYXNoZWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQ+ZGl2OmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICByaWdodDogLTVweDtcclxuICAgIGJvdHRvbTogLTVweDtcclxuICAgIHRvcDogLTVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIC5ub3Rmb3VuZC00MDQgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDkwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWJpbicsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ub3Rmb3VuZCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2FiaW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAubm90Zm91bmQgYSB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhYmluJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjg4ZDE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcclxuICB9XHJcbiAgXHJcbiAgLm5vdGZvdW5kIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhNWM4MDtcclxuICB9Il19 */"]
});

/***/ }),

/***/ 2282:
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": function() { return /* binding */ WelcomeModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.ngprime.module */ 6093);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-routing.module */ 5247);
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.component */ 5338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);


 // Module


 // Component



var WelcomeModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function WelcomeModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WelcomeModule);
});

WelcomeModule.ɵfac = function WelcomeModule_Factory(t) {
  return new (t || WelcomeModule)();
};

WelcomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: WelcomeModule
});
WelcomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__.WelcomeRoutingModule, src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WelcomeModule, {
    declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_4__.WelcomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _welcome_routing_module__WEBPACK_IMPORTED_MODULE_3__.WelcomeRoutingModule, src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_welcome_welcome_module_ts.js.map