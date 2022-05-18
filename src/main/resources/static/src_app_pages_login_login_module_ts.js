"use strict";
(self["webpackChunkrma_web"] = self["webpackChunkrma_web"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/login.service */ 1315);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/ripple */ 2875);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);















function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "em", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r0.error));
  }
}

var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(router, loginService, fb, translateService) {
    (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);

    this.router = router;
    this.loginService = loginService;
    this.fb = fb;
    this.translateService = translateService;
    this.production = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production;
    this.form = this.fb.group({
      tenant: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    this.locale = '';
    this.version = '';
    this.msgs = [];
    this.error = '';
  }

  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onLogin",
    value: function onLogin(form) {
      var _this = this;

      if (form.invalid) return;
      this.loginService.logout();
      this.loginService.login(form.value.tenant, form.value.username, form.value.password).subscribe({
        next: function next(success) {
          debugger;

          if (success) {
            console.log('login success');

            _this.router.navigate(['/welcome']); // this.loginService.profile().subscribe({
            //   next: (success2) => {
            //     if (success2) {
            //       console.log('profile success2');
            //       this.router.navigate(['/welcome']);
            //     }
            //   },
            // });

          } else {
            console.log('login fail');
            _this.error = 'login.messages.403';
          }
        },
        error: function error(e) {
          console.log(e);
          if (e.status == 403) _this.error = 'login.messages.403';else _this.error = e.error.message;
        }
      });
    }
    /**
     * 語言下拉選單 Change 事件
     * @param $event 事件
     */

  }, {
    key: "onLanguageChange",
    value: function onLanguageChange($event) {
      this.translateService.use(this.locale);
    }
  }]);

  return LoginComponent;
}();

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 24,
  vars: 21,
  consts: [[1, "login-page"], [1, "content", "px20"], [1, "login-form", 3, "formGroup"], [1, "text-center"], [1, "app-name"], ["fxLayout", "row"], ["fxFlexFill", "", 1, "p-fluid"], ["pInputText", "", "formControlName", "tenant", "type", "text", "required", "", 3, "placeholder", "input"], ["pInputText", "", "formControlName", "username", "type", "text", "required", "", 3, "placeholder", "input"], ["pInputText", "", "formControlName", "password", "type", "password", "required", "", 3, "placeholder", "input"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayout.xs", "column", 1, "space-between", 2, "display", "none"], ["href", "javascript:void(0)", 2, "display", "none"], ["fxFlexFill", ""], ["pButton", "", "pRipple", "", "type", "submit", "color", "primary", 3, "label", "disabled", "click"], ["fxLayout", "row", 4, "ngIf"], ["fxFlexFill", "", 1, "text-center"], [1, "pi", "pi-exclamation-triangle", 2, "color", "red"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function LoginComponent_Template_input_input_9_listener() {
        return ctx.error = "";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function LoginComponent_Template_input_input_11_listener() {
        return ctx.error = "";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function LoginComponent_Template_input_input_13_listener() {
        return ctx.error = "";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
        return ctx.onLogin(ctx.form);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 5, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 9, "app.title"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 11, "login.tenant"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 13, "login.username"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, "login.password"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 17, "login.forgot"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 19, "login.actions.login"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.error);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.FlexFillDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_11__.Ripple, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".login-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  position: relative;\n  font-family: Roboto, Helvetica Neue, sans-serif;\n}\n.login-page[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  padding: 40px;\n  background: #ffffff;\n  max-width: 580px;\n  box-shadow: 0 0 20px #ddd;\n}\n.login-page[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin: 10px 10px 55.25px 0;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  letter-spacing: normal;\n  width: 100%;\n  border-width: 0px 0px 1px 0px;\n  border-color: rgba(0, 0, 0, 0.42);\n  padding: 0px 0px 7.25px 0px;\n  border-radius: 0px;\n}\n.login-page[_ngcontent-%COMP%]   .px20[_ngcontent-%COMP%] {\n  display: flex;\n  z-index: 1;\n  align-items: center;\n  justify-content: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.login-page[_ngcontent-%COMP%]   .px20[_ngcontent-%COMP%]   .app-name[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  padding-bottom: 10px;\n  font-size: 32px;\n  font-family: Roboto, Helvetica Neue, sans-serif;\n}\n.login-page[_ngcontent-%COMP%]   .px20[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-page[_ngcontent-%COMP%]   .px20[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill {\n  box-shadow: 0 0 0 30px #ffffff inset;\n  -webkit-box-shadow: 0 0 0 30px #ffffff inset;\n}\n.login-page[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background: #ffffff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 50%;\n  right: 0;\n}\n.login-page[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #1565c0;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.login-page[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  margin: 20px 0px 20px 0px;\n}\n.login-page[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.p-button[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.p-button[_ngcontent-%COMP%]:not(.p-button-icon-only) {\n  display: flex;\n  width: 100%;\n  text-align: center;\n}\n.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJDVkk7RURXSixnQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7QUFDUjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFDUTtFQUNJLG9DQUFBO0VBQ0EsNENBQUE7QUFDWjtBQUdFO0VBQ0UsV0FBQTtFQUNBLG1CQ3hESTtFRHlESixrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtFQUNBLG1CQ2xFWTtFRG1FWixrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFESjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBS0E7RUFDRSxxQkFBQTtBQUZGO0FBSUU7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRk47QUFRRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFMTiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ35zcmMvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuLmxvZ2luLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgLmxvZ2luLWZvcm0ge1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgIG1heC13aWR0aDogNTgwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAjZGRkO1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDU1LjI1cHggMDtcclxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDBweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDcuMjVweCAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucHgyMCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAuYXBwLW5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90byxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICBpbnB1dDotd2Via2l0LWF1dG9maWxsIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMzBweCAkd2hpdGUgaW5zZXQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMzBweCAkd2hpdGUgaW5zZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogNTAlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgLnNwYWNlLWJldHdlZW57XHJcbiAgICBtYXJnaW46ICAyMHB4IDBweCAyMHB4IDBweDtcclxuICB9XHJcbiAgLmxvZ2luLWJ1dHRvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnAtYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuXHJcbiAgJjpub3QoLnAtYnV0dG9uLWljb24tb25seSkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnAtYnV0dG9uc2V0IHtcclxuICAucC1idXR0b24ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMxNTY1YzA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJG1haW4tYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuJGJsb2NrLWJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XHJcbiRkaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiNjOGM4Yzg7XHJcbiR0YWJsZS10aC1mb250LWNvbG9yOnJnYmEoMjEsMTAxLDE5MiwuOCk7XHJcbiRsaWdodC15ZWxsb3c6ICNmZmZmY2M7XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": function() { return /* binding */ HttpLoaderFactory; },
/* harmony export */   "LoginModule": function() { return /* binding */ LoginModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/login/login.component */ 4902);
/* harmony import */ var src_app_pages_login_login_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/login/login.routing */ 3517);
/* harmony import */ var src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.common.module */ 6393);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);












function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__.TranslateHttpLoader(http);
}
var LoginModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginModule);
});

LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};

LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, src_app_pages_login_login_routing__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__.AppCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild({
    loader: {
      provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
    },
    isolate: false
  })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule, src_app_pages_login_login_routing__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, src_app_app_common_module__WEBPACK_IMPORTED_MODULE_4__.AppCommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule],
    exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule]
  });
})();

/***/ }),

/***/ 3517:
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.routing.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": function() { return /* binding */ LoginRoutingModule; }
/* harmony export */ });
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/login/login.component */ 4902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: src_app_pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}];
var LoginRoutingModule = /*#__PURE__*/(0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginRoutingModule() {
  (0,E_teams_rma_web_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginRoutingModule);
});

LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || LoginRoutingModule)();
};

LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginRoutingModule
});
LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map