"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["src_app_pages_redirect_redirect_module_ts"],{

/***/ 4421:
/*!***********************************************************!*\
  !*** ./src/app/pages/redirect/redirect-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectRoutingModule": function() { return /* binding */ RedirectRoutingModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redirect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect.component */ 6544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: _redirect_component__WEBPACK_IMPORTED_MODULE_2__.RedirectComponent
}];
var RedirectRoutingModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RedirectRoutingModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RedirectRoutingModule);
});

RedirectRoutingModule.ɵfac = function RedirectRoutingModule_Factory(t) {
  return new (t || RedirectRoutingModule)();
};

RedirectRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RedirectRoutingModule
});
RedirectRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RedirectRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 6544:
/*!******************************************************!*\
  !*** ./src/app/pages/redirect/redirect.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectComponent": function() { return /* binding */ RedirectComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/menu.service */ 8145);










var RedirectComponent = /*#__PURE__*/function () {
  function RedirectComponent(http, router, loginService, msalService, toastService, translateService, menuService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RedirectComponent);

    this.http = http;
    this.router = router;
    this.loginService = loginService;
    this.msalService = msalService;
    this.toastService = toastService;
    this.translateService = translateService;
    this.menuService = menuService;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RedirectComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log('redirect.component.ngOnInit()');
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      console.log('redirect.component.ngAfterViewInit()');

      if (this.msalService.instance.getAllAccounts().length > 0) {
        console.log(this.msalService.instance.getAllAccounts());
        var account = this.msalService.instance.getAllAccounts()[0].username;
        this.loginService.logout();
        this.loginService.loginAad(account).subscribe({
          next: function next(success) {
            if (success) {
              console.log('loginAad success');

              _this.loginService.profile().subscribe({
                next: function next(success2) {
                  if (success2) {
                    console.log('profile success2');
                    var location = localStorage.getItem('location');
                    localStorage.removeItem('location');

                    if (!!location) {
                      _this.menuService.getMenus().subscribe({
                        next: function next(menus) {
                          localStorage.setItem('menus', JSON.stringify(menus));
                        },
                        // error: () => {},
                        complete: function complete() {
                          _this.router.navigateByUrl(location);
                        }
                      });
                    } else {
                      _this.router.navigate(['/']);
                    }
                  }
                }
              });
            } else {
              console.log('loginAad fail');
            }
          },
          error: function error(e) {
            console.log(e);
          }
        });
      } else {
        this.toastService.error(this.translateService.instant('message.failed-to-fetch-data'));
      }
    }
  }]);

  return RedirectComponent;
}();

RedirectComponent.ɵfac = function RedirectComponent_Factory(t) {
  return new (t || RedirectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_4__.MenuService));
};

RedirectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RedirectComponent,
  selectors: [["app-redirect"]],
  decls: 2,
  vars: 0,
  template: function RedirectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "loading...");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 5230:
/*!***************************************************!*\
  !*** ./src/app/pages/redirect/redirect.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectModule": function() { return /* binding */ RedirectModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirect-routing.module */ 4421);
/* harmony import */ var _redirect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect.component */ 6544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









var RedirectModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RedirectModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RedirectModule);
});

RedirectModule.ɵfac = function RedirectModule_Factory(t) {
  return new (t || RedirectModule)();
};

RedirectModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: RedirectModule
});
RedirectModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__.RedirectRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RedirectModule, {
    declarations: [_redirect_component__WEBPACK_IMPORTED_MODULE_3__.RedirectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule, _redirect_routing_module__WEBPACK_IMPORTED_MODULE_2__.RedirectRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_redirect_redirect_module_ts.js.map