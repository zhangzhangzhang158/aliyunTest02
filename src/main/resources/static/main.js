"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/guards/auth.guard */ 7574);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var routes = [{
  path: '',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_core_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then(function (m) {
      return m.PagesModule;
    });
  },
  canActivate: [src_app_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'login',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_core_js"), __webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/login/login.module */ 1053)).then(function (m) {
      return m.LoginModule;
    });
  }
}, {
  path: 'redirect',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_core_js"), __webpack_require__.e("default-node_modules_angular_flex-layout___ivy_ngcc___esm2015_flex-layout_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_redirect_redirect_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/redirect/redirect.module */ 5230)).then(function (m) {
      return m.RedirectModule;
    });
  },
  canActivate: [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_3__.MsalGuard]
}, {
  path: 'storeLogin',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_storeLogin_storeLogin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/pages/storeLogin/storeLogin.module */ 1943)).then(function (m) {
      return m.StoreLoginModule;
    });
  }
}];
var AppRoutingModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 6393:
/*!**************************************!*\
  !*** ./src/app/app.common.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCommonModule": function() { return /* binding */ AppCommonModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.ngprime.module */ 6093);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







var AppCommonModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppCommonModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppCommonModule);
});

AppCommonModule.ɵfac = function AppCommonModule_Factory(t) {
  return new (t || AppCommonModule)();
};

AppCommonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppCommonModule
});
AppCommonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService],
  imports: [[], src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppCommonModule, {
    exports: [src_app_app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-browser */ 3105);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/language.service */ 7524);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 3935);

















var _c0 = function _c0(a0, a1, a2, a3) {
  return {
    "pi-info-circle": a0,
    "pi-exclamation-triangle": a1,
    "pi-times-circle": a2,
    "pi-check": a3
  };
};

function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](7, _c0, message_r2.severity == "info", message_r2.severity == "warn", message_r2.severity == "error", message_r2.severity == "success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, message_r2.summary));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, message_r2.detail));
  }
}

function AppComponent_router_outlet_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
  }
}

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(loaderService, languageService, msalGuardConfig, authService, msalBroadcastService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.loaderService = loaderService;
    this.languageService = languageService;
    this.msalGuardConfig = msalGuardConfig;
    this.authService = authService;
    this.msalBroadcastService = msalBroadcastService;
    this.title = 'BPaaS';
    this.showLoader = false;
    this.isIframe = false;
    this.loginDisplay = false;
    this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.languageService.setInitState();
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.loaderService.status.subscribe(function (val) {
        _this.showLoader = val;
      });
      this.isIframe = window !== window.parent && !window.opener;
      this.msalBroadcastService.inProgress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (status) {
        return status === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionStatus.None;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroying$)).subscribe(function () {
        _this.setLoginDisplay();
      });
    }
  }, {
    key: "setLoginDisplay",
    value: function setLoginDisplay() {
      this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    }
  }, {
    key: "login",
    value: function login() {
      var _this2 = this;

      if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionType.Popup) {
        if (this.msalGuardConfig.authRequest) {
          this.authService.loginPopup(Object.assign({}, this.msalGuardConfig.authRequest)).subscribe(function (response) {
            _this2.authService.instance.setActiveAccount(response.account);
          });
        } else {
          this.authService.loginPopup().subscribe(function (response) {
            _this2.authService.instance.setActiveAccount(response.account);
          });
        }
      } else {
        if (this.msalGuardConfig.authRequest) {
          this.authService.loginRedirect(Object.assign({}, this.msalGuardConfig.authRequest));
        } else {
          this.authService.loginRedirect();
        }
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      if (this.msalGuardConfig.interactionType === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.InteractionType.Popup) {
        this.authService.logoutPopup({
          postLogoutRedirectUri: '/',
          mainWindowRedirectUri: '/'
        });
      } else {
        this.authService.logoutRedirect({
          postLogoutRedirectUri: '/'
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroying$.next();

      this._destroying$.complete();

      this.loaderService.status.observers.forEach(function (element) {
        element.complete();
      });
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__.MSAL_GUARD_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_9__.MsalBroadcastService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 6,
  vars: 3,
  consts: [[1, "ui-fluid", "ng-main"], ["position", "bottom-right"], ["pTemplate", "message"], [1, "np-loader"], ["strokeWidth", "5"], [4, "ngIf"], [1, "ui-toast-icon", "pi", 3, "ngClass"], [1, "ui-toast-message-text-content"], [1, "ui-toast-summary"], [1, "ui-toast-detail"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p-toast", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 8, 12, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p-progressSpinner", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AppComponent_router_outlet_5_Template, 1, 0, "router-outlet", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("hidden", !ctx.showLoader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isIframe);
    }
  },
  directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__.ProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loggerCallback": function() { return /* binding */ loggerCallback; },
/* harmony export */   "HttpLoaderFactory": function() { return /* binding */ HttpLoaderFactory; },
/* harmony export */   "MSALInstanceFactory": function() { return /* binding */ MSALInstanceFactory; },
/* harmony export */   "MSALInterceptorConfigFactory": function() { return /* binding */ MSALInterceptorConfigFactory; },
/* harmony export */   "MSALGuardConfigFactory": function() { return /* binding */ MSALGuardConfigFactory; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.common.module */ 6393);
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/interceptor/jwt.interceptor */ 2624);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-browser */ 9790);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-browser */ 3503);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @azure/msal-browser */ 3105);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);

















var isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
function loggerCallback(logLevel, message) {
  console.log(message);
}
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http);
}
function MSALInstanceFactory() {
  console.log('MSALInstanceFactory');
  return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__.PublicClientApplication({
    auth: {
      clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.clientId,
      authority: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.authority,
      redirectUri: src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.redirectUrl
    },
    cache: {
      //cacheLocation: BrowserCacheLocation.LocalStorage, //若要一直Keep登入的狀態請取消remark, 但無法與其它系統同步
      storeAuthStateInCookie: isIE // set to true for IE 11

    },
    system: {
      loggerOptions: {
        loggerCallback: loggerCallback,
        logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}
function MSALInterceptorConfigFactory() {
  console.log('MSALInterceptorConfigFactory');
  var protectedResourceMap = new Map();
  protectedResourceMap.set('https://graph.microsoft.com/graph/v1.0/me', ['user.read']);
  return {
    interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__.InteractionType.Redirect,
    protectedResourceMap: protectedResourceMap
  };
}
function MSALGuardConfigFactory() {
  console.log('MSALGuardConfigFactory');
  return {
    interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_10__.InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read']
    }
  };
}
var AppModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalRedirectComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalInterceptor,
    multi: true
  }, {
    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  }, {
    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_GUARD_CONFIG,
    useFactory: MSALGuardConfigFactory
  }, {
    provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MSAL_INTERCEPTOR_CONFIG,
    useFactory: MSALInterceptorConfigFactory
  }, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalService, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalGuard, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalBroadcastService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: src_app_core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__.JwtInterceptor,
    multi: true
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, src_app_app_common_module__WEBPACK_IMPORTED_MODULE_3__.AppCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
    }
  }), _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, src_app_app_common_module__WEBPACK_IMPORTED_MODULE_3__.AppCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule, _azure_msal_angular__WEBPACK_IMPORTED_MODULE_12__.MsalModule]
  });
})();

/***/ }),

/***/ 6093:
/*!***************************************!*\
  !*** ./src/app/app.ngprime.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPrimeModule": function() { return /* binding */ NgPrimeModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/megamenu */ 6307);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/message */ 8129);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/chart */ 3252);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/overlaypanel */ 9245);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/breadcrumb */ 1815);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/sidebar */ 9734);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dynamicdialog */ 7018);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ 2530);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/steps */ 7798);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/blockui */ 8015);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/listbox */ 3803);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/chips */ 111);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dataview */ 6796);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tabview */ 2050);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/selectbutton */ 5260);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/divider */ 9026);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/tag */ 5277);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/togglebutton */ 4816);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/inputnumber */ 9721);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);











































var NgPrimeModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function NgPrimeModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NgPrimeModule);
});

NgPrimeModule.ɵfac = function NgPrimeModule_Factory(t) {
  return new (t || NgPrimeModule)();
};

NgPrimeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NgPrimeModule
});
NgPrimeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__.MegaMenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule, primeng_message__WEBPACK_IMPORTED_MODULE_10__.MessageModule, primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__.ProgressSpinnerModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__.OverlayPanelModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.BreadcrumbModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.CalendarModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__.SidebarModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__.DynamicDialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__.FileUploadModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_23__.AccordionModule, primeng_steps__WEBPACK_IMPORTED_MODULE_24__.StepsModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__.RadioButtonModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_26__.BlockUIModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_27__.ListboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__.TooltipModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_34__.ToolbarModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__.SelectButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_36__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_37__.DividerModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_38__.AutoCompleteModule, primeng_tag__WEBPACK_IMPORTED_MODULE_39__.TagModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__.ToggleButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_41__.InputNumberModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_42__.RippleModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgPrimeModule, {
    exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule, primeng_panel__WEBPACK_IMPORTED_MODULE_6__.PanelModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_8__.MegaMenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule, primeng_message__WEBPACK_IMPORTED_MODULE_10__.MessageModule, primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule, primeng_chart__WEBPACK_IMPORTED_MODULE_12__.ChartModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_13__.ProgressSpinnerModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_14__.OverlayPanelModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_15__.BreadcrumbModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_16__.CalendarModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__.SidebarModule, primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_18__.DynamicDialogModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_21__.FileUploadModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_23__.AccordionModule, primeng_steps__WEBPACK_IMPORTED_MODULE_24__.StepsModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_25__.RadioButtonModule, primeng_blockui__WEBPACK_IMPORTED_MODULE_26__.BlockUIModule, primeng_listbox__WEBPACK_IMPORTED_MODULE_27__.ListboxModule, primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__.TooltipModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_34__.ToolbarModule, primeng_selectbutton__WEBPACK_IMPORTED_MODULE_35__.SelectButtonModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_36__.DialogModule, primeng_divider__WEBPACK_IMPORTED_MODULE_37__.DividerModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_38__.AutoCompleteModule, primeng_tag__WEBPACK_IMPORTED_MODULE_39__.TagModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_40__.ToggleButtonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_41__.InputNumberModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_42__.RippleModule]
  });
})();

/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ 1315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @azure/msal-angular */ 4084);






var AuthGuard = /*#__PURE__*/function () {
  function AuthGuard(loginService, router, authService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuard);

    this.loginService = loginService;
    this.router = router;
    this.authService = authService;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuard, [{
    key: "canActivate",
    value: function canActivate(next, state) {
      if (this.loginService.isLoggedIn()) {
        console.log('Can Activate : ' + state.url);
        return true;
      }

      console.log('Cannot Activate : ' + state.url);
      localStorage.setItem('location', state.url);
      this.router.navigate(['/redirect']);
      return false;
    }
  }, {
    key: "canActivateChild",
    value: function canActivateChild(route, state) {
      if (this.loginService.checkPermission(state.url)) {
        console.log('Can ActivateChild : ' + state.url);
        return true;
      } else {
        console.log('Cannot ActivateChild : ' + state.url);
        return this.router.createUrlTree(['/401']);
      }
    }
  }, {
    key: "getAadLoginStatus",
    value: function getAadLoginStatus() {
      return this.authService.instance.getAllAccounts().length > 0;
    }
  }]);

  return AuthGuard;
}();

AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_5__.MsalService));
};

AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





var JwtInterceptor = /*#__PURE__*/function () {
  function JwtInterceptor(loginService, router) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JwtInterceptor);

    this.loginService = loginService;
    this.router = router;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(JwtInterceptor, [{
    key: "intercept",
    value: function intercept(request, next) {
      //console.log('JwtInterceptor intercept');
      // add authorization header with jwt token if available
      var token = this.loginService.getAccessToken();

      if (token) {
        request = request.clone({
          headers: request.headers.set('Cache-Control', 'no-cache').set('Pragma', 'no-cache').set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT').set('If-Modified-Since', '0').set('Authorization', "Bearer ".concat(token))
        });
      }

      return next.handle(request);
    }
  }]);

  return JwtInterceptor;
}();

JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) {
  return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

JwtInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: JwtInterceptor,
  factory: JwtInterceptor.ɵfac
});

/***/ }),

/***/ 7524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": function() { return /* binding */ LanguageService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






var LanguageService = /*#__PURE__*/function () {
  function LanguageService(translateService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LanguageService);

    this.translateService = translateService;
    this.language$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this.translate = this.translateService;
    this.languageList = ['en', 'zh-tw'];
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LanguageService, [{
    key: "setInitState",
    value: function setInitState() {
      this.translateService.addLangs(this.languageList);
      this.translateService.setDefaultLang('zh-tw'); // 以使用者手動語言設定為主，以瀏覽器語言設定為輔
      // 如果是中文就顯示中文，否則都顯示英文
      // 繁體/簡體中文代碼都是zh

      var lang = localStorage.getItem('lang');

      if (lang) {
        lang = lang.match('zh-tw') ? 'zh-tw' : 'en';
      } else {
        lang = this.translate.getBrowserLang().includes('zh-tw') ? 'zh-tw' : 'en';
      }

      this.setLang(lang);
    }
  }, {
    key: "setLang",
    value: function setLang(lang) {
      var _this = this;

      this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(function (result) {
        _this.language$.next(result);
      });
      this.translateService.use(lang);
      localStorage.setItem('lang', lang);
    }
  }, {
    key: "getLang",
    value: function getLang() {
      var lang = localStorage.getItem('lang');
      return lang ? lang : 'en';
    }
  }]);

  return LanguageService;
}();

LanguageService.ɵfac = function LanguageService_Factory(t) {
  return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};

LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: LanguageService,
  factory: LanguageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4487:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": function() { return /* binding */ LoaderService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




/**
 * loader service
 * toggle loader gif in website
 */

var LoaderService = /*#__PURE__*/function () {
  function LoaderService() {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoaderService);

    this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoaderService, [{
    key: "show",
    value: function show() {
      this.status.next(true);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.status.next(false);
    }
  }]);

  return LoaderService;
}();

LoaderService.ɵfac = function LoaderService_Factory(t) {
  return new (t || LoaderService)();
};

LoaderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: LoaderService,
  factory: LoaderService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1315:
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": function() { return /* binding */ LoginService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);







var LoginService = /*#__PURE__*/function () {
  //private baseUrl = environment.apiUrl + '/auth';
  function LoginService(http) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginService);

    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;

    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Access-Control-Allow-Origin': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
      'Content-type': 'multipart/form-data'
    });
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginService, [{
    key: "login",
    value: function login(tenant, username, password) {
      var url = this.baseUrl + '/api/onlogin?username=' + username + '&password=' + password;
      var ob;

      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production || !url.startsWith('assets')) {
        var body = {
          tenant: tenant,
          username: username,
          password: password
        };
        ob = this.http.get(url);
      } else {
        ob = this.http.get(url);
      }

      return ob.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (auth) {
        debugger; // login successful if there's a jwt token in the response

        if (auth) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('token', auth.token);
          return true;
        }

        return false;
      }));
    }
  }, {
    key: "loginAad",
    value: function loginAad(email) {
      var url = this.baseUrl + '/loginAad';
      var ob;

      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production || !url.startsWith('assets')) {
        var body = {
          email: email
        };
        ob = this.http.post(url, body);
      } else {
        ob = this.http.get(url);
      }

      return ob.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (auth) {
        // login successful if there's a jwt token in the response
        if (auth && auth.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', auth.token);
          return true;
        }

        return false;
      }));
    }
  }, {
    key: "profile",
    value: function profile() {
      var url = this.baseUrl + '/current';
      var ob = this.http.get(url);
      return ob.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (user) {
        // login successful if there's a jwt token in the response
        if (user && user.username) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          return true;
        }

        return false;
      }));
    }
  }, {
    key: "logout",
    value: function logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('menus');
    }
  }, {
    key: "getUser",
    value: function getUser() {
      // IE localStorage 不同步，需要手動setItem來調用更新值
      localStorage.setItem('test', 'getUser');
      var user = localStorage.getItem('user');
      return user ? JSON.parse(user) : '';
    }
  }, {
    key: "isLoggedIn",
    value: function isLoggedIn() {
      return this.getUser() !== null;
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      // IE localStorage 不同步，需要手動setItem來調用更新值
      localStorage.setItem('test', 'getAccessToken');
      var token = localStorage.getItem('token');
      return token ? token : '';
    }
  }, {
    key: "checkPermission",
    value: function checkPermission(url) {
      // IE localStorage 不同步，需要手動setItem來調用更新值
      localStorage.setItem('test', url);
      var localMenus = localStorage.getItem('menus');
      console.log(url);

      if ('/welcome' === url || '/401' === url) {
        return true;
      } else if (localMenus != null && url != null) {
        var menus = JSON.parse(localMenus);
        var isOK = false;
        menus.filter(function (menu) {
          if (url == menu.path || url.startsWith(menu.path + '/')) {
            isOK = true;
          } else if (menu.subMenus != null) {
            menu.subMenus.filter(function (subMenu) {
              if (url == subMenu.path || url.startsWith(subMenu.path + '/')) {
                isOK = true;
              }
            });
          }
        });
        console.log('isOK:' + isOK);

        if (isOK) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "storeLogin",
    value: function storeLogin(accessToken) {
      var encodeToken = encodeURIComponent(accessToken);
      var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bpaasStoreUrl + "?token=".concat(encodeToken);
      console.log('storeLogin url', url);
      var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'Ocp-Apim-Subscription-Key': src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apimKey,
        clientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.storeLoginClientId,
        clientSecret: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.storeLoginClientSecret
      });
      var options = {
        headers: headers
      };
      return this.http.get(url, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        console.log('~~~~~~~~~storeLogin:' + JSON.stringify(result));

        if (result.email != '' && result.email.indexOf('@') >= 0) {
          localStorage.setItem('storeLoginEmail', result.email);
          return true;
        }

        return false;
      }));
    }
  }]);

  return LoginService;
}();

LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
var environment = {
  production: false,
  apiUrl: 'http://localhost:4200',
  rmaUrl: 'assets/api/v1/rma',
  mailUrl: 'assets/api/v1/mail',
  templateUrl: 'assets/api/v1/template',
  commonUrl: 'assets/api/v1/common',
  clientId: 'ebeb07ee-fb80-42d7-9833-72ec14b925fc',
  authority: 'https://login.microsoftonline.com/de047c79-d4d9-4af3-91de-bc44b0581490/',
  redirectUrl: 'http://localhost:4200',
  apimKey: 'c14a795723764f469c86a0f1ebf7ed1c',
  bpaasStoreUrl: 'https://itu7-apim.azure-api.net/dev-store-api/v1/service/v1/auth/verifyAccessToken',
  storeLoginClientId: 'f03473ec-b675-4343-ae75-f6bb4e74ef9c',
  storeLoginClientSecret: 'hygz+ZOliB8uRzr0bfh5wnC3sSw5Wckq45Yb3oYjcJE'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map