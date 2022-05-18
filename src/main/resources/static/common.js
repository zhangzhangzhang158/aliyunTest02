"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["common"],{

/***/ 8145:
/*!***********************************************!*\
  !*** ./src/app/core/services/menu.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": function() { return /* binding */ MenuService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _pages_pages_routing_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/pages-routing-config.const */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);








var MenuService = /*#__PURE__*/function () {
  function MenuService(http) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuService);

    this.http = http;
    this.toggleMenuBar = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl + '/auth';
    this.adminRoutes = _pages_pages_routing_config_const__WEBPACK_IMPORTED_MODULE_3__.childRoutes;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuService, [{
    key: "getMenus",
    value: function getMenus() {
      var _this = this;

      var url = this.baseUrl + '/current/permissions?site=AUTOAD';

      if (url.startsWith('assets')) {
        url = this.baseUrl + '/current-permissions.json';
      }

      return this.http.get(url).pipe( //tap(list => console.log('list: ' + JSON.stringify(list))),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (list) {
        var menus = [];
        list.forEach(function (item) {
          item = _this.resetData(item);
          menus.push(item);
        });
        return menus;
      }));
    }
  }, {
    key: "resetData",
    value: function resetData(item) {
      this.adminRoutes.forEach(function (menu) {
        if (item.path != null && item.path == '/' + menu.path) {
          item.icon = menu.data.icon;
          item.name = menu.data.title;
        }

        item.selected = false;
      });
      return item;
    }
  }, {
    key: "getFeature",
    value: function getFeature(path) {
      return this.getMenus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (featurets) {
        return featurets.find(function (p) {
          return p.path === path;
        });
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(err) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      var errorMessage = '';

      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = "An error occurred: ".concat(err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
      }

      console.error(errorMessage);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(errorMessage);
    }
  }]);

  return MenuService;
}();

MenuService.ɵfac = function MenuService_Factory(t) {
  return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};

MenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: MenuService,
  factory: MenuService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9891:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





/**
 * Toast service class
 * This class provides methods to add single, multiple alerts as a toast
 */

var ToastService = /*#__PURE__*/function () {
  function ToastService(messageService, translateService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ToastService);

    this.messageService = messageService;
    this.translateService = translateService;
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ToastService, [{
    key: "info",
    value: function info(detail, sticky, key) {
      this.addSingle('info', 'app.Info', detail, sticky, key);
    }
  }, {
    key: "success",
    value: function success(detail, sticky, key) {
      this.addSingle('success', 'app.Success', detail, sticky, key);
    }
  }, {
    key: "successrWithParmeter",
    value: function successrWithParmeter(detail, params, sticky, key) {
      this.addSingle('success', 'app.Success', this.translateService.instant(detail, params), sticky, key);
    }
  }, {
    key: "warn",
    value: function warn(detail, sticky, key) {
      this.addSingle('warn', 'app.Warn', detail, sticky, key);
    }
  }, {
    key: "error",
    value: function error(detail, key) {
      this.addSingle('error', 'app.Error', detail, true, key);
    }
  }, {
    key: "errorWithParmeter",
    value: function errorWithParmeter(detail, params, key, data) {
      this.addSingle('error', 'app.Error', this.translateService.instant(detail, params), true, key, data);
    }
  }, {
    key: "errorWithColumnNameParmeter",
    value: function errorWithColumnNameParmeter(detail, columnNames, key, data) {
      var _this = this;

      var parmeter = '';
      columnNames.forEach(function (columnName) {
        parmeter += "," + _this.translateService.instant(columnName);
      });

      if (parmeter.length > 0) {
        parmeter = parmeter.substring(1);
      }

      this.addSingle('error', 'app.Error', this.translateService.instant(detail, {
        data: parmeter
      }), true, key, data);
    }
    /**
     * add single toast message
     * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
     * @param summary Summary text of the message.
     * @param detail Detail text of the message.
     * @param sticky Whether the message should be automatically closed based on life property or kept visible.
     * @param key Key of the message in case message is targeted to a specific toast component.
     */

  }, {
    key: "addSingle",
    value: function addSingle(severity, summary, detail, sticky, key, data) {
      this.messageService.add({
        severity: severity,
        summary: summary,
        detail: detail,
        sticky: sticky,
        key: key
      });
    }
    /**
     * add multiple toast messages
     * @param messages
     * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
     */

  }, {
    key: "addMultiple",
    value: function addMultiple(messages) {
      this.messageService.addAll(messages);
    }
    /**
     * clear all toast messages
     */

  }, {
    key: "clear",
    value: function clear() {
      this.messageService.clear();
    }
  }]);

  return ToastService;
}();

ToastService.ɵfac = function ToastService_Factory(t) {
  return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService));
};

ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ToastService,
  factory: ToastService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 436:
/*!*****************************************************!*\
  !*** ./src/app/pages/pages-routing-config.const.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "childRoutes": function() { return /* binding */ childRoutes; }
/* harmony export */ });
var childRoutes = [{
  path: 'welcome',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_pages_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 2282)).then(function (m) {
      return m.WelcomeModule;
    });
  },
  data: {
    icon: 'pi-home',
    title: 'welcome.title'
  }
}];

/***/ }),

/***/ 9049:
/*!**********************************************************!*\
  !*** ./src/app/pages/storeLogin/storeLogin.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreLoginComponent": function() { return /* binding */ StoreLoginComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/menu.service */ 8145);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ 4084);







var StoreLoginComponent = /*#__PURE__*/function () {
  function StoreLoginComponent(router, activatedRoute, loginService, menuService, _msalService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StoreLoginComponent);

    this.router = router;
    this.activatedRoute = activatedRoute;
    this.loginService = loginService;
    this.menuService = menuService;
    this._msalService = _msalService;
    this.accessToken = '';
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StoreLoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.activatedRoute.queryParams.subscribe(function (params) {
        console.log(params);
        _this.accessToken = params.accessToken;
        console.log('ngOnInit accessToken', _this.accessToken);
      });
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this.accessToken == '' || !this.accessToken) {
        this.router.navigate(['redirect']);
      }

      this.loginService.storeLogin(this.accessToken).subscribe({
        next: function next(storeLoginData) {
          var email = '';

          if (storeLoginData) {
            email = localStorage.getItem('storeLoginEmail') || '';

            _this2.loginService.logout();

            _this2.loginService.loginAad(email).subscribe({
              next: function next(loginAadSuccess) {
                console.log('storeLogin> loginAad token', loginAadSuccess);

                if (loginAadSuccess) {
                  console.log('storeLogin> loginAad success');

                  _this2.loginService.profile().subscribe({
                    next: function next(profileSuccess) {
                      if (profileSuccess) {
                        console.log('storeLogin> profile success');
                        var location = localStorage.getItem('location');
                        localStorage.removeItem('location');
                        console.log('localStorage location : ' + location);
                        console.log('!!location : ' + !!location);

                        if (!!location) {
                          _this2.menuService.getMenus().subscribe({
                            next: function next(menus) {
                              localStorage.setItem('menus', JSON.stringify(menus));
                            },
                            complete: function complete() {
                              _this2.router.navigateByUrl(location);
                            }
                          });
                        } else {
                          _this2.router.navigate(['/']);
                        }
                      }
                    }
                  });
                } else {
                  console.log('storeLogin> loginAad fail');
                }
              },
              error: function error(e) {
                console.log('storeLogin> loginAad error', e);

                _this2.router.navigate(['/redirect']);
              }
            });
          } else {
            _this2.router.navigate(['redirect']);
          }
        },
        error: function error(e) {
          console.log('storeLogin> storeLogin error', e);

          _this2.router.navigate(['redirect']);
        }
      });
    }
  }]);

  return StoreLoginComponent;
}();

StoreLoginComponent.ɵfac = function StoreLoginComponent_Factory(t) {
  return new (t || StoreLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_menu_service__WEBPACK_IMPORTED_MODULE_3__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__.MsalService));
};

StoreLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: StoreLoginComponent,
  selectors: [["app-storeLogin"]],
  decls: 2,
  vars: 0,
  template: function StoreLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "storeLogin works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZUxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 5474:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": function() { return /* binding */ throwError; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2971);


function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(errorOrErrorFactory) ? errorOrErrorFactory : function () {
    return errorOrErrorFactory;
  };

  var init = function init(subscriber) {
    return subscriber.error(errorFactory());
  };

  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(scheduler ? function (subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map