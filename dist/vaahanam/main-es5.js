function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sign/sign.component */
    "./src/app/sign/sign.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./overlay-main/overlay-main.component */
    "./src/app/overlay-main/overlay-main.component.ts");
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/app/payment/payment.component.ts");
    /* harmony import */


    var _journeys_journeys_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./journeys/journeys.component */
    "./src/app/journeys/journeys.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'Sign-Up',
      pathMatch: 'full'
    }, {
      path: 'Sign-Up',
      component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__["SignComponent"]
    }, {
      path: 'Sign-In',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }, {
      path: 'Menu',
      component: _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"]
    }, {
      path: 'Menu-options',
      component: _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_6__["OverlayMainComponent"]
    }, {
      path: 'Home',
      component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_5__["MainpageComponent"]
    }, {
      path: 'Ticket',
      component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"]
    }, {
      path: 'Journeys',
      component: _journeys_journeys_component__WEBPACK_IMPORTED_MODULE_8__["JourneysComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _dbservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dbservice.service */
    "./src/app/dbservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dbservice) {
        _classCallCheck(this, AppComponent);

        this.dbservice = dbservice;
        this.title = 'RideASAP';
      }

      _createClass(AppComponent, [{
        key: "getClasses",
        value: function getClasses() {
          var classes = {
            'pinned-sidebar': this.dbservice.getSidebarStat().isSidebarPinned,
            'toggeled-sidebar': this.dbservice.getSidebarStat().isSidebarToggeled
          };
          return classes;
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.dbservice.toggleSidebar();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dbservice_service__WEBPACK_IMPORTED_MODULE_1__["DbserviceService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _dbservice_service__WEBPACK_IMPORTED_MODULE_1__["DbserviceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./loading/loading.component */
    "./src/app/loading/loading.component.ts");
    /* harmony import */


    var _sign_sign_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sign/sign.component */
    "./src/app/sign/sign.component.ts");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/signin/signin.component.ts");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./overlay-main/overlay-main.component */
    "./src/app/overlay-main/overlay-main.component.ts");
    /* harmony import */


    var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./mainpage/mainpage.component */
    "./src/app/mainpage/mainpage.component.ts");
    /* harmony import */


    var _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./payment/payment.component */
    "./src/app/payment/payment.component.ts");
    /* harmony import */


    var _journeys_journeys_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./journeys/journeys.component */
    "./src/app/journeys/journeys.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _sign_sign_component__WEBPACK_IMPORTED_MODULE_10__["SignComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_12__["OverlayComponent"], _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_13__["OverlayMainComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__["MainpageComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], _journeys_journeys_component__WEBPACK_IMPORTED_MODULE_16__["JourneysComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_9__["LoadingComponent"], _sign_sign_component__WEBPACK_IMPORTED_MODULE_10__["SignComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_12__["OverlayComponent"], _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_13__["OverlayMainComponent"], _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_14__["MainpageComponent"], _payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"], _journeys_journeys_component__WEBPACK_IMPORTED_MODULE_16__["JourneysComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/book.ts":
  /*!*************************!*\
    !*** ./src/app/book.ts ***!
    \*************************/

  /*! exports provided: Book */

  /***/
  function srcAppBookTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Book", function () {
      return Book;
    });

    var Book = function Book(email, source, destination, price, arrtime, reachTime, tottime) {
      _classCallCheck(this, Book);

      this.email = email;
      this.source = source;
      this.destination = destination;
      this.price = price;
      this.arrtime = arrtime;
      this.reachTime = reachTime;
      this.tottime = tottime;
    };
    /***/

  },

  /***/
  "./src/app/dbservice.service.ts":
  /*!**************************************!*\
    !*** ./src/app/dbservice.service.ts ***!
    \**************************************/

  /*! exports provided: DbserviceService */

  /***/
  function srcAppDbserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DbserviceService", function () {
      return DbserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DbserviceService = /*#__PURE__*/function () {
      function DbserviceService() {
        _classCallCheck(this, DbserviceService);

        this.isSidebarPinned = false;
        this.isSidebarToggeled = false;
      }

      _createClass(DbserviceService, [{
        key: "toggleSidebar",
        value: function toggleSidebar() {
          this.isSidebarToggeled = !this.isSidebarToggeled;
        }
      }, {
        key: "toggleSidebarPin",
        value: function toggleSidebarPin() {
          this.isSidebarPinned = !this.isSidebarPinned;
        }
      }, {
        key: "getSidebarStat",
        value: function getSidebarStat() {
          return {
            isSidebarPinned: this.isSidebarPinned,
            isSidebarToggeled: this.isSidebarToggeled
          };
        }
      }]);

      return DbserviceService;
    }();

    DbserviceService.ɵfac = function DbserviceService_Factory(t) {
      return new (t || DbserviceService)();
    };

    DbserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DbserviceService,
      factory: DbserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/journeys/journeys.component.ts":
  /*!************************************************!*\
    !*** ./src/app/journeys/journeys.component.ts ***!
    \************************************************/

  /*! exports provided: JourneysComponent */

  /***/
  function srcAppJourneysJourneysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JourneysComponent", function () {
      return JourneysComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JourneysComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var jorny_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", jorny_r1.source, "-", jorny_r1.destination, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", jorny_r1.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Age: ", jorny_r1.age, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", jorny_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total-time: ", jorny_r1.totalTime, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", jorny_r1.date, "");
      }
    }

    var JourneysComponent = /*#__PURE__*/function () {
      function JourneysComponent(travel) {
        _classCallCheck(this, JourneysComponent);

        this.travel = travel;
        this.jrny = this.travel.jrny;
      }

      _createClass(JourneysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JourneysComponent;
    }();

    JourneysComponent.ɵfac = function JourneysComponent_Factory(t) {
      return new (t || JourneysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]));
    };

    JourneysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JourneysComponent,
      selectors: [["app-journeys"]],
      decls: 8,
      vars: 1,
      consts: [["id", "header", 1, "header"], [1, "container"], [1, "services"], [1, "row1"], [1, "one-half", "column"], ["href", "", 4, "ngFor", "ngForOf"], ["href", ""], [1, "fa", "fa-bus"]],
      template: function JourneysComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous Journeys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JourneysComponent_a_7_Template, 14, 7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jrny);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #fff;\n  margin: 0;\n  font-family: \"Patua One\", cursive;\n  text-align: center;\n  display: block;\n  margin-top: 20px;\n}\nh1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nh1[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 2.6rem;\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  text-align: left;\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nh3[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 10%;\n  padding-top: 5px;\n  border-bottom: 3px solid whitesmoke;\n}\nh1[_ngcontent-%COMP%]    + h4[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.row1[_ngcontent-%COMP%] {\n  padding: 50px;\n}\na[_ngcontent-%COMP%] {\n  text-align: center;\n  outline: none;\n  display: inline-block;\n  text-decoration: none;\n  background: #DD2476;\n  font-size: 14px;\n  color: steelblue;\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  transition: all ease 0.3s;\n}\n.block[_ngcontent-%COMP%] {\n  width: 130px;\n  display: block;\n}\n.one-half[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\nheader[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #FF512F;\n  \n  \n  background: linear-gradient(to right, #DD2476, #FF512F);\n  \n}\nheader[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .services[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\nheader[_ngcontent-%COMP%] {\n  padding: 80px 0 150px;\n}\n.about[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%] {\n  padding: 150px 0;\n}\nheader[_ngcontent-%COMP%] {\n  background: url(\"https://unsplash.it/1080/720/?image=377\") no-repeat fixed center/cover;\n  text-align: center;\n}\n\n.services[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: #fafafa;\n  margin-top: 20px;\n  border-radius: 4px;\n}\n.services[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.services[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 5.5em;\n  color: #DD2476;\n}\n.services[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: white;\n}\n.services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n}\n\n@media (min-width: 550px) {\n  a[_ngcontent-%COMP%] {\n    box-shadow: 0 8px #DD2476;\n  }\n\n  header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .about[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 8px #DD2476;\n  }\n\n  header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    box-shadow: 0 4px #DD2476;\n    transform: translateY(4px);\n  }\n}\n@media (min-width: 750px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3.5rem;\n  }\n\n  h3[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n\n  h4[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n  }\n\n  .services[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 -8px white;\n    transform: scale(1.15);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam91cm5leXMvam91cm5leXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2pvdXJuZXlzL0M6XFxVc2Vyc1xcYWRtaW5cXElCTVxcUmlkZUFTQVAvc3JjXFxhcHBcXGpvdXJuZXlzXFxqb3VybmV5cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7b0RBQUE7QUFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURBRjtBQ0lBO0VBQ0UsZ0JBQUE7QURERjtBQ0lBO0VBQ0UsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7QURGRjtBQ0tBO0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtBREhGO0FDTUE7RUFDRSxlQUFBO0FESEY7QUNNQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7QURIRjtBQ01BO0VBQ0UsbUJBQUE7QURIRjtBQ01BO0VBRUUsYUFBQTtBREpGO0FDT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUVRLHlCQUFBO0FESlY7QUNRQTtFQUNFLFlBQUE7RUFFQSxjQUFBO0FETkY7QUNRQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QURORjtBQ1lBO29EQUFBO0FBR0E7RUFDRSx5QkFBQTtBRFZGO0FDYUE7RUFDRSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSx1REFBQTtFQUF5RCxxRUFBQTtBRFAzRDtBQ1VBO0VBQ0UsaUJBQUE7QURQRjtBQ1VBO0VBQ0UscUJBQUE7QURQRjtBQ1VBO0VBQ0UsZ0JBQUE7QURQRjtBQ1VBO0VBQ0UsdUZBQUE7RUFDQSxrQkFBQTtBRFBGO0FDVUE7b0RBQUE7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURSRjtBQ1dBO0VBQ0UsWUFBQTtBRFJGO0FDV0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QURSRjtBQ1dBO0VBQ0UsWUFBQTtBRFJGO0FDV0E7RUFDRSxnQkFBQTtBRFJGO0FDYUE7b0RBQUE7QUFHQTtFQUdFO0lBQ0UseUJBQUE7RURiRjs7RUM4QkE7SUFDRSx5QkFBQTtFRDNCRjs7RUM4QkE7SUFDRSx5QkFBQTtJQUdRLDBCQUFBO0VEM0JWO0FBQ0Y7QUNpQ0E7RUFFRTtJQUNFLGlCQUFBO0VEaENGOztFQ21DQTtJQUNFLGlCQUFBO0VEaENGOztFQ21DQTtJQUNFLGlCQUFBO0VEaENGOztFQ21DQTtJQUNFLHdCQUFBO0lBR1Esc0JBQUE7RURoQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2pvdXJuZXlzL2pvdXJuZXlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogR0VORVJBTCBTVFlMRVNcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xuLmhlYWRlciBoMSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJQYXR1YSBPbmVcIiwgY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaDEsIGgzLCBoNCwgaGVhZGVyIC5idG4ge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyLjZyZW07XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAyLjNyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuaDEgKyBoNCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5yb3cxIHtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNERDI0NzY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcbn1cblxuLmJsb2NrIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9uZS1oYWxmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogSEVBREVSIFNUWUxFU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5oZWFkZXIgLmJ0biB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5jb250YWluZXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbmhlYWRlciAuYnRuLCAuc2VydmljZXMge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogODBweCAwIDE1MHB4O1xufVxuXG4uYWJvdXQsIC5jb250YWN0IHtcbiAgcGFkZGluZzogMTUwcHggMDtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly91bnNwbGFzaC5pdC8xMDgwLzcyMC8/aW1hZ2U9Mzc3XCIpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXIvY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogU0VSVklDRVMgU1RZTEVTXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cbi5zZXJ2aWNlcyBhIHtcbiAgcGFkZGluZzogMjVweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2VydmljZXMgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlcnZpY2VzIHNwYW4ge1xuICBmb250LXNpemU6IDUuNWVtO1xuICBjb2xvcjogI0REMjQ3Njtcbn1cblxuLnNlcnZpY2VzIGE6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNlcnZpY2VzIHAge1xuICBtYXJnaW46IDE1cHggMCAwO1xufVxuXG4vKiBNRURJQSBRVUVSSUVTIFNUWUxFU1xu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcbiAgYSB7XG4gICAgYm94LXNoYWRvdzogMCA4cHggI0REMjQ3NjtcbiAgfVxuXG4gIGhlYWRlciBhOmhvdmVyLCAuYWJvdXQgYTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA4cHggI0REMjQ3NjtcbiAgfVxuXG4gIGhlYWRlciBhOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggI0REMjQ3NjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDIuOHJlbTtcbiAgfVxuXG4gIGg0IHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlcyBhOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIC04cHggd2hpdGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIH1cbn0iLCJcclxuLyogR0VORVJBTCBTVFlMRVNcclxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiUGF0dWEgT25lXCIsIGN1cnNpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5oMSwgaDMsIGg0LCBoZWFkZXIgLmJ0biB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAvLyBtYXJnaW46IDEwMHB4IDAgMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBmb250LXNpemU6IDIuM3JlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5oMzphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5oMSArIGg0IHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ucm93MVxyXG57XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjREQyNDc2O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgLjNzO1xyXG59XHJcblxyXG5cclxuLmJsb2NrIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm9uZS1oYWxmXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEhFQURFUiBTVFlMRVNcclxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcblxyXG5oZWFkZXIgLmJ0biB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbn1cclxuXHJcbmhlYWRlciAuYnRuLCAuc2VydmljZXMge1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDgwcHggMCAxNTBweDtcclxufVxyXG5cclxuLmFib3V0LCAuY29udGFjdCB7XHJcbiAgcGFkZGluZzogMTUwcHggMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3Vuc3BsYXNoLml0LzEwODAvNzIwLz9pbWFnZT0zNzdcIikgbm8tcmVwZWF0IGZpeGVkIGNlbnRlciAvIGNvdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU0VSVklDRVMgU1RZTEVTXHJcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xyXG5cclxuLnNlcnZpY2VzIGEge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNlcnZpY2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlcnZpY2VzIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogNS41ZW07XHJcbiAgY29sb3I6ICNERDI0NzY7XHJcbn1cclxuXHJcbi5zZXJ2aWNlcyBhOmhvdmVyIHNwYW4ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNlcnZpY2VzIHAge1xyXG4gIG1hcmdpbjogMTVweCAwIDA7XHJcbn1cclxuXHJcblxyXG5cclxuLyogTUVESUEgUVVFUklFUyBTVFlMRVNcclxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTUwcHgpIHtcclxuXHJcblxyXG4gIGEge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggI0REMjQ3NjtcclxuICB9XHJcblxyXG4gIC8vIG5hdiBhIHtcclxuICAvLyAgIHBhZGRpbmc6IDdweDtcclxuICAvLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNERDI0NzY7XHJcbiAgLy8gICB3aWR0aDogODBweDtcclxuICAvLyB9XHJcblxyXG4gIC8vIG5hdiBsaTpudGgtY2hpbGQoMm4rMSkgYTphZnRlciB7XHJcbiAgLy8gICBjb250ZW50OiBub25lO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gbmF2IGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgLy8gICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgLy8gfVxyXG5cclxuICBoZWFkZXIgYTpob3ZlciwgLmFib3V0IGE6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggI0REMjQ3NjtcclxuICB9XHJcblxyXG4gIGhlYWRlciBhOmFjdGl2ZXtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4ICNERDI0NzY7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHtcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IDIuOHJlbTtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2VzIGE6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAtOHB4IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JourneysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-journeys',
          templateUrl: './journeys.component.html',
          styleUrls: ['./journeys.component.scss']
        }]
      }], function () {
        return [{
          type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/loading/loading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/loading/loading.component.ts ***!
    \**********************************************/

  /*! exports provided: LoadingComponent */

  /***/
  function srcAppLoadingLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
      return LoadingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingComponent = /*#__PURE__*/function () {
      function LoadingComponent() {
        _classCallCheck(this, LoadingComponent);
      }

      _createClass(LoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoadingComponent;
    }();

    LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
      return new (t || LoadingComponent)();
    };

    LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingComponent,
      selectors: [["app-loading"]],
      decls: 2,
      vars: 0,
      template: function LoadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading works!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["h1[_ngcontent-%COMP%] {\n  color: cornsilk;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9DOlxcVXNlcnNcXGFkbWluXFxJQk1cXFJpZGVBU0FQL3NyY1xcYXBwXFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVxyXG57XHJcbiAgICBjb2xvcjogY29ybnNpbGs7XHJcbn0iLCJoMSB7XG4gIGNvbG9yOiBjb3Juc2lsaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loading',
          templateUrl: './loading.component.html',
          styleUrls: ['./loading.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mainpage/mainpage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/mainpage/mainpage.component.ts ***!
    \************************************************/

  /*! exports provided: MainpageComponent */

  /***/
  function srcAppMainpageMainpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainpageComponent", function () {
      return MainpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _travelloc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../travelloc */
    "./src/app/travelloc.ts");
    /* harmony import */


    var _book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../book */
    "./src/app/book.ts");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../overlay-main/overlay-main.component */
    "./src/app/overlay-main/overlay-main.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainpageComponent_div_18_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainpageComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainpageComponent_div_18_small_1_Template, 2, 0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function MainpageComponent_div_27_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainpageComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainpageComponent_div_27_small_1_Template, 2, 0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors.required);
      }
    }

    function MainpageComponent_div_36_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MainpageComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainpageComponent_div_36_small_1_Template, 2, 0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors.required);
      }
    }

    function MainpageComponent_li_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var appl_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](appl_r12);
      }
    }

    function MainpageComponent_li_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var disp_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](disp_r13);
      }
    }

    var MainpageComponent = /*#__PURE__*/function () {
      function MainpageComponent(travel, router) {
        _classCallCheck(this, MainpageComponent);

        this.travel = travel;
        this.router = router;
        this.distance = "";
        this.time = "";
        this.totalPrice = "";
        this.deptime = "";
        this.dispath = [];
        this.apple = [];
        this.locate = new _travelloc__WEBPACK_IMPORTED_MODULE_1__["Location"]("", "", "");
        this.book = new _book__WEBPACK_IMPORTED_MODULE_2__["Book"](this.travel.email, this.travel.source, this.travel.destination, this.travel.total_price, this.travel.arrtime, this.travel.reachTime, this.travel.tottime);
      }

      _createClass(MainpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "Openpopup",
        value: function Openpopup() {
          document.getElementById("overlay").style.visibility = "visible";
          document.getElementById("overlay").style.opacity = "1";
          document.getElementById("marketing").style.opacity = "0.2";
        }
      }, {
        key: "Closepopup",
        value: function Closepopup() {
          document.getElementById("overlay").style.visibility = "hidden";
          document.getElementById("overlay").style.opacity = "0";
          document.getElementById("marketing").style.opacity = "1";
        }
      }, {
        key: "sendbook",
        value: function sendbook() {
          var _this = this;

          this.book.source = this.travel.source;
          this.book.destination = this.travel.destination;
          this.book.price = this.travel.total_price;
          this.book.email = this.travel.email;
          this.book.arrtime = this.travel.arrtime;
          this.book.reachTime = this.travel.reachTime;
          this.book.tottime = this.travel.tottime;
          console.log(this.book);
          this.travel.bookinfo(this.book).subscribe(function (data) {
            console.log('Success!', data);
            _this.travel.name = data.name;
            _this.travel.source = data.source;
            _this.travel.destination = data.destination;
            _this.travel.total_price = data.price;
            _this.travel.tottime = data.totalTime;
            _this.travel.arrtime = data.arrtime;
            _this.travel.hashqr = data.ticket;
            _this.travel.reachTime = data.reachTime;
            console.log(_this.travel.hashqr);

            _this.router.navigate(['/Ticket']);
          }, function (error) {
            return console.log('Error', error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          this.travel.loc(this.locate).subscribe(function (data) {
            console.log('Success!', data);
            console.log(data.source);
            var Ppath = Object.keys(data.path); // data at book now

            _this2.travel.source = data.source;
            _this2.travel.destination = data.destination;
            _this2.travel.total_price = data.total_price;
            _this2.travel.arrtime = data.arrival_time;
            _this2.travel.reachTime = data.reach_time;
            _this2.travel.tottime = data.time_taken;
            _this2.travel.distance = data.total_distance; // 

            _this2.distance = data.total_distance;
            _this2.time = data.time_taken;
            _this2.deptime = data.arrival_time;
            _this2.totalPrice = data.total_price;
            _this2.dispath = data.distributed_path;
            _this2.apple = [];

            for (Ppath[0] in data.path) {
              _this2.apple.push(data.path[Ppath[0]]);
            }
          }, function (error) {
            return console.log('Error', error);
          });
        }
      }]);

      return MainpageComponent;
    }();

    MainpageComponent.ɵfac = function MainpageComponent_Factory(t) {
      return new (t || MainpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    MainpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainpageComponent,
      selectors: [["app-mainpage"]],
      decls: 65,
      vars: 12,
      consts: [[1, "container"], [1, "jumbotron"], [3, "ngSubmit"], ["usertravel", "ngForm"], ["id", "marketing", 1, "row"], [1, "col-md-4"], [1, "form-group"], [1, "col-md-12"], [1, "input-group"], [1, "input-group-addon"], [1, "fas", "fa-stopwatch"], ["type", "time", "name", "reaching_time", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rtime", ""], [4, "ngIf"], [1, "fas", "fa-map-marker-alt"], ["name", "Source", "placeholder", "Source", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["src", ""], ["name", "Destination", "placeholder", "Destination", "type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dest", ""], [1, "row", "marketing", 2, "align-items", "center"], [2, "font-size", "24px", 3, "disabled", "click"], [1, "fas", "fa-arrow-right"], ["id", "popup1", "id", "overlay"], ["id", "popup"], [4, "ngFor", "ngForOf"], [2, "color", "black", 3, "click"], [1, "close", 3, "click"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function MainpageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-overlay-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your Source , Destination and Approx Reaching time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainpageComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainpageComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.locate.reach_time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MainpageComponent_div_18_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainpageComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.locate.source = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MainpageComponent_div_27_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainpageComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.locate.destination = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainpageComponent_div_36_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainpageComponent_Template_button_click_38_listener() {
            return ctx.Openpopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Find Best Route ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Best Path Possible :-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Path :-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MainpageComponent_li_48_Template, 2, 1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Time between intermediate Stops :-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, MainpageComponent_li_52_Template, 2, 1, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Amount to b paid: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainpageComponent_Template_button_click_61_listener() {
            return ctx.sendbook();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Book Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainpageComponent_Template_a_click_63_listener() {
            return ctx.Closepopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.locate.reach_time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors && _r1.invalid && _r1.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.locate.source);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.errors && _r3.invalid && _r3.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.locate.destination);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.errors && _r5.invalid && _r5.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.form.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.apple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dispath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Arrival Time:", ctx.time, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Distance:", ctx.distance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalPrice);
        }
      },
      directives: [_overlay_main_overlay_main_component__WEBPACK_IMPORTED_MODULE_5__["OverlayMainComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: [".jumbotron[_ngcontent-%COMP%] {\n  position: relative;\n  background: #FF512F;\n  \n  \n  background: linear-gradient(to right, #DD2476, #FF512F);\n  \n}\n\n.row[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-left: 39%;\n  background: transparent;\n  color: #DD2476;\n  font-size: 1em;\n  padding: 10px;\n  color: #fff;\n  border: 2px solid #DD2476;\n  border-radius: 20px/50px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #FF512F;\n  \n  \n  background: linear-gradient(to right, #DD2476, #FF512F);\n  \n}\n\n#overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  transition: opacity 500ms;\n  visibility: hidden;\n  opacity: 0;\n}\n\n#popup[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 70px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 5px;\n  position: relative;\n  transition: all 5s ease-in-out;\n}\n\n#popup[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #333;\n  font-family: Tahoma, Arial, sans-serif;\n}\n\n#popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 30px;\n  transition: all 200ms;\n  font-size: 30px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n\n#popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:hover {\n  color: #DD2476;\n}\n\n#popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  max-height: 30%;\n  overflow: auto;\n}\n\n@media screen and (max-width: 765px) {\n  #popup[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  button[_ngcontent-%COMP%] {\n    margin-left: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnBhZ2UvQzpcXFVzZXJzXFxhZG1pblxcSUJNXFxSaWRlQVNBUC9zcmNcXGFwcFxcbWFpbnBhZ2VcXG1haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0EsbUJBQUE7RUFBc0IsOEJBQUE7RUFDNEMsK0JBQUE7RUFDbEUsdURBQUE7RUFBeUQscUVBQUE7QUNHN0Q7O0FEREE7RUFFSSxZQUFBO0FDR0o7O0FEREE7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNHSjs7QUREQTtFQUVJLFdBQUE7RUFDQSxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSx1REFBQTtFQUF5RCxxRUFBQTtBQ003RDs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURGQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0tKOztBREZFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQ0tKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExBO0VBRUk7SUFFSSxXQUFBO0VDTU47O0VESkU7SUFFSSxpQkFBQTtFQ01OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb25cclxue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNTEyRjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREQyNDc2LCAjRkY1MTJGKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovICBcclxufVxyXG4ucm93XHJcbntcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5idXR0b25cclxue1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM5JTtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI0REMjQ3NjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0REMjQ3NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcbmJ1dHRvbjpob3ZlclxyXG57XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNGRjUxMkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0REMjQ3NiwgI0ZGNTEyRik7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREQyNDc2LCAjRkY1MTJGKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqLyAgICBcclxufVxyXG5cclxuLy8gcG9wLXVwXHJcbiNvdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuI3BvcHVwIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAjcG9wdXAgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAjcG9wdXAgLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgI3BvcHVwIC5jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0REMjQ3NjtcclxuICB9XHJcbiAgI3BvcHVwIC5jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDMwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpXHJcbntcclxuICAgICNwb3B1cFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB9XHJcbn0iLCIuanVtYm90cm9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjRkY1MTJGO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREQyNDc2LCAjRkY1MTJGKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREQyNDc2LCAjRkY1MTJGKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAzMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzOSU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0REMjQ3NjtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjREQyNDc2O1xuICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbiNvdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jcG9wdXAge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDcwcHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcbn1cblxuI3BvcHVwIGg0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4jcG9wdXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbiNwb3B1cCAuY2xvc2U6aG92ZXIge1xuICBjb2xvcjogI0REMjQ3Njtcbn1cblxuI3BvcHVwIC5jb250ZW50IHtcbiAgbWF4LWhlaWdodDogMzAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY1cHgpIHtcbiAgI3BvcHVwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mainpage',
          templateUrl: './mainpage.component.html',
          styleUrls: ['./mainpage.component.scss']
        }]
      }], function () {
        return [{
          type: _travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/overlay-main/overlay-main.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/overlay-main/overlay-main.component.ts ***!
    \********************************************************/

  /*! exports provided: OverlayMainComponent */

  /***/
  function srcAppOverlayMainOverlayMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayMainComponent", function () {
      return OverlayMainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../book */
    "./src/app/book.ts");
    /* harmony import */


    var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signin.service */
    "./src/app/signin.service.ts");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OverlayMainComponent = /*#__PURE__*/function () {
      function OverlayMainComponent(signinDetails, travel, router) {
        _classCallCheck(this, OverlayMainComponent);

        this.signinDetails = signinDetails;
        this.travel = travel;
        this.router = router;
        this.book = new _book__WEBPACK_IMPORTED_MODULE_1__["Book"](this.travel.email, this.travel.source, this.travel.destination, this.travel.total_price, this.travel.arrtime, this.travel.reachTime, this.travel.tottime);
      }

      _createClass(OverlayMainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClick",
        value: function onClick() {
          var _this3 = this;

          this.book.source = this.travel.source;
          this.book.destination = this.travel.destination;
          this.book.price = this.travel.total_price;
          this.book.email = this.travel.email;
          console.log(this.book);
          this.travel.journey(this.book).subscribe(function (data) {
            console.log('Success!', data);
            _this3.travel.jrny = data;
            console.log(_this3.travel.jrny);

            _this3.router.navigate(['/Journeys']);
          }, function (error) {
            return console.log('Error', error);
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.signinDetails.Logout();
          this.router.navigate(['Sign-In']);
          return false;
        }
      }]);

      return OverlayMainComponent;
    }();

    OverlayMainComponent.ɵfac = function OverlayMainComponent_Factory(t) {
      return new (t || OverlayMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    OverlayMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverlayMainComponent,
      selectors: [["app-overlay-main"]],
      decls: 16,
      vars: 0,
      consts: [["type", "checkbox", "id", "menu-icon", "name", "menu-icon", 1, "menu-icon"], ["for", "menu-icon"], [1, "nav"], [1, "pt-5"], [3, "click"], ["href", "#"], ["href", "#", 3, "click"]],
      template: function OverlayMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayMainComponent_Template_a_click_5_listener() {
            return ctx.onClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My journeys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Monthly pass");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverlayMainComponent_Template_a_click_14_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700[_ngcontent-%COMP%];800[_ngcontent-%COMP%];900&display=swap\")[_ngcontent-%COMP%];\n[type=checkbox][_ngcontent-%COMP%]:checked, [type=checkbox][_ngcontent-%COMP%]:not(:checked) {\n  position: absolute;\n  left: -9999px;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 63px;\n  right: 75px;\n  display: block;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  z-index: 10;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before, .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 20px;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  border-top: 2px solid #ececee;\n  border-bottom: 2px solid #ececee;\n  transition: border-width 100ms 1500ms ease, top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after, .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 22px;\n  height: 2px;\n  z-index: 20;\n  top: 10px;\n  right: 4px;\n  background-color: #ececee;\n  margin-top: -1px;\n  transition: width 100ms 1750ms ease, right 100ms 1750ms ease, margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  top: 10px;\n  transform: rotate(45deg);\n  height: 2px;\n  background-color: #ececee;\n  border-width: 0;\n  transition: border-width 100ms 340ms ease, top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1), background-color 200ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:after {\n  width: 30px;\n  margin-top: 0;\n  right: 0;\n  transform: rotate(-45deg);\n  transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease, transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 33px;\n  right: 50px;\n  display: block;\n  width: 80px;\n  height: 80px;\n  padding: 0;\n  margin: 0;\n  z-index: 9;\n  overflow: hidden;\n  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);\n  background-color: #353746;\n  -webkit-animation: border-transform 7s linear infinite;\n          animation: border-transform 7s linear infinite;\n  transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 1100ms ease, width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1), height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n@-webkit-keyframes border-transform {\n  0%, 100% {\n    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;\n  }\n  14% {\n    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;\n  }\n  28% {\n    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;\n  }\n  42% {\n    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;\n  }\n  56% {\n    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;\n  }\n  70% {\n    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;\n  }\n  84% {\n    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;\n  }\n}\n@keyframes border-transform {\n  0%, 100% {\n    border-radius: 63% 37% 54% 46%/55% 48% 52% 45%;\n  }\n  14% {\n    border-radius: 40% 60% 54% 46%/49% 60% 40% 51%;\n  }\n  28% {\n    border-radius: 54% 46% 38% 62%/49% 70% 30% 51%;\n  }\n  42% {\n    border-radius: 61% 39% 55% 45%/61% 38% 62% 39%;\n  }\n  56% {\n    border-radius: 61% 39% 67% 33%/70% 50% 50% 30%;\n  }\n  70% {\n    border-radius: 50% 50% 34% 66%/56% 68% 32% 44%;\n  }\n  84% {\n    border-radius: 46% 54% 50% 50%/35% 61% 39% 65%;\n  }\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%] {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  width: 200%;\n  height: 200%;\n  transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1), transform 250ms 700ms ease, width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1), height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  z-index: 6;\n  text-align: center;\n  transform: translateY(-50%);\n  list-style: none;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin: 10px 0;\n  text-align: center;\n  list-style: none;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(30px);\n  transition: all 250ms linear;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 200ms;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 150ms;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 100ms;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 50ms;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: xx-large;\n  text-transform: uppercase;\n  line-height: 1.2;\n  font-weight: 800;\n  display: inline-block;\n  position: relative;\n  color: #ececee;\n  transition: all 250ms linear;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #DD2476;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  content: \"\";\n  height: 2vh;\n  margin-top: -1vh;\n  width: 0;\n  left: 0;\n  background-color: #353746;\n  opacity: 0.8;\n  transition: width 250ms linear;\n}\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0);\n  transition: opacity 350ms ease, transform 250ms ease;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 1400ms;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 1480ms;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 1560ms;\n}\n.menu-icon[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transition-delay: 1640ms;\n}\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 50px;\n  display: block;\n  z-index: 11;\n  transition: all 250ms linear;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 26px;\n  width: auto;\n  display: block;\n}\n@media screen and (max-width: 991px) {\n  .menu-icon[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%], .menu-icon[_ngcontent-%COMP%]:not(:checked)    + label[_ngcontent-%COMP%] {\n    right: 55px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    right: 30px;\n  }\n\n  .nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: xx-large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcmxheS1tYWluL0M6XFxVc2Vyc1xcYWRtaW5cXElCTVxcUmlkZUFTQVAvc3JjXFxhcHBcXG92ZXJsYXktbWFpblxcb3ZlcmxheS1tYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdmVybGF5LW1haW4vb3ZlcmxheS1tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdIQUFBO0FBR1I7O0VBRUUsa0JBQUE7RUFDQSxhQUFBO0FDREY7QURHQTs7RUFFRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUY7QURFQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNE5BQUE7QUNDRjtBREtBOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtSUFBQTtBQ0ZGO0FET0E7RUFDRSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esc09BQUE7QUNKRjtBRFVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxrSUFBQTtBQ1BGO0FEYUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxzREFBQTtVQUFBLDhDQUFBO0VBQ0EsZ1BBQUE7QUNWRjtBRGdCQTtFQUNJO0lBQVUsOENBQUE7RUNaWjtFRGFBO0lBQU0sOENBQUE7RUNWTjtFRFdBO0lBQU0sOENBQUE7RUNSTjtFRFNBO0lBQU0sOENBQUE7RUNOTjtFRE9BO0lBQU0sOENBQUE7RUNKTjtFREtBO0lBQU0sOENBQUE7RUNGTjtFREdBO0lBQU0sOENBQUE7RUNBTjtBQUNGO0FEUkE7RUFDSTtJQUFVLDhDQUFBO0VDWlo7RURhQTtJQUFNLDhDQUFBO0VDVk47RURXQTtJQUFNLDhDQUFBO0VDUk47RURTQTtJQUFNLDhDQUFBO0VDTk47RURPQTtJQUFNLDhDQUFBO0VDSk47RURLQTtJQUFNLDhDQUFBO0VDRk47RURHQTtJQUFNLDhDQUFBO0VDQU47QUFDRjtBREVBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtPQUFBO0FDQUY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ0pGO0FETUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDSEY7QURLQTtFQUNFLHVCQUFBO0FDRkY7QURJQTtFQUNFLHVCQUFBO0FDREY7QURHQTtFQUNFLHVCQUFBO0FDQUY7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7QURDQTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FDRUY7QURBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ0dGO0FEREE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNJRjtBREZBO0VBQ0UsV0FBQTtBQ0tGO0FEREE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0RBQUE7QUNJRjtBRERBO0VBQ0Usd0JBQUE7QUNJRjtBREZBO0VBQ0Usd0JBQUE7QUNLRjtBREhBO0VBQ0Usd0JBQUE7QUNNRjtBREpBO0VBQ0Usd0JBQUE7QUNPRjtBREZBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNLRDtBREhBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDTUQ7QUREQTtFQUNFOztJQUVFLFdBQUE7RUNJRjs7RURGQTtJQUNFLFVBQUE7RUNLRjs7RURIQTtJQUNFLFdBQUE7RUNNRjs7RURKQTtJQUNFLG1CQUFBO0VDT0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL292ZXJsYXktbWFpbi9vdmVybGF5LW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCxcclxuW3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsLFxyXG4ubWVudS1pY29uOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2M3B4O1xyXG4gIHJpZ2h0OiA3NXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4ubWVudS1pY29uOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICB6LWluZGV4OiAyMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2VjZWNlZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VjZWNlZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItd2lkdGggMTAwbXMgMTUwMG1zIGVhc2UsIFxyXG4gICAgICAgICAgICAgIHRvcCAxMDBtcyAxNjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgICAgICAgIGhlaWdodCAxMDBtcyAxNjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIDIwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4ubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcclxuLm1lbnUtaWNvbjpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWU7XHJcbiAgbWFyZ2luLXRvcDogLTFweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyAxNzUwbXMgZWFzZSwgXHJcbiAgICAgICAgICAgICAgcmlnaHQgMTAwbXMgMTc1MG1zIGVhc2UsXHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcCAxMDBtcyBlYXNlLCBcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsOmJlZm9yZXtcclxuICB0b3A6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci13aWR0aCAxMDBtcyAzNDBtcyBlYXNlLCBcclxuICAgICAgICAgICAgICB0b3AgMTAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgICAgICAgIGhlaWdodCAxMDBtcyAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMjAwbXMgNTAwbXMgZWFzZSxcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgMTcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG4ubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbDphZnRlcntcclxuICB3aWR0aDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMTAwbXMgZWFzZSxcclxuICAgICAgICAgICAgICByaWdodCAxMDBtcyBlYXNlLCAgXHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcCAxMDBtcyA1MDBtcyBlYXNlLCBcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgMTcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG5cclxuLm5hdntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAzM3B4O1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICB6LWluZGV4OiA5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNzQ2O1xyXG4gIGFuaW1hdGlvbjogYm9yZGVyLXRyYW5zZm9ybSA3cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDM1MG1zIDExMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksICBcclxuICAgICAgICAgICAgICByaWdodCAzNTBtcyAxMTAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybSAyNTBtcyAxMTAwbXMgZWFzZSxcclxuICAgICAgICAgICAgICB3aWR0aCA2NTBtcyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksXHJcbiAgICAgICAgICAgICAgaGVpZ2h0IDY1MG1zIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcclxufVxyXG5Aa2V5ZnJhbWVzIGJvcmRlci10cmFuc2Zvcm17XHJcbiAgICAwJSwxMDAlIHsgYm9yZGVyLXJhZGl1czogNjMlIDM3JSA1NCUgNDYlIC8gNTUlIDQ4JSA1MiUgNDUlOyB9IFxyXG4gIDE0JSB7IGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNTQlIDQ2JSAvIDQ5JSA2MCUgNDAlIDUxJTsgfSBcclxuICAyOCUgeyBib3JkZXItcmFkaXVzOiA1NCUgNDYlIDM4JSA2MiUgLyA0OSUgNzAlIDMwJSA1MSU7IH0gXHJcbiAgNDIlIHsgYm9yZGVyLXJhZGl1czogNjElIDM5JSA1NSUgNDUlIC8gNjElIDM4JSA2MiUgMzklOyB9IFxyXG4gIDU2JSB7IGJvcmRlci1yYWRpdXM6IDYxJSAzOSUgNjclIDMzJSAvIDcwJSA1MCUgNTAlIDMwJTsgfSBcclxuICA3MCUgeyBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDM0JSA2NiUgLyA1NiUgNjglIDMyJSA0NCU7IH0gXHJcbiAgODQlIHsgYm9yZGVyLXJhZGl1czogNDYlIDU0JSA1MCUgNTAlIC8gMzUlIDYxJSAzOSUgNjUlOyB9IFxyXG59XHJcblxyXG4ubWVudS1pY29uOmNoZWNrZWQgfiAubmF2IHtcclxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMjAwJTtcclxuICBoZWlnaHQ6IDIwMCU7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDM1MG1zIDcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgIFxyXG4gICAgICAgICAgICAgIHJpZ2h0IDM1MG1zIDcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSxcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0gMjUwbXMgNzAwbXMgZWFzZSxcclxuICAgICAgICAgICAgICB3aWR0aCA3NTBtcyAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLFxyXG4gICAgICAgICAgICAgIGhlaWdodCA3NTBtcyAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xyXG59XHJcblxyXG4ubmF2IHVse1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHotaW5kZXg6IDY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5uYXYgdWwgbGl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XHJcbn1cclxuLm5hdiB1bCBsaTpudGgtY2hpbGQoMSl7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7XHJcbn1cclxuLm5hdiB1bCBsaTpudGgtY2hpbGQoMil7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTUwbXM7XHJcbn1cclxuLm5hdiB1bCBsaTpudGgtY2hpbGQoMyl7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XHJcbn1cclxuLm5hdiB1bCBsaTpudGgtY2hpbGQoNCl7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogNTBtcztcclxufVxyXG4ubmF2IHVsIGxpIGF7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICNlY2VjZWU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcclxufVxyXG4ubmF2IHVsIGxpIGE6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjREQyNDc2O1xyXG59XHJcbi5uYXYgdWwgbGkgYTphZnRlcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgY29udGVudDogJyc7XHJcbiAgaGVpZ2h0OiAydmg7XHJcbiAgbWFyZ2luLXRvcDogLTF2aDtcclxuICB3aWR0aDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM3NDY7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zIGxpbmVhcjtcclxufVxyXG4ubmF2IHVsIGxpIGE6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWVudS1pY29uOmNoZWNrZWQgfiAubmF2ICB1bCBsaSB7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDM1MG1zIGVhc2UsXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIDI1MG1zIGVhc2U7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaTpudGgtY2hpbGQoMSl7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTQwMG1zO1xyXG59XHJcbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpe1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDE0ODBtcztcclxufVxyXG4ubWVudS1pY29uOmNoZWNrZWQgfiAubmF2IHVsIGxpOm50aC1jaGlsZCgzKXtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAxNTYwbXM7XHJcbn1cclxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaTpudGgtY2hpbGQoNCl7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMTY0MG1zO1xyXG59XHJcblxyXG5cclxuXHJcbi5sb2dvIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA2MHB4O1xyXG5cdGxlZnQ6IDUwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ei1pbmRleDogMTE7XHJcblx0dHJhbnNpdGlvbjogYWxsIDI1MG1zIGxpbmVhcjtcclxufVxyXG4ubG9nbyBpbWcge1xyXG5cdGhlaWdodDogMjZweDtcclxuXHR3aWR0aDogYXV0bztcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5tZW51LWljb246Y2hlY2tlZCArIGxhYmVsLFxyXG4gIC5tZW51LWljb246bm90KDpjaGVja2VkKSArIGxhYmVse1xyXG4gICAgcmlnaHQ6IDU1cHg7XHJcbiAgfVxyXG4gIC5sb2dvIHtcclxuICAgIGxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5uYXZ7XHJcbiAgICByaWdodDogMzBweDtcclxuICB9XHJcbiAgLm5hdiB1bCBsaSBhe1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwXCIpO1xuW3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQsXG5bdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTk5OTlweDtcbn1cblxuLm1lbnUtaWNvbjpjaGVja2VkICsgbGFiZWwsXG4ubWVudS1pY29uOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA2M3B4O1xuICByaWdodDogNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm1lbnUtaWNvbjpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxuLm1lbnUtaWNvbjpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgei1pbmRleDogMjA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlY2VjZWU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNlY2VlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItd2lkdGggMTAwbXMgMTUwMG1zIGVhc2UsIHRvcCAxMDBtcyAxNjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBoZWlnaHQgMTAwbXMgMTYwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuXG4ubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbDphZnRlcixcbi5tZW51LWljb246bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMnB4O1xuICB6LWluZGV4OiAyMDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxMDBtcyAxNzUwbXMgZWFzZSwgcmlnaHQgMTAwbXMgMTc1MG1zIGVhc2UsIG1hcmdpbi10b3AgMTAwbXMgZWFzZSwgdHJhbnNmb3JtIDIwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLm1lbnUtaWNvbjpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgdG9wOiAxMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VlO1xuICBib3JkZXItd2lkdGg6IDA7XG4gIHRyYW5zaXRpb246IGJvcmRlci13aWR0aCAxMDBtcyAzNDBtcyBlYXNlLCB0b3AgMTAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBoZWlnaHQgMTAwbXMgMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIDUwMG1zIGVhc2UsIHRyYW5zZm9ybSAyMDBtcyAxNzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuXG4ubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMTAwbXMgZWFzZSwgcmlnaHQgMTAwbXMgZWFzZSwgbWFyZ2luLXRvcCAxMDBtcyA1MDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgMTcwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLm5hdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAzM3B4O1xuICByaWdodDogNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCA4cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1Mzc0NjtcbiAgYW5pbWF0aW9uOiBib3JkZXItdHJhbnNmb3JtIDdzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNpdGlvbjogdG9wIDM1MG1zIDExMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHJpZ2h0IDM1MG1zIDExMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAyNTBtcyAxMTAwbXMgZWFzZSwgd2lkdGggNjUwbXMgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBoZWlnaHQgNjUwbXMgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xufVxuXG5Aa2V5ZnJhbWVzIGJvcmRlci10cmFuc2Zvcm0ge1xuICAwJSwgMTAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNjMlIDM3JSA1NCUgNDYlLzU1JSA0OCUgNTIlIDQ1JTtcbiAgfVxuICAxNCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDQwJSA2MCUgNTQlIDQ2JS80OSUgNjAlIDQwJSA1MSU7XG4gIH1cbiAgMjglIHtcbiAgICBib3JkZXItcmFkaXVzOiA1NCUgNDYlIDM4JSA2MiUvNDklIDcwJSAzMCUgNTElO1xuICB9XG4gIDQyJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNjElIDM5JSA1NSUgNDUlLzYxJSAzOCUgNjIlIDM5JTtcbiAgfVxuICA1NiUge1xuICAgIGJvcmRlci1yYWRpdXM6IDYxJSAzOSUgNjclIDMzJS83MCUgNTAlIDUwJSAzMCU7XG4gIH1cbiAgNzAlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDM0JSA2NiUvNTYlIDY4JSAzMiUgNDQlO1xuICB9XG4gIDg0JSB7XG4gICAgYm9yZGVyLXJhZGl1czogNDYlIDU0JSA1MCUgNTAlLzM1JSA2MSUgMzklIDY1JTtcbiAgfVxufVxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIHRvcDogNTAlO1xuICByaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAyMDAlO1xuICB0cmFuc2l0aW9uOiB0b3AgMzUwbXMgNzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCByaWdodCAzNTBtcyA3MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIHRyYW5zZm9ybSAyNTBtcyA3MDBtcyBlYXNlLCB3aWR0aCA3NTBtcyAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBoZWlnaHQgNzUwbXMgMTAwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcbn1cblxuLm5hdiB1bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICB6LWluZGV4OiA2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLm5hdiB1bCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XG59XG5cbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMjAwbXM7XG59XG5cbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMTUwbXM7XG59XG5cbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMTAwbXM7XG59XG5cbi5uYXYgdWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogNTBtcztcbn1cblxuLm5hdiB1bCBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXdlaWdodDogODAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNlY2VjZWU7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XG59XG5cbi5uYXYgdWwgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNERDI0NzY7XG59XG5cbi5uYXYgdWwgbGkgYTphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJ2aDtcbiAgbWFyZ2luLXRvcDogLTF2aDtcbiAgd2lkdGg6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTM3NDY7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXMgbGluZWFyO1xufVxuXG4ubmF2IHVsIGxpIGE6aG92ZXI6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzUwbXMgZWFzZSwgdHJhbnNmb3JtIDI1MG1zIGVhc2U7XG59XG5cbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMTQwMG1zO1xufVxuXG4ubWVudS1pY29uOmNoZWNrZWQgfiAubmF2IHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDE0ODBtcztcbn1cblxuLm1lbnUtaWNvbjpjaGVja2VkIH4gLm5hdiB1bCBsaTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAxNTYwbXM7XG59XG5cbi5tZW51LWljb246Y2hlY2tlZCB+IC5uYXYgdWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMTY0MG1zO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTE7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBsaW5lYXI7XG59XG5cbi5sb2dvIGltZyB7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWVudS1pY29uOmNoZWNrZWQgKyBsYWJlbCxcbi5tZW51LWljb246bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgICByaWdodDogNTVweDtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG5cbiAgLm5hdiB7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAubmF2IHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overlay-main',
          templateUrl: './overlay-main.component.html',
          styleUrls: ['./overlay-main.component.scss']
        }]
      }], function () {
        return [{
          type: _signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]
        }, {
          type: _travel_service__WEBPACK_IMPORTED_MODULE_3__["TravelService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/overlay/overlay.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/overlay/overlay.component.ts ***!
    \**********************************************/

  /*! exports provided: OverlayComponent */

  /***/
  function srcAppOverlayOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayComponent", function () {
      return OverlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OverlayComponent = /*#__PURE__*/function () {
      function OverlayComponent() {
        _classCallCheck(this, OverlayComponent);
      }

      _createClass(OverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OverlayComponent;
    }();

    OverlayComponent.ɵfac = function OverlayComponent_Factory(t) {
      return new (t || OverlayComponent)();
    };

    OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverlayComponent,
      selectors: [["app-overlay"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar"], [1, "container"], [1, "navbar-header"], ["href", "#", 1, "navbar-brand", 2, "font-family", "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"]],
      template: function OverlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " RideASAP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\np[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  line-height: 1.8em;\n  font-weight: 300;\n  color: #777;\n  margin: 30px 0;\n}\nstrong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\na[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  margin: 30px 0;\n  border-bottom: 1px dashed #ddd;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 50px 0;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  \n  color: #eee !important;\n}\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #eee !important;\n}\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #eee !important;\n}\n[_ngcontent-%COMP%]:-moz-placeholder {\n  \n  color: #eee !important;\n}\n\nnav.navbar[_ngcontent-%COMP%] {\n  background: #FF512F;\n  \n  \n  background: linear-gradient(to right, #DD2476, #FF512F);\n  \n  color: #fff;\n  border-bottom: none;\n  border-radius: 0;\n  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);\n  padding: 15px 0;\n  transition: all 0.5s;\n}\n\nnav.navbar[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n}\nnav.navbar[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]:hover, nav.navbar[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]:focus {\n  color: inherit;\n}\n\nnav.navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #333;\n  border: none;\n  border-radius: 0;\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover, nav.navbar[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:focus {\n  background: #fff;\n  color: #333;\n}\n\nnav.navbar[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%] {\n  border: none;\n}\n\nnav.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%] {\n  border: none;\n}\nnav.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\nnav.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, nav.navbar[_ngcontent-%COMP%]   ul.navbar-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #333;\n  background: #fff;\n}\n\nnav.navbar[_ngcontent-%COMP%]   form.navbar-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border-color: #DF013A;\n  background: none;\n  color: #fff;\n  font-weight: 300;\n}\nnav.navbar[_ngcontent-%COMP%]   form.navbar-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #DF013A;\n  color: #fff;\n  border-color: #DF013A;\n  border-radius: 0;\n  box-shadow: none !important;\n  outline: none;\n}\nnav.navbar[_ngcontent-%COMP%]   form.navbar-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #DF013A;\n}\n\nnav.navbar[_ngcontent-%COMP%]   button.navbar-btn[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 10px;\n  border-color: #DF013A;\n  background: #DF013A;\n  color: #fff;\n}\nnav.navbar[_ngcontent-%COMP%]   button.navbar-btn[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #DF013A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcmxheS9DOlxcVXNlcnNcXGFkbWluXFxJQk1cXFJpZGVBU0FQL3NyY1xcYXBwXFxvdmVybGF5XFxvdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdXLDZFQUFBO0FBSFg7OzhEQUFBO0FBS0c7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0FQO0FER0c7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNBUDtBREdHO0VBR0ksb0JBQUE7QUNBUDtBREdHO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNBUDtBREdHO0VBQ0ksZUFBQTtBQ0FQO0FER0c7RUFBOEIsd0JBQUE7RUFDNUIsc0JBQUE7QUNDTDtBRENHO0VBQXFCLGdCQUFBO0VBQ25CLHNCQUFBO0FDR0w7QURERztFQUF5QixXQUFBO0VBQ3ZCLHNCQUFBO0FDS0w7QURIRztFQUFvQixnQkFBQTtFQUNsQixzQkFBQTtBQ09MO0FESEc7OzhEQUFBO0FBR0E7RUFDQyxtQkFBQTtFQUFzQiw4QkFBQTtFQUM0QywrQkFBQTtFQUNsRSx1REFBQTtFQUF5RCxxRUFBQTtFQUV0RCxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUdBLG9CQUFBO0FDUVA7QURMRyxpQkFBQTtBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDUVA7QUROTzs7RUFFSSxjQUFBO0FDU1g7QURMRyxrQkFBQTtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUVA7QUROTzs7RUFFSSxnQkFBQTtFQUNBLFdBQUE7QUNTWDtBRE5HLDZCQUFBO0FBQ0E7RUFDSSxZQUFBO0FDU1A7QURORyxpQkFBQTtBQUNBO0VBQ0ksWUFBQTtBQ1NQO0FETkc7RUFDSSxXQUFBO0FDU1A7QURQTzs7RUFFSSxXQUFBO0VBQ0EsZ0JBQUE7QUNVWDtBRExHLGdCQUFBO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNRUDtBRExHO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ1FQO0FETk87RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNTWDtBRE5HLGtCQUFBO0FBQ0E7RUFDTSxZQUFBO0VBQ0YsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1NQO0FEUE87RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNVWCIsImZpbGUiOiJzcmMvYXBwL292ZXJsYXkvb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBHZW5lcmFsIERlbW8gU3R5bGVzIFtub3QgcmVsYXRlZCB0byBuYXZiYXJdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICBAaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xyXG4gXHJcbiAgIHAge1xyXG4gICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICBjb2xvcjogIzc3NztcclxuICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICB9XHJcbiAgIFxyXG4gICBzdHJvbmcge1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICB9XHJcbiAgIFxyXG4gICBhIHtcclxuICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICB9XHJcbiAgIFxyXG4gICAubGluZSB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb250ZW50IHtcclxuICAgICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgfVxyXG4gICBcclxuICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogQ2hyb21lL09wZXJhL1NhZmFyaSAqL1xyXG4gICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICAgOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cclxuICAgICBjb2xvcjogI2VlZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJRSAxMCsgKi9cclxuICAgICBjb2xvcjogI2VlZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIDotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOC0gKi9cclxuICAgICBjb2xvcjogI2VlZSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIFxyXG4gICBcclxuICAgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgIE5hdmJhciBTdHlsZXNcclxuICAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgIG5hdi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGNTEyRjsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjREQyNDc2LCAjRkY1MTJGKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICBcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgfVxyXG4gICBcclxuICAgLyogTmF2YmFyIEJyYW5kICovXHJcbiAgIG5hdi5uYXZiYXIgYS5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICB9XHJcbiAgICAgICBuYXYubmF2YmFyIGEubmF2YmFyLWJyYW5kOmhvdmVyLFxyXG4gICAgICAgbmF2Lm5hdmJhciBhLm5hdmJhci1icmFuZDpmb2N1cyB7XHJcbiAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICB9XHJcbiAgIFxyXG4gICBcclxuICAgLyogVG9nZ2xlIEJ1dHRvbiAqL1xyXG4gICBuYXYubmF2YmFyIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgIH1cclxuICAgICAgIG5hdi5uYXZiYXIgLm5hdmJhci10b2dnbGU6aG92ZXIsXHJcbiAgICAgICBuYXYubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgfVxyXG4gICBcclxuICAgLyogTmF2YmFyIENvbXBvbmVudHMgSG9sZGVyICovXHJcbiAgIG5hdi5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qIE5hdmJhciBsaW5rcyAqL1xyXG4gICBuYXYubmF2YmFyIHVsLm5hdmJhci1uYXYge1xyXG4gICAgICAgYm9yZGVyOiBub25lO1xyXG4gICB9XHJcbiAgIFxyXG4gICBuYXYubmF2YmFyIHVsLm5hdmJhci1uYXYgYSB7XHJcbiAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgfVxyXG4gICAgICAgbmF2Lm5hdmJhciB1bC5uYXZiYXItbmF2IGE6aG92ZXIsXHJcbiAgICAgICBuYXYubmF2YmFyIHVsLm5hdmJhci1uYXYgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgIH1cclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgLyogTmF2YmFyIEZvcm0gKi9cclxuICAgbmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGlucHV0IHtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDAgO1xyXG4gICAgICAgYm9yZGVyLWNvbG9yOiAjREYwMTNBO1xyXG4gICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgfVxyXG4gICBcclxuICAgbmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGJ1dHRvbiB7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjREYwMTNBO1xyXG4gICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICBib3JkZXItY29sb3I6ICNERjAxM0E7XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgfVxyXG4gICAgICAgbmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICBjb2xvcjogI0RGMDEzQTtcclxuICAgICAgIH1cclxuICAgXHJcbiAgIC8qIE5hdmJhciBCdXR0b24gKi9cclxuICAgbmF2Lm5hdmJhciBidXR0b24ubmF2YmFyLWJ0biB7XHJcbiAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICBib3JkZXItY29sb3I6ICNERjAxM0E7XHJcbiAgICAgICBiYWNrZ3JvdW5kOiAjREYwMTNBO1xyXG4gICAgICAgY29sb3I6ICNmZmY7XHJcbiAgIH1cclxuICAgICAgIG5hdi5uYXZiYXIgYnV0dG9uLm5hdmJhci1idG46aG92ZXIge1xyXG4gICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgY29sb3I6ICNERjAxM0E7XHJcbiAgICAgICB9XHJcbiAgICIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgR2VuZXJhbCBEZW1vIFN0eWxlcyBbbm90IHJlbGF0ZWQgdG8gbmF2YmFyXVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5AaW1wb3J0IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiO1xucCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjhlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM3Nzc7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuYSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogMzBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUvT3BlcmEvU2FmYXJpICovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIC8qIEZpcmVmb3ggMTkrICovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJRSAxMCsgKi9cbiAgY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbn1cblxuOi1tb3otcGxhY2Vob2xkZXIge1xuICAvKiBGaXJlZm94IDE4LSAqL1xuICBjb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgIE5hdmJhciBTdHlsZXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xubmF2Lm5hdmJhciB7XG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiAycHggMnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4vKiBOYXZiYXIgQnJhbmQgKi9cbm5hdi5uYXZiYXIgYS5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxubmF2Lm5hdmJhciBhLm5hdmJhci1icmFuZDpob3Zlcixcbm5hdi5uYXZiYXIgYS5uYXZiYXItYnJhbmQ6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLyogVG9nZ2xlIEJ1dHRvbiAqL1xubmF2Lm5hdmJhciAubmF2YmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbm5hdi5uYXZiYXIgLm5hdmJhci10b2dnbGU6aG92ZXIsXG5uYXYubmF2YmFyIC5uYXZiYXItdG9nZ2xlOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIE5hdmJhciBDb21wb25lbnRzIEhvbGRlciAqL1xubmF2Lm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBOYXZiYXIgbGlua3MgKi9cbm5hdi5uYXZiYXIgdWwubmF2YmFyLW5hdiB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubmF2Lm5hdmJhciB1bC5uYXZiYXItbmF2IGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxubmF2Lm5hdmJhciB1bC5uYXZiYXItbmF2IGE6aG92ZXIsXG5uYXYubmF2YmFyIHVsLm5hdmJhci1uYXYgYTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vKiBOYXZiYXIgRm9ybSAqL1xubmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWNvbG9yOiAjREYwMTNBO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxubmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNERjAxM0E7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNERjAxM0E7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubmF2Lm5hdmJhciBmb3JtLm5hdmJhci1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjREYwMTNBO1xufVxuXG4vKiBOYXZiYXIgQnV0dG9uICovXG5uYXYubmF2YmFyIGJ1dHRvbi5uYXZiYXItYnRuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItY29sb3I6ICNERjAxM0E7XG4gIGJhY2tncm91bmQ6ICNERjAxM0E7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5uYXYubmF2YmFyIGJ1dHRvbi5uYXZiYXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNERjAxM0E7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-overlay',
          templateUrl: './overlay.component.html',
          styleUrls: ['./overlay.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment/payment.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/payment/payment.component.ts ***!
    \**********************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcAppPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel.service.ts");
    /* harmony import */


    var angularx_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularx-qrcode */
    "./node_modules/angularx-qrcode/__ivy_ngcc__/fesm2015/angularx-qrcode.js");

    var PaymentComponent = /*#__PURE__*/function () {
      function PaymentComponent(travel) {
        _classCallCheck(this, PaymentComponent);

        this.travel = travel;
        this.hashcode = this.travel.hashqr;
        this.src = this.travel.source;
        this.dest = this.travel.destination;
        this.tprice = this.travel.total_price;
        this.arrivalTime = this.travel.arrtime;
        this.name = this.travel.name;
        this.rtime = this.travel.reachTime;
        this.tdist = this.travel.distance;
        this.ttime = this.travel.tottime;
      }

      _createClass(PaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentComponent;
    }();

    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
      return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]));
    };

    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentComponent,
      selectors: [["app-payment"]],
      decls: 60,
      vars: 11,
      consts: [[1, "travel--general"], [1, "travel--TimeInfo"], ["ng-app", "", "ng-controller", "Ctrl"], [1, "travel--PassInfo"], [1, "travel--qrcode"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "area"], [1, "circles"]],
      template: function PaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Ticket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Arrival Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reaching Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Total-time:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Passenger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Price:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total Distance:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "qrcode", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.src);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.arrivalTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rtime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ttime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tprice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tdist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", ctx.hashcode)("width", 180)("errorCorrectionLevel", "M");
        }
      },
      directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_2__["QRCodeComponent"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:400,600\");\nheader[_ngcontent-%COMP%] {\n  background: #FF512F;\n  \n  \n  background: linear-gradient(to right, #DD2476, #FF512F);\n  \n}\nmain[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  letter-spacing: 0.75px;\n  color: #000000;\n  font-size: 20px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #333;\n  font-family: Tahoma, Arial, sans-serif;\n}\nh1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 2em;\n}\nh2[_ngcontent-%COMP%] {\n  color: #DD2476;\n  font-size: 2rem;\n}\nh4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 1.5rem;\n}\nh6[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\np[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  max-height: 100%;\n}\nsection[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: white;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n}\n@media (max-width: 500px) {\n  section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child, header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    padding: 10px 10px 10px 0;\n  }\n}\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 65px;\n}\n.travel--general[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n}\n.travel--general[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type, .travel--general[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type {\n  flex: 150%;\n}\n.travel--general[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  padding: 10px 10px;\n}\n.travel--qrcode[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  height: 30vh;\n}\n.travel--qrcode[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n  object-fit: contain;\n  font-family: \"object-fit: contain\";\n  height: 100%;\n}\n.extra--meteo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type {\n  font-size: 0.8rem;\n}\n.extra--image[_ngcontent-%COMP%] {\n  height: 100%;\n  display: block;\n  padding: 0;\n}\n.extra--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit: cover;\n  object-fit: cover;\n  font-family: \"object-fit: cover\";\n  max-height: 100%;\n  min-width: 100%;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: #ff4500;\n  color: #f9ebd2;\n  justify-content: flex-end;\n  align-items: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  flex: 1 90%;\n}\nheader[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #f9ebd2;\n}\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1 10%;\n}\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 0;\n}\n@media (max-width: 500px) {\n  section[_ngcontent-%COMP%], header[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n  }\n\n  header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    min-height: inherit;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    display: -ms-flex;\n    display: flex;\n    align-items: center;\n  }\n\n  .travel--general[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type {\n    text-align: left;\n    padding-left: 0;\n  }\n\n  .travel--general[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-of-type {\n    text-align: right;\n    padding-right: 0;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0;\n  }\n\n  .extra--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: -webkit-fill-available;\n  }\n}\n@media (min-width: 501px) {\n  section[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type {\n    padding: 10px 20px;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    justify-content: space-around;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    max-width: 30%;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0;\n  }\n}\n@media (min-width: 1024px) {\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  display: grid;\n  display: block\\9 ;\n  max-width: 500px\\9 ;\n  margin: 0 auto;\n}\nheader[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0 0;\n}\n@media (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n.travel--qrcode[_ngcontent-%COMP%] {\n  border-radius: 0 0 10px 0;\n}\n@media (max-width: 500px) {\n  .travel--qrcode[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n}\n.travel--general[_ngcontent-%COMP%] {\n  border-radius: 0 0 0 10px;\n}\n.extra--meteo[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.extra--image[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (min-width: 501px) and (max-width: 1023px) {\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    border-radius: 0 0 0 10px;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n@media (min-width: 501px) {\n  main[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    height: 100%;\n    padding: 0;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    min-height: 100vh;\n  }\n}\n@supports (display: grid) {\n  @media (min-width: 501px) {\n    .travel--qrcode[_ngcontent-%COMP%] {\n      height: initial;\n    }\n  }\n}\n@supports not (display: grid) {\n  main[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    max-width: 500px;\n    grid-gap: 0 0;\n    display: block;\n  }\n\n  header[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  @media (max-width: 500px) {\n    header[_ngcontent-%COMP%] {\n      border-radius: 0;\n    }\n  }\n  .travel--qrcode[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  @media (max-width: 500px) {\n    .travel--qrcode[_ngcontent-%COMP%] {\n      border-radius: 0;\n    }\n  }\n  .travel--general[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    min-height: inherit;\n    display: block;\n  }\n\n  @media (min-width: 501px) and (max-width: 1023px) {\n    .travel--TimeInfo[_ngcontent-%COMP%] {\n      border-radius: 0;\n    }\n\n    .travel--general[_ngcontent-%COMP%] {\n      border-radius: 0;\n    }\n\n    .travel--qrcode[_ngcontent-%COMP%] {\n      justify-content: center;\n    }\n  }\n  @media (min-width: 501px) {\n    main[_ngcontent-%COMP%] {\n      height: inherit;\n    }\n\n    .travel--qrcode[_ngcontent-%COMP%] {\n      height: initial;\n    }\n\n    .extra--image[_ngcontent-%COMP%] {\n      min-height: inherit;\n    }\n  }\n}\n.extra--meteo[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n@media (min-width: 501px) {\n  .extra--meteo[_ngcontent-%COMP%] {\n    justify-self: center;\n  }\n}\n@media (max-width: 500px) {\n  main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  header[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n    grid-row: 1/span 1;\n  }\n\n  .travel--general[_ngcontent-%COMP%], .travel--TimeInfo[_ngcontent-%COMP%], .travel--PassInfo[_ngcontent-%COMP%], .travel--qrcode[_ngcontent-%COMP%] {\n    grid-column: 1/span 2;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    grid-row: 2/span 1;\n  }\n\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    grid-row: 3/span 1;\n  }\n\n  .travel--PassInfo[_ngcontent-%COMP%] {\n    grid-row: 4/span 1;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    grid-row: 5/span 1;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%], .extra--image[_ngcontent-%COMP%] {\n    grid-row: 6/span 1;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    grid-column: 1/span 1;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    grid-column: 2/span 1;\n  }\n}\n@media (min-width: 501px) and (max-width: 1023px) {\n  main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr repeat(3, minmax(100px, 200px)) 1fr;\n    grid-template-rows: 1fr 60px repeat(3, 75px) 10vh auto 1fr;\n  }\n\n  header[_ngcontent-%COMP%] {\n    grid-column: 2/span 3;\n    grid-row: 2/span 1;\n    z-index: 2;\n  }\n\n  .travel--PassInfo[_ngcontent-%COMP%], .travel--qrcode[_ngcontent-%COMP%] {\n    z-index: 2;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    grid-column: 2/span 2;\n    grid-row: 3/span 1;\n    z-index: 3;\n  }\n\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    grid-column: 2/span 2;\n    grid-row: 5/span 1;\n    z-index: 3;\n  }\n\n  .travel--PassInfo[_ngcontent-%COMP%] {\n    grid-column: 2/span 2;\n    grid-row: 4/span 1;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    grid-column: 4/span 1;\n    grid-row: 3/span 3;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    grid-column: 2/span 3;\n    grid-row: 7/span 1;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    grid-column: 1/span 7;\n    grid-row: 1/span 8;\n  }\n}\n@media (min-width: 1024px) {\n  main[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr repeat(4, 150px) 250px 1fr;\n    grid-template-rows: 1fr 60px repeat(2, 100px) 0.5fr auto 1fr;\n  }\n\n  header[_ngcontent-%COMP%] {\n    grid-column: 2/span 5;\n    grid-row: 2/span 1;\n    z-index: 2;\n  }\n\n  .travel--general[_ngcontent-%COMP%], .travel--TimeInfo[_ngcontent-%COMP%], .travel--PassInfo[_ngcontent-%COMP%], .travel--qrcode[_ngcontent-%COMP%] {\n    z-index: 2;\n  }\n\n  .travel--general[_ngcontent-%COMP%] {\n    grid-column: 2/span 2;\n    grid-row: 3/span 2;\n  }\n\n  .travel--TimeInfo[_ngcontent-%COMP%] {\n    grid-column: 4/span 2;\n    grid-row: 3/span 1;\n  }\n\n  .travel--PassInfo[_ngcontent-%COMP%] {\n    grid-column: 4/span 2;\n    grid-row: 4/span 1;\n  }\n\n  .travel--qrcode[_ngcontent-%COMP%] {\n    grid-column: 6/span 1;\n    grid-row: 3/span 2;\n  }\n\n  .extra--meteo[_ngcontent-%COMP%] {\n    grid-column: 2/span 5;\n    grid-row: 6/span 1;\n  }\n\n  .extra--image[_ngcontent-%COMP%] {\n    grid-column: 1/span 7;\n    grid-row: 1/span 7;\n    z-index: 1;\n  }\n}\n.area[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.circles[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-animation: animate 25s linear infinite;\n          animation: animate 25s linear infinite;\n  bottom: -150px;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 25%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 10%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 70%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 18s;\n          animation-duration: 18s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 65%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 75%;\n  width: 110px;\n  height: 110px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 35%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 50%;\n  width: 25px;\n  height: 25px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 45s;\n          animation-duration: 45s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 20%;\n  width: 15px;\n  height: 15px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 35s;\n          animation-duration: 35s;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 85%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 11s;\n          animation-duration: 11s;\n}\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC9DOlxcVXNlcnNcXGFkbWluXFxJQk1cXFJpZGVBU0FQL3NyY1xcYXBwXFxwYXltZW50XFxwYXltZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFDUjtFQUNFLG1CQUFBO0VBQXNCLDhCQUFBO0VBQzRDLCtCQUFBO0VBQ2xFLHVEQUFBO0VBQXlELHFFQUFBO0FDSTNEO0FERkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtBQ0lGO0FEREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FDSUY7QUREQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNJRjtBRERBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSUY7QUREQTtFQUNFLGlCQUFBO0FDSUY7QUREQTtFQUNFLG1CQUFBO0FDSUY7QUREQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNJRjtBRERBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDSUY7QURGQTtFQUNFLGtCQUFBO0FDS0Y7QURIQTtFQUNFO0lBQ0UseUJBQUE7RUNNRjtBQUNGO0FESEE7RUFDRSxlQUFBO0FDS0Y7QURGQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNLRjtBREhBO0VBQ0UsVUFBQTtBQ01GO0FESkE7RUFDRSxrQkFBQTtBQ09GO0FETEE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1FGO0FETkE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0FDU0Y7QUROQTtFQUNFLGlCQUFBO0FDU0Y7QURQQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ1VGO0FEUkE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNXRjtBRFJBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ1dGO0FEVEE7RUFDRSxXQUFBO0FDWUY7QURWQTtFQUNFLGNBQUE7QUNhRjtBRFhBO0VBQ0UsV0FBQTtBQ2NGO0FEWkE7RUFDRSxlQUFBO0FDZUY7QURaQTtFQUNFO0lBQ0Usa0JBQUE7RUNlRjs7RURaQTtJQUNFLGVBQUE7RUNlRjs7RURaQTtJQUNFLG1CQUFBO0VDZUY7O0VEWkE7SUFFRSxpQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQ2VGOztFRGJBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDZ0JGOztFRGRBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtFQ2lCRjs7RURkQTtJQUNFLHNCQUFBO0VDaUJGOztFRGZBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNrQkY7O0VEaEJBO0lBQ0UsWUFBQTtJQUNBLGtDQUFBO0VDbUJGO0FBQ0Y7QURqQkE7RUFDRTtJQUNFLGtCQUFBO0VDbUJGOztFRGhCQTtJQUNFLGlCQUFBO0VDbUJGOztFRGhCQTtJQUNFLGNBQUE7RUNtQkY7O0VEaEJBO0lBQ0UsZUFBQTtFQ21CRjs7RURoQkE7SUFDRSw2QkFBQTtFQ21CRjs7RURqQkE7SUFDRSxjQUFBO0VDb0JGOztFRGxCQTtJQUNFLGdCQUFBO0VDcUJGO0FBQ0Y7QURuQkE7RUFDRTtJQUNFLGlCQUFBO0VDcUJGOztFRGxCQTtJQUNFLGVBQUE7RUNxQkY7QUFDRjtBRG5CQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3FCRjtBRGxCQTtFQUNFLDRCQUFBO0FDcUJGO0FEbkJBO0VBQ0U7SUFDRSxnQkFBQTtFQ3NCRjtBQUNGO0FEbkJBO0VBQ0UseUJBQUE7QUNxQkY7QURuQkE7RUFDRTtJQUNFLGdCQUFBO0VDc0JGO0FBQ0Y7QURwQkE7RUFDRSx5QkFBQTtBQ3NCRjtBRG5CQTtFQUNFLG1CQUFBO0FDc0JGO0FEcEJBO0VBQ0UsYUFBQTtBQ3VCRjtBRHBCQTtFQUNFO0lBQ0UseUJBQUE7RUN1QkY7O0VEckJBO0lBQ0UsZ0JBQUE7RUN3QkY7O0VEdEJBO0lBQ0UseUJBQUE7RUN5QkY7QUFDRjtBRHZCQTtFQUNFO0lBQ0UsYUFBQTtFQ3lCRjs7RUR0QkE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ3lCRjs7RUR0QkE7SUFDRSxpQkFBQTtFQ3lCRjtBQUNGO0FEdkJBO0VBQ0U7SUFDRTtNQUNFLGVBQUE7SUN5QkY7RUFDRjtBQUNGO0FEdkJBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ3lCRjs7RUR0QkE7SUFDRSxnQkFBQTtFQ3lCRjs7RUR2QkE7SUFDRTtNQUNFLGdCQUFBO0lDMEJGO0VBQ0Y7RUR2QkE7SUFDRSxnQkFBQTtFQ3lCRjs7RUR2QkE7SUFDRTtNQUNFLGdCQUFBO0lDMEJGO0VBQ0Y7RUR4QkE7SUFDRSxnQkFBQTtFQzBCRjs7RUR2QkE7SUFDRSxnQkFBQTtFQzBCRjs7RUR4QkE7SUFDRSxtQkFBQTtJQUNBLGNBQUE7RUMyQkY7O0VEeEJBO0lBQ0U7TUFDRSxnQkFBQTtJQzJCRjs7SUR6QkE7TUFDRSxnQkFBQTtJQzRCRjs7SUQxQkE7TUFDRSx1QkFBQTtJQzZCRjtFQUNGO0VEM0JBO0lBQ0U7TUFDRSxlQUFBO0lDNkJGOztJRDFCQTtNQUNFLGVBQUE7SUM2QkY7O0lEMUJBO01BQ0UsbUJBQUE7SUM2QkY7RUFDRjtBQUNGO0FEM0JBO0VBQ0UsVUFBQTtBQzZCRjtBRDNCQTtFQUNFO0lBQ0Usb0JBQUE7RUM4QkY7QUFDRjtBRDNCQTtFQUNFO0lBQ0UsOEJBQUE7RUM2QkY7O0VEMUJBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtFQzZCRjs7RUQxQkE7SUFDRSxxQkFBQTtFQzZCRjs7RUQzQkE7SUFDRSxrQkFBQTtFQzhCRjs7RUQ1QkE7SUFDRSxrQkFBQTtFQytCRjs7RUQ3QkE7SUFDRSxrQkFBQTtFQ2dDRjs7RUQ5QkE7SUFDRSxrQkFBQTtFQ2lDRjs7RUQ5QkE7SUFDRSxrQkFBQTtFQ2lDRjs7RUQvQkE7SUFDRSxxQkFBQTtFQ2tDRjs7RURoQ0E7SUFDRSxxQkFBQTtFQ21DRjtBQUNGO0FEakNBO0VBQ0U7SUFDRSw4REFBQTtJQUNBLDBEQUFBO0VDbUNGOztFRGhDQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDbUNGOztFRGhDQTtJQUNFLFVBQUE7RUNtQ0Y7O0VEakNBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNvQ0Y7O0VEbENBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNxQ0Y7O0VEbkNBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtFQ3NDRjs7RURwQ0E7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VDdUNGOztFRHBDQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUN1Q0Y7O0VEckNBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtFQ3dDRjtBQUNGO0FEdENBO0VBQ0U7SUFDRSxxREFBQTtJQUNBLDREQUFBO0VDd0NGOztFRHJDQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDd0NGOztFRHJDQTtJQUNFLFVBQUE7RUN3Q0Y7O0VEdENBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtFQ3lDRjs7RUR2Q0E7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VDMENGOztFRHhDQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUMyQ0Y7O0VEekNBO0lBQ0UscUJBQUE7SUFDQSxrQkFBQTtFQzRDRjs7RUR6Q0E7SUFDRSxxQkFBQTtJQUNBLGtCQUFBO0VDNENGOztFRDFDQTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VDNkNGO0FBQ0Y7QUR6Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzJDRjtBRHhDQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzJDRjtBRHhDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO1VBQUEsc0NBQUE7RUFDQSxjQUFBO0FDMkNGO0FEdkNBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQzBDRjtBRHRDQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDeUNGO0FEdENBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ3lDRjtBRHRDQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDeUNGO0FEdENBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ3lDRjtBRHRDQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUN5Q0Y7QUR0Q0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDeUNGO0FEdENBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUN5Q0Y7QUR0Q0E7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ3lDRjtBRHRDQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDeUNGO0FEdENBO0VBRUU7SUFDSSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtFQ3dDSjtFRHJDQTtJQUNJLDZDQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDdUNKO0FBQ0Y7QURuREE7RUFFRTtJQUNJLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDd0NKO0VEckNBO0lBQ0ksNkNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUN1Q0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMFwiKTtcclxuaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovICAgIFxyXG59XHJcbm1haW4ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWViZDI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiAjREQyNDc2O1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuaDQsIGg1IHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuaDYge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG5wIHtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc2VjdGlvbiwgaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbnNlY3Rpb24gPiBkaXYsIGhlYWRlciA+IGRpdiB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIHNlY3Rpb24gPiBkaXY6Zmlyc3QtY2hpbGQsIGhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuaGVhZGVyID4gZGl2IHtcclxuICBtaW4td2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbi50cmF2ZWwtLWdlbmVyYWwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50cmF2ZWwtLWdlbmVyYWwgZGl2OmZpcnN0LW9mLXR5cGUsIC50cmF2ZWwtLWdlbmVyYWwgZGl2Omxhc3Qtb2YtdHlwZSB7XHJcbiAgZmxleDogMTUwJTtcclxufVxyXG4udHJhdmVsLS1nZW5lcmFsIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi50cmF2ZWwtLXFyY29kZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLnRyYXZlbC0tcXJjb2RlIGltZyB7XHJcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZvbnQtZmFtaWx5OiBcIm9iamVjdC1maXQ6IGNvbnRhaW5cIjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5leHRyYS0tbWV0ZW8gcDpsYXN0LW9mLXR5cGUge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi5leHRyYS0taW1hZ2Uge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5leHRyYS0taW1hZ2UgaW1nIHtcclxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBmb250LWZhbWlseTogXCJvYmplY3QtZml0OiBjb3ZlclwiO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQ1MDA7XHJcbiAgY29sb3I6ICNmOWViZDI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmhlYWRlciBoMSB7XHJcbiAgZmxleDogMSA5MCU7XHJcbn1cclxuaGVhZGVyIGg1IHtcclxuICBjb2xvcjogI2Y5ZWJkMjtcclxufVxyXG5oZWFkZXIgPiBkaXYge1xyXG4gIGZsZXg6IDEgMTAlO1xyXG59XHJcbmhlYWRlciA+IGRpdjpmaXJzdC1vZi10eXBlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIHNlY3Rpb24sIGhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmV4dHJhLS1pbWFnZSB7XHJcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gIH1cclxuXHJcbiAgLnRyYXZlbC0tZ2VuZXJhbCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAudHJhdmVsLS1nZW5lcmFsIGRpdjpmaXJzdC1vZi10eXBlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLWdlbmVyYWwgZGl2Omxhc3Qtb2YtdHlwZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuZXh0cmEtLW1ldGVvIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5leHRyYS0tbWV0ZW8gPiBkaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5leHRyYS0taW1hZ2UgaW1nIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xyXG4gIHNlY3Rpb24sIGgxLCBoZWFkZXIgZGl2OmZpcnN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRyYXZlbC0tZ2VuZXJhbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRyYXZlbC0tcXJjb2RlIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG4gIC5leHRyYS0tbWV0ZW8ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5leHRyYS0tbWV0ZW8gPiBkaXYge1xyXG4gICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5leHRyYS0tbWV0ZW8gPiBkaXY6bGFzdC1vZi10eXBlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAudHJhdmVsLS1UaW1lSW5mbyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG59XHJcbm1haW4ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZGlzcGxheTogYmxvY2tcXDk7XHJcbiAgbWF4LXdpZHRoOiA1MDBweFxcOTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIGhlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRyYXZlbC0tcXJjb2RlIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG4udHJhdmVsLS1nZW5lcmFsIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xyXG59XHJcblxyXG4uZXh0cmEtLW1ldGVvIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5leHRyYS0taW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDEwcHg7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLWdlbmVyYWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgLnRyYXZlbC0tcXJjb2RlIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xyXG4gIG1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmV4dHJhLS1pbWFnZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbn1cclxuQHN1cHBvcnRzIChkaXNwbGF5OiBncmlkKSB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XHJcbiAgICAudHJhdmVsLS1xcmNvZGUge1xyXG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBzdXBwb3J0cyBub3QgKGRpc3BsYXk6IGdyaWQpIHtcclxuICBtYWluIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGdyaWQtZ2FwOiAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGhlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLS1xcmNvZGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAudHJhdmVsLS1xcmNvZGUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAudHJhdmVsLS1nZW5lcmFsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG5cclxuICAuZXh0cmEtLW1ldGVvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIC5leHRyYS0taW1hZ2Uge1xyXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XHJcbiAgICAudHJhdmVsLS1UaW1lSW5mbyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAudHJhdmVsLS1nZW5lcmFsIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICAgIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIHtcclxuICAgIG1haW4ge1xyXG4gICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyYXZlbC0tcXJjb2RlIHtcclxuICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHRyYS0taW1hZ2Uge1xyXG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uZXh0cmEtLW1ldGVvIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xyXG4gIC5leHRyYS0tbWV0ZW8ge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBtYWluIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyICAxZnI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMTtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtLWdlbmVyYWwsIC50cmF2ZWwtLVRpbWVJbmZvLCAudHJhdmVsLS1QYXNzSW5mbywgLnRyYXZlbC0tcXJjb2RlIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xyXG4gIH1cclxuICAudHJhdmVsLS1nZW5lcmFsIHtcclxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAxO1xyXG4gIH1cclxuICAudHJhdmVsLS1UaW1lSW5mbyB7XHJcbiAgICBncmlkLXJvdzogMyAvIHNwYW4gMTtcclxuICB9XHJcbiAgLnRyYXZlbC0tUGFzc0luZm8ge1xyXG4gICAgZ3JpZC1yb3c6IDQgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICBncmlkLXJvdzogNSAvIHNwYW4gMTtcclxuICB9XHJcblxyXG4gIC5leHRyYS0tbWV0ZW8sIC5leHRyYS0taW1hZ2Uge1xyXG4gICAgZ3JpZC1yb3c6IDYgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC5leHRyYS0tbWV0ZW8ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC5leHRyYS0taW1hZ2Uge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xyXG4gIG1haW4ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIG1pbm1heCgxMDBweCwgMjAwcHgpKSAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2MHB4IHJlcGVhdCgzLCA3NXB4KSAxMHZoIGF1dG8gMWZyO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xyXG4gICAgZ3JpZC1yb3c6IDIgLyBzcGFuIDE7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnRyYXZlbC0tUGFzc0luZm8sIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAudHJhdmVsLS1nZW5lcmFsIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuICAudHJhdmVsLS1UaW1lSW5mbyB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcclxuICAgIGdyaWQtcm93OiA1IC8gc3BhbiAxO1xyXG4gICAgei1pbmRleDogMztcclxuICB9XHJcbiAgLnRyYXZlbC0tUGFzc0luZm8ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XHJcbiAgICBncmlkLXJvdzogNCAvIHNwYW4gMTtcclxuICB9XHJcbiAgLnRyYXZlbC0tcXJjb2RlIHtcclxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAxO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDM7XHJcbiAgfVxyXG5cclxuICAuZXh0cmEtLW1ldGVvIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAzO1xyXG4gICAgZ3JpZC1yb3c6IDcgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC5leHRyYS0taW1hZ2Uge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDc7XHJcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gODtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIG1haW4ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDQsIDE1MHB4KSAyNTBweCAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2MHB4IHJlcGVhdCgyLCAxMDBweCkgMC41ZnIgYXV0byAxZnI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDU7XHJcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLS1nZW5lcmFsLCAudHJhdmVsLS1UaW1lSW5mbywgLnRyYXZlbC0tUGFzc0luZm8sIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICAudHJhdmVsLS1nZW5lcmFsIHtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDI7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcclxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IDMgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLVBhc3NJbmZvIHtcclxuICAgIGdyaWQtY29sdW1uOiA0IC8gc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IDQgLyBzcGFuIDE7XHJcbiAgfVxyXG4gIC50cmF2ZWwtLXFyY29kZSB7XHJcbiAgICBncmlkLWNvbHVtbjogNiAvIHNwYW4gMTtcclxuICAgIGdyaWQtcm93OiAzIC8gc3BhbiAyO1xyXG4gIH1cclxuXHJcbiAgLmV4dHJhLS1tZXRlbyB7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIHNwYW4gNTtcclxuICAgIGdyaWQtcm93OiA2L3NwYW4gMTtcclxuICB9XHJcbiAgLmV4dHJhLS1pbWFnZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gNztcclxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiA3O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbn1cclxuLy8gICBEeW5hbWljIGJnXHJcbiBcclxuLmFyZWF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5jaXJjbGVze1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGJvdHRvbTogLTE1MHB4O1xyXG4gIFxyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMSl7XHJcbiAgbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG59XHJcblxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDIpe1xyXG4gIGxlZnQ6IDEwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEycztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDMpe1xyXG4gIGxlZnQ6IDcwJTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDQpe1xyXG4gIGxlZnQ6IDQwJTtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDE4cztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpe1xyXG4gIGxlZnQ6IDY1JTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDYpe1xyXG4gIGxlZnQ6IDc1JTtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNyl7XHJcbiAgbGVmdDogMzUlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogN3M7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KXtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNDVzO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOSl7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzVzO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMTApe1xyXG4gIGxlZnQ6IDg1JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMTFzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG5cclxuICAwJXtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICB9XHJcblxyXG4gIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDYwMFwiKTtcbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNGRjUxMkY7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNERDI0NzYsICNGRjUxMkYpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbm1haW4ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuaDIge1xuICBjb2xvcjogI0REMjQ3NjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oNCwgaDUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG5cbnAge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuc2VjdGlvbiwgaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnNlY3Rpb24gPiBkaXYsIGhlYWRlciA+IGRpdiB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIHNlY3Rpb24gPiBkaXY6Zmlyc3QtY2hpbGQsIGhlYWRlciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcbiAgfVxufVxuaGVhZGVyID4gZGl2IHtcbiAgbWluLXdpZHRoOiA2NXB4O1xufVxuXG4udHJhdmVsLS1nZW5lcmFsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHJhdmVsLS1nZW5lcmFsIGRpdjpmaXJzdC1vZi10eXBlLCAudHJhdmVsLS1nZW5lcmFsIGRpdjpsYXN0LW9mLXR5cGUge1xuICBmbGV4OiAxNTAlO1xufVxuXG4udHJhdmVsLS1nZW5lcmFsIGRpdjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLnRyYXZlbC0tcXJjb2RlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzB2aDtcbn1cblxuLnRyYXZlbC0tcXJjb2RlIGltZyB7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGZvbnQtZmFtaWx5OiBcIm9iamVjdC1maXQ6IGNvbnRhaW5cIjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZXh0cmEtLW1ldGVvIHA6bGFzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5leHRyYS0taW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZXh0cmEtLWltYWdlIGltZyB7XG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZm9udC1mYW1pbHk6IFwib2JqZWN0LWZpdDogY292ZXJcIjtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0NTAwO1xuICBjb2xvcjogI2Y5ZWJkMjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZmxleDogMSA5MCU7XG59XG5cbmhlYWRlciBoNSB7XG4gIGNvbG9yOiAjZjllYmQyO1xufVxuXG5oZWFkZXIgPiBkaXYge1xuICBmbGV4OiAxIDEwJTtcbn1cblxuaGVhZGVyID4gZGl2OmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBzZWN0aW9uLCBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmV4dHJhLS1pbWFnZSB7XG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gIC50cmF2ZWwtLWdlbmVyYWwge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAudHJhdmVsLS1nZW5lcmFsIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gIC50cmF2ZWwtLWdlbmVyYWwgZGl2Omxhc3Qtb2YtdHlwZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5leHRyYS0tbWV0ZW8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZXh0cmEtLW1ldGVvID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAuZXh0cmEtLWltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICBzZWN0aW9uLCBoMSwgaGVhZGVyIGRpdjpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cblxuICAudHJhdmVsLS1nZW5lcmFsIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuXG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuXG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG5cbiAgLmV4dHJhLS1tZXRlbyB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cblxuICAuZXh0cmEtLW1ldGVvID4gZGl2IHtcbiAgICBtYXgtd2lkdGg6IDMwJTtcbiAgfVxuXG4gIC5leHRyYS0tbWV0ZW8gPiBkaXY6bGFzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5tYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZGlzcGxheTogYmxvY2tcXDkgO1xuICBtYXgtd2lkdGg6IDUwMHB4XFw5IDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICBoZWFkZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi50cmF2ZWwtLXFyY29kZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudHJhdmVsLS1xcmNvZGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cbi50cmF2ZWwtLWdlbmVyYWwge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMHB4O1xufVxuXG4uZXh0cmEtLW1ldGVvIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmV4dHJhLS1pbWFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAudHJhdmVsLS1UaW1lSW5mbyB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcbiAgfVxuXG4gIC50cmF2ZWwtLWdlbmVyYWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAudHJhdmVsLS1xcmNvZGUge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICBtYWluIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLnRyYXZlbC0tcXJjb2RlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5leHRyYS0taW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5Ac3VwcG9ydHMgKGRpc3BsYXk6IGdyaWQpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMXB4KSB7XG4gICAgLnRyYXZlbC0tcXJjb2RlIHtcbiAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICB9XG4gIH1cbn1cbkBzdXBwb3J0cyBub3QgKGRpc3BsYXk6IGdyaWQpIHtcbiAgbWFpbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBncmlkLWdhcDogMCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgaGVhZGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgaGVhZGVyIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuICAudHJhdmVsLS1nZW5lcmFsIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmV4dHJhLS1tZXRlbyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5leHRyYS0taW1hZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICAudHJhdmVsLS1UaW1lSW5mbyB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cblxuICAgIC50cmF2ZWwtLWdlbmVyYWwge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAudHJhdmVsLS1xcmNvZGUge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICAgIG1haW4ge1xuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cblxuICAgIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgICBoZWlnaHQ6IGluaXRpYWw7XG4gICAgfVxuXG4gICAgLmV4dHJhLS1pbWFnZSB7XG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgfVxufVxuLmV4dHJhLS1tZXRlbyB7XG4gIHotaW5kZXg6IDI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDFweCkge1xuICAuZXh0cmEtLW1ldGVvIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG1haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEvc3BhbiAyO1xuICAgIGdyaWQtcm93OiAxL3NwYW4gMTtcbiAgfVxuXG4gIC50cmF2ZWwtLWdlbmVyYWwsIC50cmF2ZWwtLVRpbWVJbmZvLCAudHJhdmVsLS1QYXNzSW5mbywgLnRyYXZlbC0tcXJjb2RlIHtcbiAgICBncmlkLWNvbHVtbjogMS9zcGFuIDI7XG4gIH1cblxuICAudHJhdmVsLS1nZW5lcmFsIHtcbiAgICBncmlkLXJvdzogMi9zcGFuIDE7XG4gIH1cblxuICAudHJhdmVsLS1UaW1lSW5mbyB7XG4gICAgZ3JpZC1yb3c6IDMvc3BhbiAxO1xuICB9XG5cbiAgLnRyYXZlbC0tUGFzc0luZm8ge1xuICAgIGdyaWQtcm93OiA0L3NwYW4gMTtcbiAgfVxuXG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgZ3JpZC1yb3c6IDUvc3BhbiAxO1xuICB9XG5cbiAgLmV4dHJhLS1tZXRlbywgLmV4dHJhLS1pbWFnZSB7XG4gICAgZ3JpZC1yb3c6IDYvc3BhbiAxO1xuICB9XG5cbiAgLmV4dHJhLS1tZXRlbyB7XG4gICAgZ3JpZC1jb2x1bW46IDEvc3BhbiAxO1xuICB9XG5cbiAgLmV4dHJhLS1pbWFnZSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvc3BhbiAxO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgbWFpbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgcmVwZWF0KDMsIG1pbm1heCgxMDBweCwgMjAwcHgpKSAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNjBweCByZXBlYXQoMywgNzVweCkgMTB2aCBhdXRvIDFmcjtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDIvc3BhbiAzO1xuICAgIGdyaWQtcm93OiAyL3NwYW4gMTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLnRyYXZlbC0tUGFzc0luZm8sIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC50cmF2ZWwtLWdlbmVyYWwge1xuICAgIGdyaWQtY29sdW1uOiAyL3NwYW4gMjtcbiAgICBncmlkLXJvdzogMy9zcGFuIDE7XG4gICAgei1pbmRleDogMztcbiAgfVxuXG4gIC50cmF2ZWwtLVRpbWVJbmZvIHtcbiAgICBncmlkLWNvbHVtbjogMi9zcGFuIDI7XG4gICAgZ3JpZC1yb3c6IDUvc3BhbiAxO1xuICAgIHotaW5kZXg6IDM7XG4gIH1cblxuICAudHJhdmVsLS1QYXNzSW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDIvc3BhbiAyO1xuICAgIGdyaWQtcm93OiA0L3NwYW4gMTtcbiAgfVxuXG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgZ3JpZC1jb2x1bW46IDQvc3BhbiAxO1xuICAgIGdyaWQtcm93OiAzL3NwYW4gMztcbiAgfVxuXG4gIC5leHRyYS0tbWV0ZW8ge1xuICAgIGdyaWQtY29sdW1uOiAyL3NwYW4gMztcbiAgICBncmlkLXJvdzogNy9zcGFuIDE7XG4gIH1cblxuICAuZXh0cmEtLWltYWdlIHtcbiAgICBncmlkLWNvbHVtbjogMS9zcGFuIDc7XG4gICAgZ3JpZC1yb3c6IDEvc3BhbiA4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIG1haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIHJlcGVhdCg0LCAxNTBweCkgMjUwcHggMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDYwcHggcmVwZWF0KDIsIDEwMHB4KSAwLjVmciBhdXRvIDFmcjtcbiAgfVxuXG4gIGhlYWRlciB7XG4gICAgZ3JpZC1jb2x1bW46IDIvc3BhbiA1O1xuICAgIGdyaWQtcm93OiAyL3NwYW4gMTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLnRyYXZlbC0tZ2VuZXJhbCwgLnRyYXZlbC0tVGltZUluZm8sIC50cmF2ZWwtLVBhc3NJbmZvLCAudHJhdmVsLS1xcmNvZGUge1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAudHJhdmVsLS1nZW5lcmFsIHtcbiAgICBncmlkLWNvbHVtbjogMi9zcGFuIDI7XG4gICAgZ3JpZC1yb3c6IDMvc3BhbiAyO1xuICB9XG5cbiAgLnRyYXZlbC0tVGltZUluZm8ge1xuICAgIGdyaWQtY29sdW1uOiA0L3NwYW4gMjtcbiAgICBncmlkLXJvdzogMy9zcGFuIDE7XG4gIH1cblxuICAudHJhdmVsLS1QYXNzSW5mbyB7XG4gICAgZ3JpZC1jb2x1bW46IDQvc3BhbiAyO1xuICAgIGdyaWQtcm93OiA0L3NwYW4gMTtcbiAgfVxuXG4gIC50cmF2ZWwtLXFyY29kZSB7XG4gICAgZ3JpZC1jb2x1bW46IDYvc3BhbiAxO1xuICAgIGdyaWQtcm93OiAzL3NwYW4gMjtcbiAgfVxuXG4gIC5leHRyYS0tbWV0ZW8ge1xuICAgIGdyaWQtY29sdW1uOiAyL3NwYW4gNTtcbiAgICBncmlkLXJvdzogNi9zcGFuIDE7XG4gIH1cblxuICAuZXh0cmEtLWltYWdlIHtcbiAgICBncmlkLWNvbHVtbjogMS9zcGFuIDc7XG4gICAgZ3JpZC1yb3c6IDEvc3BhbiA3O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cbi5hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNpcmNsZXMge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jaXJjbGVzIGxpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBhbmltYXRpb246IGFuaW1hdGUgMjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgYm90dG9tOiAtMTUwcHg7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEycztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogNzAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNCkge1xuICBsZWZ0OiA0MCU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMThzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNSkge1xuICBsZWZ0OiA2NSU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg2KSB7XG4gIGxlZnQ6IDc1JTtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDNzO1xufVxuXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNykge1xuICBsZWZ0OiAzNSU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiA3cztcbn1cblxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDgpIHtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBhbmltYXRpb24tZGVsYXk6IDE1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg5KSB7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XG59XG5cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxMCkge1xuICBsZWZ0OiA4NSU7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMXM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMDBweCkgcm90YXRlKDcyMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment',
          templateUrl: './payment.component.html',
          styleUrls: ['./payment.component.scss']
        }]
      }], function () {
        return [{
          type: _travel_service__WEBPACK_IMPORTED_MODULE_1__["TravelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sign/sign.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sign/sign.component.ts ***!
    \****************************************/

  /*! exports provided: SignComponent */

  /***/
  function srcAppSignSignComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignComponent", function () {
      return SignComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user */
    "./src/app/user.ts");
    /* harmony import */


    var src_app_signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/signup.service */
    "./src/app/signup.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
      }
    }

    function SignComponent_div_20_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_20_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
      }
    }

    function SignComponent_div_24_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_24_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
      }
    }

    function SignComponent_div_28_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_28_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_28_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignComponent_div_28_small_2_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors.pattern);
      }
    }

    function SignComponent_div_32_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Age is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_32_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter a valid Age");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_32_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignComponent_div_32_small_2_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors.pattern);
      }
    }

    function SignComponent_div_36_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_36_small_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number must be 10 digits and numeric");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_36_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignComponent_div_36_small_2_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors.pattern);
      }
    }

    function SignComponent_div_40_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_40_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors.required);
      }
    }

    function SignComponent_div_44_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Correct");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_44_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter the same password as above ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_44_small_1_Template, 2, 0, "small", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignComponent_div_44_ng_template_2_Template, 2, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.passbool)("ngIfElse", _r27);
      }
    }

    function SignComponent_div_45_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignComponent_div_45_small_1_Template, 2, 0, "small", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors.required);
      }
    }

    var SignComponent = /*#__PURE__*/function () {
      function SignComponent(signupDetails, router) {
        _classCallCheck(this, SignComponent);

        this.signupDetails = signupDetails;
        this.router = router;
        this.userModel = new src_app_user__WEBPACK_IMPORTED_MODULE_1__["User"]("", "", "", "", "", "");
        this.errorMsg = '';
        this.passbool = false;
      }

      _createClass(SignComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "passcheck",
        value: function passcheck() {
          if (this.userModel.password == this.confpass) {
            this.passbool = true; //  return this.passbool;
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          console.log(this.userModel);
          this.signupDetails.enroll(this.userModel).subscribe(function (data) {
            console.log("Success!!!", data);

            _this4.router.navigate(['/Sign-In']);
          }, function (error) {
            _this4.errorMsg = error.error;

            _this4.router.navigate(['/Sign-Up']);
          });
        }
      }]);

      return SignComponent;
    }();

    SignComponent.ɵfac = function SignComponent_Factory(t) {
      return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    SignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignComponent,
      selectors: [["app-sign"]],
      decls: 56,
      vars: 16,
      consts: [[1, "form"], [1, "tab-group"], [1, "tab", "active"], ["href", "#signup", "id", "Signup", "routerLink", "/Sign-Up"], [1, "tab"], ["href", "#login", "id", "Login", "routerLink", "/Sign-In"], [1, "tab-content"], ["id", "signup"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["userForm", "ngForm"], [1, "top-row"], [1, "field-wrap"], ["type", "text", "placeholder", "First Name *", "required", "", "autocomplete", "off", "class.is-invalid", "first.invalid && first.touched", "name", "First-Name", 3, "ngModel", "ngModelChange"], ["first", "ngModel"], [4, "ngIf"], ["type", "text", "placeholder", "Last Name *", "required", "", "autocomplete", "off", "class.is-invalid", "last.invalid && last.touched", "name", "Last-Name", 3, "ngModel", "ngModelChange"], ["last", "ngModel"], ["type", "email", "pattern", "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "placeholder", "E-mail *", "required", "", "autocomplete", "off", "class.is-invalid", "email.invalid && email.touched", "name", "E-mail", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "tel", "pattern", "^[0-9]{2}$", "placeholder", "Age *", "required", "", "autocomplete", "off", "class.is-invalid", "age.invalid && age.touched", "name", "age", 3, "ngModel", "ngModelChange"], ["age", "ngModel"], ["type", "tel", "placeholder", "Phone Number *", "pattern", "^\\d[0-9]{9}$", "class.is-invalid", "phone.invalid && phone.touched", "required", "", "autocomplete", "off", "name", "Phone-Number", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "password", "placeholder", "Set Password *", "required", "", "autocomplete", "off", "name", "Password", "class.is-invalid", "pass.invalid && pass.touched", 3, "ngModel", "ngModelChange"], ["pass", "ngModel"], ["type", "password", "placeholder", "Confirm Password *", "name", "confirm", "ngModel", "", "required", "", "autocomplete", "off", 3, "input"], ["conf", "ngModel"], ["type", "submit", 1, "button", "button-block", 3, "disabled"], [1, "entry-social"], [1, "fb"], ["href", "Your_Facebok_Page", "target", "_blank"], [1, "gplus"], ["href", "Your_Googleplus_Follow", "target", "_blank"], [1, "alert", "alert-danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["class", "text-success", 4, "ngIf", "ngIfElse"], ["Notsame", ""], [1, "text-success"]],
      template: function SignComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-overlay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hello There!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignComponent_div_13_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignComponent_Template_form_ngSubmit_14_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.userModel.first_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignComponent_div_20_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.userModel.last_name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignComponent_div_24_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.userModel.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SignComponent_div_28_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.userModel.age = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignComponent_div_32_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.userModel.contact = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SignComponent_div_36_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.userModel.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SignComponent_div_40_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SignComponent_Template_input_input_42_listener($event) {
            return ctx.confpass = $event.target.value;
          })("input", function SignComponent_Template_input_input_42_listener() {
            return ctx.passcheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SignComponent_div_44_Template, 4, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SignComponent_div_45_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Google+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.first_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors && _r2.invalid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.last_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors && _r4.invalid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.errors && _r6.invalid && _r6.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.invalid && _r8.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r10.errors && _r10.invalid && _r10.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r12.errors && _r12.invalid && _r12.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.touched || _r14.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r14.errors && _r14.invalid && _r14.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.form.invalid);
        }
      },
      directives: [_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_4__["OverlayComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]],
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ed3956;\n  transition: 0.5s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #ed3956;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n}\n\n.tab-group[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.tab-group[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba(160, 179, 176, 0.25);\n  color: #a0b3b0;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #ed3956;\n  color: #ffffff;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #ed3956;\n  color: #ffffff;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\n\n.gray[_ngcontent-%COMP%] {\n  background-color: #a0b3b0;\n}\n\nlabel[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #B40431;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\n\nlabel.active[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\nlabel.highlight[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: #B40431;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border: 2px solid #a0b3b0;\n  resize: vertical;\n}\n\n.field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.top-row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: #ed3956;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  background: #ed3956;\n}\n\n.button-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ed3956;\n  transition: 0.5s ease;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  text-align: right;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.entry-social[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: #7e7e7e;\n  display: block;\n  font-family: \"Open Sans\", Tahoma, Verdana, Arial, sans-serif, Faruma, Faseyha;\n  font-size: 14px;\n  font-weight: normal;\n  height: auto;\n  line-height: 23.7999992371px;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 100%;\n  float: left;\n  border: solid 0px #aaa;\n  text-align: center;\n}\n\n.entry-social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  width: 138px;\n  margin: 2px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.entry-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n  padding-left: 20px;\n  color: #FFFFFF !important;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.entry-social[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 26px;\n  background: #3B5999 url(\"http://3.bp.blogspot.com/-yqD2363XuAo/UeDk98twSlI/AAAAAAAAArg/kXIzFBWmczM/s1600/fb14.png\") no-repeat 10px center;\n}\n\n.entry-social[_ngcontent-%COMP%]   .gplus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 32px;\n  background: #D54135 url(\"http://3.bp.blogspot.com/-A8fFRexz_zk/UeDlgadvpiI/AAAAAAAAArw/TRd7NWNwo9s/s1600/gplus14.png\") no-repeat 10px center;\n}\n\n.entry-social[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #324b81;\n}\n\n.entry-social[_ngcontent-%COMP%]   .gplus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #bf3428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXGFkbWluXFxJQk1cXFJpZGVBU0FQL3NyY1xcYXBwXFxzaWduXFxzaWduLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdBLHNCQUFBO0FDQUE7O0FER0E7RUFDQSxrQkFBQTtBQ0FBOztBRFFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUNMQTs7QURPQTtFQUNBLGNBQUE7QUNKQTs7QURPQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKQTs7QURNQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDSEE7O0FES0E7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNGQTs7QURJQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtBQ0RBOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURHQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBQTs7QURHQTtFQUNBLGtCQUFBO0VBRU0sMEJBQUE7RUFDTixVQUFBO0VBQ0EsK0JBQUE7RUFFQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0FBOztBREVBO0VBQ0EseUJBQUE7QUNDQTs7QURDQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRUE7O0FEQ0E7RUFFTSwyQkFBQTtFQUNOLFNBQUE7RUFDQSxlQUFBO0FDRUE7O0FEQUE7RUFDQSxVQUFBO0FDR0E7O0FEQUE7RUFDQSxjQUFBO0FDR0E7O0FEQUE7O0VBRUEsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsMERBQUE7QUNHQTs7QUREQTs7RUFFQSxVQUFBO0VBQ0EscUJBQUE7QUNJQTs7QUREQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJQTs7QUREQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNJQTs7QUREQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0lBOztBREZBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0tBOztBREhBO0VBQ0EsU0FBQTtBQ01BOztBREhBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBRUEseUJBQUE7RUFDQSx3QkFBQTtBQ01BOztBREpBO0VBQ0EsbUJBQUE7QUNPQTs7QURKQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDT0E7O0FESkE7RUFFSSxxQkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtBQ01KOztBREhBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ01BOztBREpBO0VBQ0EsY0FBQTtBQ09BOztBREpBO0VBQWUsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsY0FBQTtFQUEwQixjQUFBO0VBQWUsNkVBQUE7RUFBNkUsZUFBQTtFQUFnQixtQkFBQTtFQUFvQixZQUFBO0VBQWEsNEJBQUE7RUFBaUMsbUJBQUE7RUFBb0IsV0FBQTtFQUM1USxXQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0VBQXVCLGtCQUFBO0FDcUJwRDs7QURuQk07RUFBbUIsY0FBQTtFQUFlLFlBQUE7RUFBWSxXQUFBO0VBQVcscUJBQUE7RUFDckQsc0JBQUE7QUMwQlY7O0FEeEJNO0VBQWlCLHFCQUFBO0VBQXFCLGNBQUE7RUFBZSxrQkFBQTtFQUFtQix5QkFBQTtFQUEwQixpQkFBQTtFQUFrQixpQ0FBQTtBQ2lDMUg7O0FEL0JNO0VBQXFCLDBCQUFBO0VBQTJCLHlJQUFBO0FDb0N0RDs7QURoQ007RUFBd0IsMEJBQUE7RUFBMkIsNElBQUE7QUNxQ3pEOztBRGxDTTtFQUEyQix5QkFBQTtBQ3NDakM7O0FEcENNO0VBQThCLHlCQUFBO0FDd0NwQyIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmh0bWwge1xyXG5vdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi8vIGJvZHkge1xyXG4vLyBiYWNrZ3JvdW5kOiAjYzFiZGJhO1xyXG4vLyBmb250LWZhbWlseTogXCJUaXRpbGxpdW0gV2ViXCIsIHNhbnMtc2VyaWY7XHJcbi8vIH1cclxuXHJcbmJ1dHRvbiB7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuY29sb3I6ICNlZDM5NTY7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG50cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuY29sb3I6I2VkMzk1NjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG5wYWRkaW5nOiA0MHB4O1xyXG5tYXgtd2lkdGg6IDYwMHB4O1xyXG5tYXJnaW46IDQwcHggYXV0bztcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi50YWItZ3JvdXAge1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuLnRhYi1ncm91cDphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5jbGVhcjogYm90aDtcclxufVxyXG4udGFiLWdyb3VwIGxpIGJ1dHRvbntcclxuZGlzcGxheTogYmxvY2s7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxucGFkZGluZzogMTVweDtcclxuYmFja2dyb3VuZDogcmdiYSgxNjAsIDE3OSwgMTc2LCAwLjI1KTtcclxuY29sb3I6ICNhMGIzYjA7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbndpZHRoOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG4td2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxudHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcbi50YWItZ3JvdXAgbGkgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZDM5NTY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZDM5NTY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICBcclxufVxyXG5cclxuaDEge1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG5mb250LXdlaWdodDogMzAwO1xyXG5tYXJnaW46IDAgMCA0MHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XHJcbmxlZnQ6IDEzcHg7XHJcbmNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbnRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbi1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4td2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxucG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4uZ3JheXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2EwYjNiMDtcclxufVxyXG5sYWJlbCAucmVxIHtcclxubWFyZ2luOiAycHg7XHJcbmNvbG9yOiNCNDA0MzE7XHJcbn1cclxuXHJcbmxhYmVsLmFjdGl2ZSB7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbmxlZnQ6IDJweDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmxhYmVsLmFjdGl2ZSAucmVxIHtcclxub3BhY2l0eTogMDtcclxufVxyXG5cclxubGFiZWwuaGlnaGxpZ2h0IHtcclxuY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG5oZWlnaHQ6IDEwMCU7XHJcbnBhZGRpbmc6IDVweCAxMHB4O1xyXG5iYWNrZ3JvdW5kOiBub25lO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjYTBiM2IwO1xyXG5jb2xvcjogI2ZmZmZmZjtcclxuYm9yZGVyLXJhZGl1czogMDtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlO1xyXG50cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlO1xyXG59XHJcbmlucHV0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbm91dGxpbmU6IDA7XHJcbmJvcmRlci1jb2xvcjojQjQwNDMxO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbmJvcmRlcjogMnB4IHNvbGlkICNhMGIzYjA7XHJcbnJlc2l6ZTogdmVydGljYWw7XHJcbn1cclxuXHJcbi5maWVsZC13cmFwIHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5tYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4udG9wLXJvdzphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5jbGVhcjogYm90aDtcclxufVxyXG4udG9wLXJvdyA+IGRpdiB7XHJcbmZsb2F0OiBsZWZ0O1xyXG53aWR0aDogNDglO1xyXG5tYXJnaW4tcmlnaHQ6IDQlO1xyXG59XHJcbi50b3Atcm93ID4gZGl2Omxhc3QtY2hpbGQge1xyXG5tYXJnaW46IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG5ib3JkZXI6IDA7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJvcmRlci1yYWRpdXM6IDA7XHJcbnBhZGRpbmc6IDE1cHggMDtcclxuZm9udC1zaXplOiAycmVtO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5sZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbmJhY2tncm91bmQ6ICNlZDM5NTY7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbnRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbi13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcclxuYmFja2dyb3VuZDogI2VkMzk1NjtcclxufVxyXG5cclxuLmJ1dHRvbi1ibG9jayB7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuYVxyXG57XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2VkMzk1NjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgICBcclxufVxyXG4uZm9yZ290IHtcclxubWFyZ2luLXRvcDogLTIwcHg7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5ibG9ja3tcclxuZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5lbnRyeS1zb2NpYWwge21hcmdpbi1ib3R0b206IDIwcHg7IG1hcmdpbi10b3A6IDIwcHg7IGNvbG9yOiByZ2IoMTI2LCAxMjYsIDEyNik7ZGlzcGxheTogYmxvY2s7Zm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLFRhaG9tYSwgVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEZhcnVtYSwgRmFzZXloYTtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IG5vcm1hbDtoZWlnaHQ6IGF1dG87bGluZS1oZWlnaHQ6MjMuNzk5OTk5MjM3MDYwNTQ3cHg7bWFyZ2luLWJvdHRvbTogMjBweDt3aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7ZmxvYXQ6bGVmdDtib3JkZXI6IHNvbGlkIDBweCAjYWFhO3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbiAgICAgIFxyXG4gICAgICAuZW50cnktc29jaWFsIGRpdiB7ZGlzcGxheTogYmxvY2s7d2lkdGg6MTM4cHg7bWFyZ2luOjJweDtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7fVxyXG4gICAgICBcclxuICAgICAgLmVudHJ5LXNvY2lhbCBhIHt0ZXh0LWRlY29yYXRpb246bm9uZTtkaXNwbGF5OiBibG9jaztwYWRkaW5nLWxlZnQ6IDIwcHg7Y29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtmb250LXdlaWdodDogYm9sZDt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzOyAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZW50cnktc29jaWFsIC5mYiBhIHtwYWRkaW5nOiA3cHggMTBweCA3cHggMjZweDtiYWNrZ3JvdW5kOiAjM0I1OTk5IHVybCgnaHR0cDovLzMuYnAuYmxvZ3Nwb3QuY29tLy15cUQyMzYzWHVBby9VZURrOTh0d1NsSS9BQUFBQUFBQUFyZy9rWEl6RkJXbWN6TS9zMTYwMC9mYjE0LnBuZycpIG5vLXJlcGVhdCAxMHB4IGNlbnRlcjt9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5lbnRyeS1zb2NpYWwgLmdwbHVzIGEge3BhZGRpbmc6IDdweCAxMHB4IDdweCAzMnB4O2JhY2tncm91bmQ6ICNENTQxMzUgdXJsKCdodHRwOi8vMy5icC5ibG9nc3BvdC5jb20vLUE4ZkZSZXh6X3prL1VlRGxnYWR2cGlJL0FBQUFBQUFBQXJ3L1RSZDdOV053bzlzL3MxNjAwL2dwbHVzMTQucG5nJykgbm8tcmVwZWF0IDEwcHggY2VudGVyO31cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuZW50cnktc29jaWFsIC5mYiBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDc1LCAxMjkpO31cclxuICAgICAgXHJcbiAgICAgIC5lbnRyeS1zb2NpYWwgLmdwbHVzIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDUyLCA0MCk7fVxyXG4gICAgICBcclxuICAgICAgIiwiKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbmJ1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlZDM5NTY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjZWQzOTU2O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi50YWItZ3JvdXAge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCA0MHB4IDA7XG59XG5cbi50YWItZ3JvdXA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50YWItZ3JvdXAgbGkgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNjAsIDE3OSwgMTc2LCAwLjI1KTtcbiAgY29sb3I6ICNhMGIzYjA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4udGFiLWdyb3VwIGxpIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZDM5NTY7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VkMzk1NjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAwIDAgNDBweDtcbn1cblxubGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xuICBsZWZ0OiAxM3B4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5ncmF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYjNiMDtcbn1cblxubGFiZWwgLnJlcSB7XG4gIG1hcmdpbjogMnB4O1xuICBjb2xvcjogI0I0MDQzMTtcbn1cblxubGFiZWwuYWN0aXZlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmxhYmVsLmFjdGl2ZSAucmVxIHtcbiAgb3BhY2l0eTogMDtcbn1cblxubGFiZWwuaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBmb250LXNpemU6IDIycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYjNiMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1jb2xvcjogI0I0MDQzMTtcbn1cblxudGV4dGFyZWEge1xuICBib3JkZXI6IDJweCBzb2xpZCAjYTBiM2IwO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4uZmllbGQtd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnRvcC1yb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50b3Atcm93ID4gZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG5cbi50b3Atcm93ID4gZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGJhY2tncm91bmQ6ICNlZDM5NTY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlZDM5NTY7XG59XG5cbi5idXR0b24tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZWQzOTU2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuXG4uZm9yZ290IHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVudHJ5LXNvY2lhbCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIFRhaG9tYSwgVmVyZGFuYSwgQXJpYWwsIHNhbnMtc2VyaWYsIEZhcnVtYSwgRmFzZXloYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyMy43OTk5OTkyMzcxcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogc29saWQgMHB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVudHJ5LXNvY2lhbCBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEzOHB4O1xuICBtYXJnaW46IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZW50cnktc29jaWFsIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5lbnRyeS1zb2NpYWwgLmZiIGEge1xuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMjZweDtcbiAgYmFja2dyb3VuZDogIzNCNTk5OSB1cmwoXCJodHRwOi8vMy5icC5ibG9nc3BvdC5jb20vLXlxRDIzNjNYdUFvL1VlRGs5OHR3U2xJL0FBQUFBQUFBQXJnL2tYSXpGQldtY3pNL3MxNjAwL2ZiMTQucG5nXCIpIG5vLXJlcGVhdCAxMHB4IGNlbnRlcjtcbn1cblxuLmVudHJ5LXNvY2lhbCAuZ3BsdXMgYSB7XG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjRDU0MTM1IHVybChcImh0dHA6Ly8zLmJwLmJsb2dzcG90LmNvbS8tQThmRlJleHpfemsvVWVEbGdhZHZwaUkvQUFBQUFBQUFBcncvVFJkN05XTndvOXMvczE2MDAvZ3BsdXMxNC5wbmdcIikgbm8tcmVwZWF0IDEwcHggY2VudGVyO1xufVxuXG4uZW50cnktc29jaWFsIC5mYiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyNGI4MTtcbn1cblxuLmVudHJ5LXNvY2lhbCAuZ3BsdXMgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZjM0Mjg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign',
          templateUrl: './sign.component.html',
          styleUrls: ['./sign.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin.service.ts":
  /*!***********************************!*\
    !*** ./src/app/signin.service.ts ***!
    \***********************************/

  /*! exports provided: SigninService */

  /***/
  function srcAppSigninServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninService", function () {
      return SigninService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SigninService = /*#__PURE__*/function () {
      function SigninService(http) {
        _classCallCheck(this, SigninService);

        this.http = http;
        this._url = 'http://localhost:8080/user/login';
      }

      _createClass(SigninService, [{
        key: "Check",
        value: function Check(signin) {
          return this.http.post(this._url, signin).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }
      }, {
        key: "storeUserData",
        value: function storeUserData(token) {
          localStorage.setItem('token', token);
          this.auth_token = token;
        }
      }, {
        key: "Logout",
        value: function Logout() {
          this.auth_token = null;
          localStorage.clear();
        }
      }]);

      return SigninService;
    }();

    SigninService.ɵfac = function SigninService_Factory(t) {
      return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SigninService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SigninService,
      factory: SigninService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signin.ts":
  /*!***************************!*\
    !*** ./src/app/signin.ts ***!
    \***************************/

  /*! exports provided: Signin */

  /***/
  function srcAppSigninTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Signin", function () {
      return Signin;
    });

    var Signin = function Signin(email, password) {
      _classCallCheck(this, Signin);

      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/signin/signin.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signin/signin.component.ts ***!
    \********************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../signin */
    "./src/app/signin.ts");
    /* harmony import */


    var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../signin.service */
    "./src/app/signin.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _travel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../travel.service */
    "./src/app/travel.service.ts");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SigninComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
      }
    }

    function SigninComponent_div_19_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_19_small_1_Template, 2, 0, "small", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors.required);
      }
    }

    function SigninComponent_div_23_small_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This Field is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SigninComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_23_small_1_Template, 2, 0, "small", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors.required);
      }
    }

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent(signinDetails, router, travel) {
        _classCallCheck(this, SigninComponent);

        this.signinDetails = signinDetails;
        this.router = router;
        this.travel = travel;
        this.Signindet = new _signin__WEBPACK_IMPORTED_MODULE_1__["Signin"]("", "");
        this.errorMsg = '';
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.signinDetails.Check(this.Signindet).subscribe(function (data) {
            console.log('Success!', data);
            _this5.travel.email = data.email;
            _this5.travel.name = data.name;

            _this5.signinDetails.storeUserData(data.token);

            _this5.router.navigate(['/Home']);
          }, function (error) {
            _this5.errorMsg = error.error;

            _this5.router.navigate(['/Sign-In']);
          });
        }
      }]);

      return SigninComponent;
    }();

    SigninComponent.ɵfac = function SigninComponent_Factory(t) {
      return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"]));
    };

    SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SigninComponent,
      selectors: [["app-signin"]],
      decls: 37,
      vars: 6,
      consts: [[1, "form"], [1, "tab-group"], [1, "tab", "active"], ["href", "#signup", "id", "Signup", "routerLink", "/Sign-Up"], [1, "tab"], ["href", "#login", "id", "Login", "routerLink", "/Sign-In"], [1, "tab-content"], ["id", "login", 1, "login"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit"], ["userSignin", "ngForm"], [1, "field-wrap"], ["type", "email", "class.is-invalid", "email.invalid && email.touched", "placeholder", "E-mail *", "required", "", "autocomplete", "off", "name", "email", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], ["type", "password", "class.is-invalid", "password.invalid && password.touched", "placeholder", "Password *", "required", "", "autocomplete", "off", "name", "password", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "forgot"], ["href", "#"], [1, "button", "button-block", 3, "disabled"], [1, "entry-social"], [1, "fb"], ["href", "Your_Facebok_Page", "target", "_blank"], [1, "gplus"], ["href", "Your_Googleplus_Follow", "target", "_blank"], [1, "alert", "alert-danger"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
      template: function SigninComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-overlay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Welcome Back!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SigninComponent_div_13_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_14_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.Signindet.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SigninComponent_div_19_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SigninComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.Signindet.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SigninComponent_div_23_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Log In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Google+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Signindet.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.errors && _r2.invalid && _r2.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Signindet.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.errors && _r4.invalid && _r4.touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.form.invalid);
        }
      },
      directives: [_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nhtml[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\n\nbutton[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #DF013A;\n  transition: 0.5s ease;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #B40431;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n}\n\n.tab-group[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.tab-group[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba(160, 179, 176, 0.25);\n  color: #a0b3b0;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\n.tab-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #DF013A;\n  color: #ffffff;\n}\n\n.active[_ngcontent-%COMP%] {\n  background: #B40431;\n  color: #ffffff;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\n\n.gray[_ngcontent-%COMP%] {\n  background-color: #a0b3b0;\n}\n\nlabel[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #B40431;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\n\nlabel.active[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\nlabel.highlight[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  color: #ffffff;\n  border-radius: 0;\n  transition: border-color 0.25s ease, box-shadow 0.25s ease;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: #B40431;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  border: 2px solid #a0b3b0;\n  resize: vertical;\n}\n\n.field-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.top-row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n\n.top-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: 0;\n  outline: none;\n  border-radius: 0;\n  padding: 15px 0;\n  font-size: 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  background: #B40431;\n  color: #ffffff;\n  transition: all 0.5s ease;\n  -webkit-appearance: none;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  background: #DF013A;\n}\n\n.button-block[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #DF013A;\n  transition: 0.5s ease;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  text-align: right;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.entry-social[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 20px;\n  color: #7e7e7e;\n  display: block;\n  font-family: \"Open Sans\", Tahoma, Verdana, Arial, sans-serif, Faruma, Faseyha;\n  font-size: 14px;\n  font-weight: normal;\n  height: auto;\n  line-height: 23.7999992371px;\n  margin-bottom: 20px;\n  width: 100%;\n  width: 100%;\n  float: left;\n  border: solid 0px #aaa;\n  text-align: center;\n}\n\n.entry-social[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  width: 138px;\n  margin: 2px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.entry-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: block;\n  padding-left: 20px;\n  color: #FFFFFF !important;\n  font-weight: bold;\n  transition: background-color 0.3s;\n}\n\n.entry-social[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 26px;\n  background: #3B5999 url(\"http://3.bp.blogspot.com/-yqD2363XuAo/UeDk98twSlI/AAAAAAAAArg/kXIzFBWmczM/s1600/fb14.png\") no-repeat 10px center;\n}\n\n.entry-social[_ngcontent-%COMP%]   .gplus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 32px;\n  background: #D54135 url(\"http://3.bp.blogspot.com/-A8fFRexz_zk/UeDlgadvpiI/AAAAAAAAArw/TRd7NWNwo9s/s1600/gplus14.png\") no-repeat 10px center;\n}\n\n.entry-social[_ngcontent-%COMP%]   .fb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #324b81;\n}\n\n.entry-social[_ngcontent-%COMP%]   .gplus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #bf3428;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL0M6XFxVc2Vyc1xcYWRtaW5cXElCTVxcUmlkZUFTQVAvc3JjXFxhcHBcXHNpZ25pblxcc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7RUFHQSxzQkFBQTtBQ0FBOztBREdBO0VBQ0Esa0JBQUE7QUNBQTs7QURRQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0FDTEE7O0FET0E7RUFDQSxjQUFBO0FDSkE7O0FET0E7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSkE7O0FETUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0hBOztBREtBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRkE7O0FESUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7QUNEQTs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUE7O0FER0E7RUFDQSxrQkFBQTtFQUVNLDBCQUFBO0VBQ04sVUFBQTtFQUNBLCtCQUFBO0VBRUEsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNBQTs7QURFQTtFQUNBLHlCQUFBO0FDQ0E7O0FEQ0E7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VBOztBRENBO0VBRU0sMkJBQUE7RUFDTixTQUFBO0VBQ0EsZUFBQTtBQ0VBOztBREFBO0VBQ0EsVUFBQTtBQ0dBOztBREFBO0VBQ0EsY0FBQTtBQ0dBOztBREFBOztFQUVBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLDBEQUFBO0FDR0E7O0FEREE7O0VBRUEsVUFBQTtFQUNBLHFCQUFBO0FDSUE7O0FEREE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSUE7O0FEREE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSUE7O0FEREE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNJQTs7QURGQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNLQTs7QURIQTtFQUNBLFNBQUE7QUNNQTs7QURIQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUVBLHlCQUFBO0VBQ0Esd0JBQUE7QUNNQTs7QURKQTtFQUNBLG1CQUFBO0FDT0E7O0FESkE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ09BOztBREpBO0VBRUkscUJBQUE7RUFDQSxjQUFBO0VBRUEscUJBQUE7QUNNSjs7QURIQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNNQTs7QURKQTtFQUNBLGNBQUE7QUNPQTs7QURKQTtFQUFlLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGNBQUE7RUFBMEIsY0FBQTtFQUFlLDZFQUFBO0VBQTZFLGVBQUE7RUFBZ0IsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLDRCQUFBO0VBQWlDLG1CQUFBO0VBQW9CLFdBQUE7RUFDNVEsV0FBQTtFQUFZLFdBQUE7RUFBVyxzQkFBQTtFQUF1QixrQkFBQTtBQ3FCcEQ7O0FEbkJNO0VBQW1CLGNBQUE7RUFBZSxZQUFBO0VBQVksV0FBQTtFQUFXLHFCQUFBO0VBQ3JELHNCQUFBO0FDMEJWOztBRHhCTTtFQUFpQixxQkFBQTtFQUFxQixjQUFBO0VBQWUsa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsaUJBQUE7RUFBa0IsaUNBQUE7QUNpQzFIOztBRC9CTTtFQUFxQiwwQkFBQTtFQUEyQix5SUFBQTtBQ29DdEQ7O0FEaENNO0VBQXdCLDBCQUFBO0VBQTJCLDRJQUFBO0FDcUN6RDs7QURsQ007RUFBMkIseUJBQUE7QUNzQ2pDOztBRHBDTTtFQUE4Qix5QkFBQTtBQ3dDcEMiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCB7XHJcbm92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLy8gYm9keSB7XHJcbi8vIGJhY2tncm91bmQ6ICNjMWJkYmE7XHJcbi8vIGZvbnQtZmFtaWx5OiBcIlRpdGlsbGl1bSBXZWJcIiwgc2Fucy1zZXJpZjtcclxuLy8gfVxyXG5cclxuYnV0dG9uIHtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5jb2xvcjogI0RGMDEzQTtcclxuLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbnRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG5jb2xvcjogI0I0MDQzMTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG5wYWRkaW5nOiA0MHB4O1xyXG5tYXgtd2lkdGg6IDYwMHB4O1xyXG5tYXJnaW46IDQwcHggYXV0bztcclxuYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi50YWItZ3JvdXAge1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5wYWRkaW5nOiAwO1xyXG5tYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuLnRhYi1ncm91cDphZnRlciB7XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbmRpc3BsYXk6IHRhYmxlO1xyXG5jbGVhcjogYm90aDtcclxufVxyXG4udGFiLWdyb3VwIGxpIGJ1dHRvbntcclxuZGlzcGxheTogYmxvY2s7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxucGFkZGluZzogMTVweDtcclxuYmFja2dyb3VuZDogcmdiYSgxNjAsIDE3OSwgMTc2LCAwLjI1KTtcclxuY29sb3I6ICNhMGIzYjA7XHJcbmZvbnQtc2l6ZTogMjBweDtcclxuZmxvYXQ6IGxlZnQ7XHJcbndpZHRoOiA1MCU7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG4td2Via2l0LXRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxudHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG59XHJcbi50YWItZ3JvdXAgbGkgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNERjAxM0E7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjQjQwNDMxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgXHJcbn1cclxuXHJcbmgxIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogI2ZmZmZmZjtcclxuZm9udC13ZWlnaHQ6IDMwMDtcclxubWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbi13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpO1xyXG5sZWZ0OiAxM3B4O1xyXG5jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4td2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4tbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5mb250LXNpemU6IDIycHg7XHJcbn1cclxuLmdyYXl7XHJcbmJhY2tncm91bmQtY29sb3I6ICNhMGIzYjA7XHJcbn1cclxubGFiZWwgLnJlcSB7XHJcbm1hcmdpbjogMnB4O1xyXG5jb2xvcjojQjQwNDMxO1xyXG59XHJcblxyXG5sYWJlbC5hY3RpdmUge1xyXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG5sZWZ0OiAycHg7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5sYWJlbC5hY3RpdmUgLnJlcSB7XHJcbm9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmxhYmVsLmhpZ2hsaWdodCB7XHJcbmNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG5mb250LXNpemU6IDIycHg7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG53aWR0aDogMTAwJTtcclxuaGVpZ2h0OiAxMDAlO1xyXG5wYWRkaW5nOiA1cHggMTBweDtcclxuYmFja2dyb3VuZDogbm9uZTtcclxuYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuYm9yZGVyOiAxcHggc29saWQgI2EwYjNiMDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbmJvcmRlci1yYWRpdXM6IDA7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcclxudHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZTtcclxufVxyXG5pbnB1dDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG5vdXRsaW5lOiAwO1xyXG5ib3JkZXItY29sb3I6I0I0MDQzMTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG5ib3JkZXI6IDJweCBzb2xpZCAjYTBiM2IwO1xyXG5yZXNpemU6IHZlcnRpY2FsO1xyXG59XHJcblxyXG4uZmllbGQtd3JhcCB7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxubWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnRvcC1yb3c6YWZ0ZXIge1xyXG5jb250ZW50OiBcIlwiO1xyXG5kaXNwbGF5OiB0YWJsZTtcclxuY2xlYXI6IGJvdGg7XHJcbn1cclxuLnRvcC1yb3cgPiBkaXYge1xyXG5mbG9hdDogbGVmdDtcclxud2lkdGg6IDQ4JTtcclxubWFyZ2luLXJpZ2h0OiA0JTtcclxufVxyXG4udG9wLXJvdyA+IGRpdjpsYXN0LWNoaWxkIHtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuYm9yZGVyOiAwO1xyXG5vdXRsaW5lOiBub25lO1xyXG5ib3JkZXItcmFkaXVzOiAwO1xyXG5wYWRkaW5nOiAxNXB4IDA7XHJcbmZvbnQtc2l6ZTogMnJlbTtcclxuZm9udC13ZWlnaHQ6IDYwMDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxubGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG5iYWNrZ3JvdW5kOiAgI0I0MDQzMTtcclxuY29sb3I6ICNmZmZmZmY7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxudHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5idXR0b246aG92ZXIsIC5idXR0b246Zm9jdXMge1xyXG5iYWNrZ3JvdW5kOiAjREYwMTNBO1xyXG59XHJcblxyXG4uYnV0dG9uLWJsb2NrIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hXHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjREYwMTNBO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgICAgIFxyXG59XHJcbi5mb3Jnb3Qge1xyXG5tYXJnaW4tdG9wOiAtMjBweDtcclxudGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJsb2Nre1xyXG5kaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmVudHJ5LXNvY2lhbCB7bWFyZ2luLWJvdHRvbTogMjBweDsgbWFyZ2luLXRvcDogMjBweDsgY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtkaXNwbGF5OiBibG9jaztmb250LWZhbWlseTogJ09wZW4gU2FucycsVGFob21hLCBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZiwgRmFydW1hLCBGYXNleWhhO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogbm9ybWFsO2hlaWdodDogYXV0bztsaW5lLWhlaWdodDoyMy43OTk5OTkyMzcwNjA1NDdweDttYXJnaW4tYm90dG9tOiAyMHB4O3dpZHRoOiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtmbG9hdDpsZWZ0O2JvcmRlcjogc29saWQgMHB4ICNhYWE7dGV4dC1hbGlnbjogY2VudGVyO31cclxuICAgICAgXHJcbiAgICAgIC5lbnRyeS1zb2NpYWwgZGl2IHtkaXNwbGF5OiBibG9jazt3aWR0aDoxMzhweDttYXJnaW46MnB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazsgIFxyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcbiAgICAgIFxyXG4gICAgICAuZW50cnktc29jaWFsIGEge3RleHQtZGVjb3JhdGlvbjpub25lO2Rpc3BsYXk6IGJsb2NrO3BhZGRpbmctbGVmdDogMjBweDtjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OiBib2xkO3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3M7ICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5lbnRyeS1zb2NpYWwgLmZiIGEge3BhZGRpbmc6IDdweCAxMHB4IDdweCAyNnB4O2JhY2tncm91bmQ6ICMzQjU5OTkgdXJsKCdodHRwOi8vMy5icC5ibG9nc3BvdC5jb20vLXlxRDIzNjNYdUFvL1VlRGs5OHR3U2xJL0FBQUFBQUFBQXJnL2tYSXpGQldtY3pNL3MxNjAwL2ZiMTQucG5nJykgbm8tcmVwZWF0IDEwcHggY2VudGVyO31cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLmVudHJ5LXNvY2lhbCAuZ3BsdXMgYSB7cGFkZGluZzogN3B4IDEwcHggN3B4IDMycHg7YmFja2dyb3VuZDogI0Q1NDEzNSB1cmwoJ2h0dHA6Ly8zLmJwLmJsb2dzcG90LmNvbS8tQThmRlJleHpfemsvVWVEbGdhZHZwaUkvQUFBQUFBQUFBcncvVFJkN05XTndvOXMvczE2MDAvZ3BsdXMxNC5wbmcnKSBuby1yZXBlYXQgMTBweCBjZW50ZXI7fVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5lbnRyeS1zb2NpYWwgLmZiIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNzUsIDEyOSk7fVxyXG4gICAgICBcclxuICAgICAgLmVudHJ5LXNvY2lhbCAuZ3BsdXMgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgNTIsIDQwKTt9XHJcbiAgICAgIFxyXG4gICAgICAiLCIqLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuYnV0dG9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0RGMDEzQTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNCNDA0MzE7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogNDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRhYi1ncm91cCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDQwcHggMDtcbn1cblxuLnRhYi1ncm91cDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRhYi1ncm91cCBsaSBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2MCwgMTc5LCAxNzYsIDAuMjUpO1xuICBjb2xvcjogI2EwYjNiMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi50YWItZ3JvdXAgbGkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0RGMDEzQTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjQjQwNDMxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAgMCA0MHB4O1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIGxlZnQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmdyYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBiM2IwO1xufVxuXG5sYWJlbCAucmVxIHtcbiAgbWFyZ2luOiAycHg7XG4gIGNvbG9yOiAjQjQwNDMxO1xufVxuXG5sYWJlbC5hY3RpdmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICBsZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxubGFiZWwuYWN0aXZlIC5yZXEge1xuICBvcGFjaXR5OiAwO1xufVxuXG5sYWJlbC5oaWdobGlnaHQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBiM2IwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yNXMgZWFzZSwgYm94LXNoYWRvdyAwLjI1cyBlYXNlO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLWNvbG9yOiAjQjQwNDMxO1xufVxuXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMGIzYjA7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi5maWVsZC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udG9wLXJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRvcC1yb3cgPiBkaXYge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDQ4JTtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbn1cblxuLnRvcC1yb3cgPiBkaXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbiAgYmFja2dyb3VuZDogI0I0MDQzMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogI0RGMDEzQTtcbn1cblxuLmJ1dHRvbi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNERjAxM0E7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG59XG5cbi5mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZW50cnktc29jaWFsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgVGFob21hLCBWZXJkYW5hLCBBcmlhbCwgc2Fucy1zZXJpZiwgRmFydW1hLCBGYXNleWhhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIzLjc5OTk5OTIzNzFweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBzb2xpZCAwcHggI2FhYTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZW50cnktc29jaWFsIGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTM4cHg7XG4gIG1hcmdpbjogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5lbnRyeS1zb2NpYWwgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLmVudHJ5LXNvY2lhbCAuZmIgYSB7XG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAyNnB4O1xuICBiYWNrZ3JvdW5kOiAjM0I1OTk5IHVybChcImh0dHA6Ly8zLmJwLmJsb2dzcG90LmNvbS8teXFEMjM2M1h1QW8vVWVEazk4dHdTbEkvQUFBQUFBQUFBcmcva1hJekZCV21jek0vczE2MDAvZmIxNC5wbmdcIikgbm8tcmVwZWF0IDEwcHggY2VudGVyO1xufVxuXG4uZW50cnktc29jaWFsIC5ncGx1cyBhIHtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDMycHg7XG4gIGJhY2tncm91bmQ6ICNENTQxMzUgdXJsKFwiaHR0cDovLzMuYnAuYmxvZ3Nwb3QuY29tLy1BOGZGUmV4el96ay9VZURsZ2FkdnBpSS9BQUFBQUFBQUFydy9UUmQ3TldOd285cy9zMTYwMC9ncGx1czE0LnBuZ1wiKSBuby1yZXBlYXQgMTBweCBjZW50ZXI7XG59XG5cbi5lbnRyeS1zb2NpYWwgLmZiIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI0YjgxO1xufVxuXG4uZW50cnktc29jaWFsIC5ncGx1cyBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmMzQyODtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signin',
          templateUrl: './signin.component.html',
          styleUrls: ['./signin.component.scss']
        }]
      }], function () {
        return [{
          type: _signin_service__WEBPACK_IMPORTED_MODULE_2__["SigninService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _travel_service__WEBPACK_IMPORTED_MODULE_4__["TravelService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup.service.ts":
  /*!***********************************!*\
    !*** ./src/app/signup.service.ts ***!
    \***********************************/

  /*! exports provided: SignupService */

  /***/
  function srcAppSignupServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupService", function () {
      return SignupService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SignupService = /*#__PURE__*/function () {
      function SignupService(http) {
        _classCallCheck(this, SignupService);

        this.http = http;
        this._url = 'http://localhost:8080/user/register';
      }

      _createClass(SignupService, [{
        key: "enroll",
        value: function enroll(user) {
          return this.http.post(this._url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.errorHandler));
        }
      }, {
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }
      }]);

      return SignupService;
    }();

    SignupService.ɵfac = function SignupService_Factory(t) {
      return new (t || SignupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SignupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SignupService,
      factory: SignupService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/travel.service.ts":
  /*!***********************************!*\
    !*** ./src/app/travel.service.ts ***!
    \***********************************/

  /*! exports provided: TravelService */

  /***/
  function srcAppTravelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelService", function () {
      return TravelService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TravelService = /*#__PURE__*/function () {
      function TravelService(http) {
        _classCallCheck(this, TravelService);

        this.http = http;
        this._url_ = "http://localhost:8080/user/mybooking";
        this._url = 'http://localhost:8080/user/result';
        this.url_ = 'http://localhost:8080/user/booking';
        this.email = "";
        this.total_price = "";
        this.source = "";
        this.destination = "";
        this.hashqr = "";
        this.arrtime = "";
        this.name = "";
        this.reachTime = "";
        this.distance = "";
        this.tottime = "";
      }

      _createClass(TravelService, [{
        key: "bookinfo",
        value: function bookinfo(book) {
          return this.http.post(this.url_, book).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandle));
        }
      }, {
        key: "errorHandle",
        value: function errorHandle(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }
      }, {
        key: "journey",
        value: function journey(book) {
          return this.http.post(this._url_, book).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandle));
        }
      }, {
        key: "loc",
        value: function loc(location) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          this.loadToken();
          headers.append('Authorization', this.authToken);
          headers.append('Content-Type', 'application/json');
          return this.http.post(this._url, location);
        }
      }, {
        key: "loadToken",
        value: function loadToken() {
          var token = localStorage.getItem('token');
          this.authToken = token;
        }
      }]);

      return TravelService;
    }();

    TravelService.ɵfac = function TravelService_Factory(t) {
      return new (t || TravelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TravelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TravelService,
      factory: TravelService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/travelloc.ts":
  /*!******************************!*\
    !*** ./src/app/travelloc.ts ***!
    \******************************/

  /*! exports provided: Location */

  /***/
  function srcAppTravellocTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });

    var Location = function Location(reach_time, source, destination) {
      _classCallCheck(this, Location);

      this.reach_time = reach_time;
      this.source = source;
      this.destination = destination;
    };
    /***/

  },

  /***/
  "./src/app/user.ts":
  /*!*************************!*\
    !*** ./src/app/user.ts ***!
    \*************************/

  /*! exports provided: User */

  /***/
  function srcAppUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(first_name, last_name, email, age, contact, password) {
      _classCallCheck(this, User);

      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.age = age;
      this.contact = contact;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\admin\IBM\RideASAP\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map