"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 2357:
/*!************************************************************!*\
  !*** ./src/app/core/services/application-state.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationStateService": function() { return /* binding */ ApplicationStateService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * application state service
 */

var ApplicationStateService = /*#__PURE__*/function () {
  function ApplicationStateService() {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplicationStateService);

    if (window.innerWidth <= 992) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }
  /**
   * get is mobile resolution or desktop.
   * need to refresh after changing website resolution
   */


  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplicationStateService, [{
    key: "getIsMobileResolution",
    value: function getIsMobileResolution() {
      return this.isMobileResolution;
    }
  }]);

  return ApplicationStateService;
}();

ApplicationStateService.ɵfac = function ApplicationStateService_Factory(t) {
  return new (t || ApplicationStateService)();
};

ApplicationStateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ApplicationStateService,
  factory: ApplicationStateService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8865:
/*!************************************************!*\
  !*** ./src/app/core/services/basic.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicService": function() { return /* binding */ BasicService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pages_pages_routing_config_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/pages-routing-config.const */ 436);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ 1315);
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/loader.service */ 4487);










var BasicService = /*#__PURE__*/function () {
  function BasicService(router, translate, loginService, loaderService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasicService);

    this.router = router;
    this.translate = translate;
    this.loginService = loginService;
    this.loaderService = loaderService;
    this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BasicService, [{
    key: "emitLoading",
    value: function emitLoading(show) {
      this.loading.emit(show);
    }
  }, {
    key: "getMenuName",
    value: function getMenuName(url) {
      var title = '';
      _pages_pages_routing_config_const__WEBPACK_IMPORTED_MODULE_2__.childRoutes.forEach(function (item) {
        if (url == '/') {
          title = 'Welcome';
        } else if (url == '/401') {
          title = '';
        } else if (url == '/' + item.path || url.startsWith('/' + item.path + '/')) {
          title = item.data.title;
        }
      });
      return title;
    }
  }, {
    key: "getI18n",
    value: function getI18n(i18n) {
      return this.translate.instant(i18n);
    }
  }, {
    key: "showTotalRecords",
    value: function showTotalRecords(records) {
      var message = this.translate.instant('messages.total-records', {
        records: records
      });
      this.showMessage(message);
    }
  }, {
    key: "showNoDataFound",
    value: function showNoDataFound() {
      var message = this.getI18n('messages.no-data-found');
      this.showMessage(message);
    }
  }, {
    key: "showErrorMessageByKey",
    value: function showErrorMessageByKey(key) {
      var message = this.translate.instant(key);
      this.showError(message);
    }
  }, {
    key: "showError",
    value: function showError(error) {
      this.loaderService.hide(); //403

      if (error.status == 403) {
        this.loginService.logout();
        this.router.navigate(['/redirect']);
      } else if (error.status == 401) {
        this.router.navigate(['/401']);
      }
    }
  }, {
    key: "showMessage",
    value: function showMessage(message) {
      console.log(message);
    }
  }]);

  return BasicService;
}();

BasicService.ɵfac = function BasicService_Factory(t) {
  return new (t || BasicService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService));
};

BasicService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BasicService,
  factory: BasicService.ɵfac
});

/***/ }),

/***/ 7703:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": function() { return /* binding */ LayoutComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 5722);
/* harmony import */ var _core_services_basic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/basic.service */ 8865);
/* harmony import */ var src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/menu.service */ 8145);
/* harmony import */ var src_app_core_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/application-state.service */ 2357);
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-nav/top-nav.component */ 9325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-nav/side-nav.component */ 3381);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
















var _c0 = function _c0(a0) {
  return {
    "hidden-menu-content": a0
  };
};

var LayoutComponent = /*#__PURE__*/function () {
  function LayoutComponent(media, basicService, menuService, applicationStateService, router) {
    var _this = this;

    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LayoutComponent);

    this.basicService = basicService;
    this.menuService = menuService;
    this.applicationStateService = applicationStateService;
    this.router = router;
    this.isMenuVisible = false;
    this.showLoading = false;
    this.sideNavOpened = false;
    this.sideNavMode = 'side';
    this.toolBarHeight = 64;
    this.title = '';
    this.filename = '';
    this.navStart = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(); // Create a new Observable that publishes only the NavigationStart event

    router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (evt) {
      return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterEvent;
    })).subscribe(function (evt) {
      _this.title = _this.basicService.getMenuName(evt.url);
    });
    this.mediaWatcher = media.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(function (changes) {
      return changes.length > 0;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (changes) {
      return changes[0];
    })).subscribe(function (change) {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (_this.sideNavOpened) {
          _this.sideNavOpened = false;
        }

        _this.sideNavMode = 'over';
      } else {
        _this.sideNavOpened = true;
        _this.sideNavMode = 'side';
      }

      if (change.mqAlias === 'xs') {
        _this.toolBarHeight = 56;
      } else {
        _this.toolBarHeight = 64;
      }
    });
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LayoutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var that = this;
      this.menuService.toggleMenuBar.subscribe(function (data) {
        if (data && data != null) {
          that.isMenuVisible = !that.isMenuVisible;
        }
      });

      if (this.applicationStateService.getIsMobileResolution()) {
        this.isMenuVisible = false;
      } else {
        this.isMenuVisible = true;
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.menuService.toggleMenuBar.observers.forEach(function (element) {
        element.complete();
      });
    }
  }]);

  return LayoutComponent;
}();

LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.MediaObserver), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_basic_service__WEBPACK_IMPORTED_MODULE_2__.BasicService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_3__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_core_services_application_state_service__WEBPACK_IMPORTED_MODULE_4__.ApplicationStateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};

LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  decls: 11,
  vars: 7,
  consts: [[1, "layout-container"], [3, "sideNavToggled"], [1, "ng-content", 3, "ngClass"], [1, "sidenav-container"], [3, "isMenuVisible"], ["snav", ""], [1, "main-container"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-top-nav", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sideNavToggled", function LayoutComponent_Template_app_top_nav_sideNavToggled_1_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);

        return _r0.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](3, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "app-side-nav", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "main", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](5, _c0, !ctx.isMenuVisible));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isMenuVisible", ctx.isMenuVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](9, 3, ctx.title));
    }
  },
  directives: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__.SideNavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: [".layout-container[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #fafafa;\n}\n.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  padding: 12px;\n  width: 250px;\n  background: #ffffff;\n}\n.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  float: right;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.286);\n  z-index: 10;\n  top: 0;\n  left: 0;\n  position: fixed;\n}\n.center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n[_nghost-%COMP%]     .track circle {\n  stroke-opacity: 0.5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFBRjtBQUNFO0VBQ0UsT0FBQTtFQUNBLG1CQ05vQjtBRE94QjtBQUFJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkNYRTtBRGFSO0FBQUk7RUFDRSxhQUFBO0FBRU47QUFETTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUdSO0FBRE07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUdSO0FBR0E7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsNENBQUE7QUFDRjtBQUVBO0VBQ0UsOEJBQUE7QUFDRiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3Njc3MvdmFyaWFibGVzJztcclxuLmxheW91dC1jb250YWluZXIge1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICAuc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6ICRtYWluLWJhY2tncm91bmQtY29sb3I7XHJcbiAgICAuc2lkZW5hdiB7XHJcbiAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgfVxyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjg2KTtcclxuICB6LWluZGV4OiAxMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudHJhY2sgY2lyY2xlIHtcclxuICBzdHJva2Utb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMxNTY1YzA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJG1haW4tYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuJGJsb2NrLWJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiRkaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiNjOGM4Yzg7XHJcbiR0YWJsZS10aC1mb250LWNvbG9yOnJnYmEoMjEsMTAxLDE5MiwuOCk7XHJcbiRsaWdodC15ZWxsb3c6ICNmZmZmY2M7XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 3381:
/*!*************************************************************!*\
  !*** ./src/app/pages/layout/side-nav/side-nav.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": function() { return /* binding */ SideNavComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/menu.service */ 8145);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ 9891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/sidebar */ 9734);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);












var _c0 = function _c0(a0, a1) {
  return {
    "pi-angle-down": a0,
    "pi-angle-up": a1
  };
};

function SideNavComponent_ng_template_2_ng_container_0_em_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "em", 10);
  }

  if (rf & 2) {
    var menu_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](1, _c0, !menu_r5.selected, menu_r5.selected));
  }
}

function SideNavComponent_ng_template_2_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var _c1 = function _c1(a0) {
  return [a0];
};

var _c2 = function _c2() {
  return {
    transitionParams: "400ms cubic-bezier(0.86, 0, 0.07, 1)",
    height: "*"
  };
};

var _c3 = function _c3(a1) {
  return {
    value: "visible",
    params: a1
  };
};

var _c4 = function _c4() {
  return {
    transitionParams: "400ms cubic-bezier(0.86, 0, 0.07, 1)",
    height: "0"
  };
};

var _c5 = function _c5(a1) {
  return {
    value: "hidden",
    params: a1
  };
};

var _c6 = function _c6(a0) {
  return {
    $implicit: a0
  };
};

function SideNavComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_ng_template_2_ng_container_0_Template_a_click_2_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var menu_r5 = restoredCtx.$implicit;
      return menu_r5.selected = !menu_r5.selected;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "em", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SideNavComponent_ng_template_2_ng_container_0_em_6_Template, 1, 4, "em", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SideNavComponent_ng_template_2_ng_container_0_ng_container_8_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var menu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActive", "active")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, menu_r5.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", menu_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 8, menu_r5.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menu_r5.subMenus != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@submenu", menu_r5.subMenus && menu_r5.subMenus.length > 0 && menu_r5.selected ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c2)) : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](16, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c6, menu_r5.subMenus));
  }
}

function SideNavComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SideNavComponent_ng_template_2_ng_container_0_Template, 9, 20, "ng-container", 4);
  }

  if (rf & 2) {
    var list_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", list_r3);
  }
}

function SideNavComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}

var SideNavComponent = /*#__PURE__*/function () {
  function SideNavComponent(menuService, loginService, toastService, router) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SideNavComponent);

    this.menuService = menuService;
    this.loginService = loginService;
    this.toastService = toastService;
    this.router = router;
    this.isMenuVisible = false;
    this.menus = [];
    this.errorMessage = '';
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SideNavComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      var url = this.router.routerState.snapshot.url;
      console.log(url);
      this.menuService.getMenus().subscribe({
        next: function next(menus) {
          _this.menus = menus;
          localStorage.setItem('menus', JSON.stringify(menus));

          if (menus == null || menus.length == 0) {
            _this.toastService.error('message.no-role-permission');

            _this.loginService.logout();
          }

          if (!_this.loginService.checkPermission(url)) {
            _this.toastService.error('message.no-function-permission');
          }
        },
        error: function error(_error) {
          console.log('sideNav>getMenus()', _error);

          _this.toastService.error('message.no-function-permission');

          _this.loginService.logout();

          _this.router.navigate(['/redirect']);
        }
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.menuService.toggleMenuBar.next(true);
    }
  }]);

  return SideNavComponent;
}();

SideNavComponent.ɵfac = function SideNavComponent_Factory(t) {
  return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};

SideNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SideNavComponent,
  selectors: [["app-side-nav"]],
  inputs: {
    isMenuVisible: "isMenuVisible"
  },
  decls: 5,
  vars: 7,
  consts: [["position", "left", "styleClass", "np-menubar", 3, "visible", "showCloseIcon", "modal"], [1, "np-menu"], ["recursiveList", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [2, "list-style-type", "none"], [3, "routerLinkActive", "routerLink", "click"], [1, "fa", "fa-fw", "pi", 3, "ngClass"], ["class", "fa right pi", 3, "ngClass", 4, "ngIf"], [1, "np-sub-menu"], [1, "fa", "right", "pi", 3, "ngClass"]],
  template: function SideNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-sidebar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ul", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SideNavComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SideNavComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.isMenuVisible)("showCloseIcon", false)("modal", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c6, ctx.menus));
    }
  },
  directives: [primeng_sidebar__WEBPACK_IMPORTED_MODULE_7__.Sidebar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: [".mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.mat-nav-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  \n}\n\n.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%] {\n  display: none;\n  height: 0;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%] {\n  display: block;\n  list-style-type: none;\n  height: auto;\n  margin: 0;\n}\n\n.nested-menu[_ngcontent-%COMP%]   .expand.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFBRTtFQUtJLGNBQUE7QUFGTjs7QUFGTTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUFJVjs7QUFFRTtFQUNJLHFCQUFBO0FBQ047O0FBQ0U7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBQUNOOztBQUVNO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBVjs7QUFFYztFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQWxCIiwiZmlsZSI6InNpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnNyYy9zY3NzL3ZhcmlhYmxlcyc7XHJcbi5tYXQtbGlzdC1iYXNlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLm1hdC1uYXYtbGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYSB7XHJcbiAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAvKmNvbG9yOiAkcHJpbWFyeS1jb2xvcjsqL1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4ubmVzdGVkLW1lbnUge1xyXG4gIC5uZXN0ZWQge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5zdWJtZW51IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICAmIC5leHBhbmQge1xyXG4gICAgICAmLnN1Ym1lbnUge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('submenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      height: '0',
      overflow: 'hidden'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      height: '*'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
      overflow: 'hidden'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(0))])]
  }
});

/***/ }),

/***/ 9325:
/*!***********************************************************!*\
  !*** ./src/app/pages/layout/top-nav/top-nav.component.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopNavComponent": function() { return /* binding */ TopNavComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/language.service */ 7524);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/overlaypanel */ 9245);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 3935);















var _c0 = function _c0(a0) {
  return {
    language: a0
  };
};

var TopNavComponent = /*#__PURE__*/function () {
  function TopNavComponent( // private dialog: MatDialog,
  loginService, languageService, router, // private matIconRegistry: MatIconRegistry,
  domSanitizer, msalService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopNavComponent);

    this.loginService = loginService;
    this.languageService = languageService;
    this.router = router;
    this.domSanitizer = domSanitizer;
    this.msalService = msalService;
    this.sideNavToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TopNavComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.userinfo = this.loginService.getUser();
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      this.sideNavToggled.emit();
    }
  }, {
    key: "onLoggedout",
    value: function onLoggedout() {
      this.loginService.logout();
      this.msalService.logout();
    }
  }, {
    key: "languageList",
    get: function get() {
      return this.languageService.languageList;
    }
  }, {
    key: "currentLanguage",
    get: function get() {
      return this.languageService.translate.currentLang;
    }
  }, {
    key: "useLanguage",
    value: function useLanguage(language) {
      this.languageService.setLang(language);
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      if (!this.loginService.isLoggedIn()) {
        this.router.navigate(['/redirect']);
      }
    }
  }]);

  return TopNavComponent;
}();

TopNavComponent.ɵfac = function TopNavComponent_Factory(t) {
  return new (t || TopNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_7__.MsalService));
};

TopNavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TopNavComponent,
  selectors: [["app-top-nav"]],
  outputs: {
    sideNavToggled: "sideNavToggled"
  },
  decls: 22,
  vars: 13,
  consts: [[1, "ng-header"], [1, "p-toolbar-group-left"], ["icon", "pi pi-bars", "iconPos", "left", "styleClass", "p-button-rounded", 3, "click"], [1, "p-toolbar-group-center"], [1, "p-toolbar-group-right"], ["tooltipPosition", "bottom", 2, "display", "inline-block", 3, "pTooltip"], ["icon", "pi pi-user", "styleClass", "p-button-rounded"], ["icon", "pi pi-globe", "styleClass", "p-button-rounded", 3, "click"], ["icon", "pi pi-sign-out", "styleClass", "p-button-rounded", 3, "click"], ["themeChooser", ""], ["pButton", "", "type", "button", 3, "click"], ["pButton", "", "type", "button", 2, "background-color", "#427976", 3, "click"]],
  template: function TopNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p-toolbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopNavComponent_Template_p_button_click_2_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "BPaaS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopNavComponent_Template_p_button_click_11_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);

        return _r0.toggle($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopNavComponent_Template_p_button_click_14_listener() {
        return ctx.onLoggedout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p-overlayPanel", null, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopNavComponent_Template_button_click_18_listener() {
        return ctx.useLanguage("zh-tw");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u7E41");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TopNavComponent_Template_button_click_20_listener() {
        return ctx.useLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "En");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate2"]("pTooltip", "", ctx.userinfo.tenant, "/", ctx.userinfo.username, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 4, "app.i18n.language", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 7, "app.i18n.languageList." + ctx.currentLanguage))));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 9, "login.actions.logout"));
    }
  },
  directives: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_11__.OverlayPanel, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".p-toolbar {\n  display: flex;\n  margin: 0 auto;\n  padding: 0 16px;\n  background-color: #1565c0;\n  color: #ffffff;\n  border: 0px;\n  border-radius: 0px;\n  height: 100%;\n}\n  .p-toolbar .pi {\n  color: #ffffff;\n}\n  .p-toolbar .p-toolbar-group-left .p-button {\n  background-color: #0288d1;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  height: 35px;\n  width: 35px;\n}\n  .p-toolbar .p-toolbar-group-center {\n  padding-left: 15px;\n  text-align: center;\n  font-size: 30px;\n}\n  .p-toolbar .p-toolbar-group-right .p-button {\n  background-color: #1565c0;\n  border: 0px;\n  margin: 2px;\n}\n  .p-toolbar .p-toolbar-group-right .p-button span {\n  font-size: 20px;\n}\n[_nghost-%COMP%] {\n  display: block;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 1000;\n  height: 50px;\n}\np-overlayPanel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 25px;\n  border-radius: 0;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.visible-md[_ngcontent-%COMP%] {\n  display: none;\n}\n.visible-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .visible-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media screen and (max-width: 768px) {\n  .visible-sm[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-brand[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .hidden-sm[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1uYXYuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJDTmM7RURPZCxjQ05NO0VET04sV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0U7RUFDRSxjQ1pJO0FEV1I7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsaUhBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUZKO0FBS0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBTUU7RUFDRSx5QkM5Qlk7RUQrQlosV0FBQTtFQUNBLFdBQUE7QUFKSjtBQU1JO0VBQ0UsZUFBQTtBQUpOO0FBU0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBTkY7QUFVRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVBKO0FBV0E7RUFDRSxjQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7QUFSRjtBQVdBO0VBQ0UsYUFBQTtBQVJGO0FBV0E7RUFDRTtJQUNFLGNBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLGNBQUE7RUFURjs7RUFZQTtJQUNFLFdBQUE7RUFURjtBQUNGO0FBWUE7RUFDRTtJQUNFLGFBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InRvcC1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+c3JjL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbjo6bmctZGVlcCAucC10b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6MCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gIGNvbG9yOiAkd2hpdGU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLnBpIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucC10b29sYmFyLWdyb3VwLWxlZnQgLnAtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjg4ZDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwIDZweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTQlKSwgMCAxcHggMThweCAwIHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICB9XHJcblxyXG4gIC5wLXRvb2xiYXItZ3JvdXAtY2VudGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5wLXRvb2xiYXItZ3JvdXAtcmlnaHQgLnAtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBtYXJnaW46IDJweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxucC1vdmVybGF5UGFuZWwge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdi1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4udmlzaWJsZS1tZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGUtc20ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnZpc2libGUtbWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC52aXNpYmxlLXNtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1icmFuZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhpZGRlbi1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzE1NjVjMDtcclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4kYmxvY2stYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxuJGRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6I2M4YzhjODtcclxuJHRhYmxlLXRoLWZvbnQtY29sb3I6cmdiYSgyMSwxMDEsMTkyLC44KTtcclxuJGxpZ2h0LXllbGxvdzogI2ZmZmZjYztcclxuIl19 */"]
});

/***/ }),

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": function() { return /* binding */ PagesRoutingModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 8277);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ 7703);
/* harmony import */ var _pages_routing_config_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages-routing-config.const */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);



 // Component

 // Const




var routes = [{
  path: '',
  component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
  children: [{
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }].concat((0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_pages_routing_config_const__WEBPACK_IMPORTED_MODULE_4__.childRoutes))
}];
var PagesRoutingModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PagesRoutingModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PagesRoutingModule);
});

PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) {
  return new (t || PagesRoutingModule)();
};

PagesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: PagesRoutingModule
});
PagesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": function() { return /* binding */ PagesModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.ngprime.module */ 6093);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ 7703);
/* harmony import */ var _layout_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/top-nav/top-nav.component */ 9325);
/* harmony import */ var _layout_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/side-nav/side-nav.component */ 3381);
/* harmony import */ var _core_services_basic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/basic.service */ 8865);
/* harmony import */ var _storeLogin_storeLogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storeLogin/storeLogin.component */ 9049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);


 // Module


 // Component



 // Service




var PagesModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PagesModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PagesModule);
});

PagesModule.ɵfac = function PagesModule_Factory(t) {
  return new (t || PagesModule)();
};

PagesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: PagesModule
});
PagesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_core_services_basic_service__WEBPACK_IMPORTED_MODULE_7__.BasicService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__.PagesRoutingModule, _app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PagesModule, {
    declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__.LayoutComponent, _layout_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _layout_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__.SideNavComponent, _storeLogin_storeLogin_component__WEBPACK_IMPORTED_MODULE_8__.StoreLoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__.PagesRoutingModule, _app_ngprime_module__WEBPACK_IMPORTED_MODULE_2__.NgPrimeModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map