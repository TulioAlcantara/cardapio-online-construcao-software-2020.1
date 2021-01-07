(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/tulio/Dev/online-catalog/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "5RIZ":
    /*!*****************************************************!*\
      !*** ./src/app/services/catalog/catalog.service.ts ***!
      \*****************************************************/

    /*! exports provided: CatalogService */

    /***/
    function RIZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogService", function () {
        return CatalogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var CatalogService = /*#__PURE__*/function () {
        function CatalogService(firestore) {
          _classCallCheck(this, CatalogService);

          this.firestore = firestore;
        }

        _createClass(CatalogService, [{
          key: "getCatalogItensOfStore",
          value: function getCatalogItensOfStore(storeId) {
            return this.firestore.collection("stores").doc(storeId).collection("catalogList").get();
          }
        }]);

        return CatalogService;
      }();

      CatalogService.ɵfac = function CatalogService_Factory(t) {
        return new (t || CatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      CatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CatalogService,
        factory: CatalogService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyBGYDEQsshTuw76P1OnNA6mL6_hECGTv4c",
          authDomain: "online-catalog-ff7e8.firebaseapp.com",
          databaseURL: "https://online-catalog-ff7e8.firebaseio.com",
          projectId: "online-catalog-ff7e8",
          storageBucket: "online-catalog-ff7e8.appspot.com",
          messagingSenderId: "200052967113",
          appId: "1:200052967113:web:8e346e3fa8d92a6d9f2f18",
          measurementId: "G-5HXYD96FDG"
        }
      };
      /***/
    },

    /***/
    "GUFD":
    /*!*********************************************************!*\
      !*** ./src/app/models/catalogItem/catalogItem.model.ts ***!
      \*********************************************************/

    /*! exports provided: CatalogItemModel */

    /***/
    function GUFD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CatalogItemModel", function () {
        return CatalogItemModel;
      });

      var CatalogItemModel = /*#__PURE__*/function () {
        function CatalogItemModel() {
          _classCallCheck(this, CatalogItemModel);

          this.quantity = 0;
        }

        _createClass(CatalogItemModel, null, [{
          key: "fromFirestoreSnapshot",
          value: function fromFirestoreSnapshot(snapshot) {
            var catalogItem = new CatalogItemModel();
            catalogItem.name = snapshot.get("name");
            catalogItem.description = snapshot.get("description");
            catalogItem.picture = snapshot.get("picture");
            catalogItem.id = snapshot.id;
            catalogItem.value = snapshot.get("value");
            catalogItem.category = snapshot.get("category");
            return catalogItem;
          }
        }, {
          key: "getPictureUrl",
          value: function getPictureUrl(picturePath) {}
        }]);

        return CatalogItemModel;
      }();
      /***/

    },

    /***/
    "R8yp":
    /*!*****************************************************!*\
      !*** ./src/app/components/index/index.component.ts ***!
      \*****************************************************/

    /*! exports provided: IndexComponent */

    /***/
    function R8yp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
        return IndexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_store_store_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/store/store.model */
      "tfVf");
      /* harmony import */


      var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/store/store.service */
      "ooDN");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");

      var IndexComponent = /*#__PURE__*/function () {
        function IndexComponent(_storeService, _storage) {
          _classCallCheck(this, IndexComponent);

          this._storeService = _storeService;
          this._storage = _storage; //STORES

          this.storeList = Array();
        }

        _createClass(IndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadStores();
          }
        }, {
          key: "loadStores",
          value: function loadStores() {
            var _this = this;

            this._storeService.getStores().subscribe(function (storeListSnapshot) {
              if (!storeListSnapshot.empty) {
                storeListSnapshot.forEach(function (storeSnapshot) {
                  var store = src_app_models_store_store_model__WEBPACK_IMPORTED_MODULE_1__["StoreModel"].fromFirestoreSnapshot(storeSnapshot);

                  _this._storage.ref(store.logo).getDownloadURL().subscribe(function (url) {
                    store.logo = url;
                  });

                  _this.storeList.push(store);
                });
                console.log(_this.storeList);
              }
            });
          }
        }]);

        return IndexComponent;
      }();

      IndexComponent.ɵfac = function IndexComponent_Factory(t) {
        return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]));
      };

      IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IndexComponent,
        selectors: [["app-index"]],
        decls: 3,
        vars: 0,
        consts: [[1, "index-container"]],
        template: function IndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lojas Cadastradas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-index",
            templateUrl: "./index.component.html",
            styleUrls: ["./index.component.scss"]
          }]
        }], function () {
          return [{
            type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
          }, {
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'online-catalog';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 7,
        vars: 0,
        consts: [["color", "primary", 1, "navbar"], [1, "nav-icon-cart"], [1, "router-outlet"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Card\xE1pio Online");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"]
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
        }], null, null);
      })();
      /***/

    },

    /***/
    "W3Zi":
    /*!*****************************************************!*\
      !*** ./src/app/components/login/login.component.ts ***!
      \*****************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function W3Zi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 2,
        vars: 0,
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Y0LI":
    /*!*********************************************************************!*\
      !*** ./src/app/components/store-catalog/store-catalog.component.ts ***!
      \*********************************************************************/

    /*! exports provided: StoreCatalogComponent */

    /***/
    function Y0LI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreCatalogComponent", function () {
        return StoreCatalogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../checkout-modal/checkout-modal.component */
      "vhUM");
      /* harmony import */


      var src_app_models_store_store_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/store/store.model */
      "tfVf");
      /* harmony import */


      var _models_catalogItem_catalogItem_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../models/catalogItem/catalogItem.model */
      "GUFD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/catalog/catalog.service */
      "5RIZ");
      /* harmony import */


      var src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/store/store.service */
      "ooDN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire/storage */
      "Vaw3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV"); //TEST STORE ID = 2HWV3WYwqUzasmLDGYfB
      //ANGULAR
      //COMPONENTS
      //MODELS


      function StoreCatalogComponent_mat_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
        }
      }

      function StoreCatalogComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lanches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "location_on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.store.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.store.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.store.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.store.adress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.store.phone);
        }
      }

      function StoreCatalogComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.catalogListFilterControl);
        }
      }

      function StoreCatalogComponent_div_3_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StoreCatalogComponent_div_3_div_4_Template_input_change_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var catalogItem_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.handleQuantityChanges($event, catalogItem_r7.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var catalogItem_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", catalogItem_r7.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](catalogItem_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", catalogItem_r7.value.toFixed(2), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", catalogItem_r7.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", catalogItem_r7.quantity);
        }
      }

      function StoreCatalogComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreCatalogComponent_div_3_div_4_Template, 17, 5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var catalogCategory_r5 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](catalogCategory_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.getCatalogListFilteredByCategory(catalogCategory_r5));
        }
      }

      function StoreCatalogComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreCatalogComponent_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.openCheckoutModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.checkoutValueOutput);
        }
      }

      var StoreCatalogComponent = /*#__PURE__*/function () {
        function StoreCatalogComponent(dialog, _catalogService, _storeService, route, _storage) {
          _classCallCheck(this, StoreCatalogComponent);

          this.dialog = dialog;
          this._catalogService = _catalogService;
          this._storeService = _storeService;
          this.route = route;
          this._storage = _storage; //STORE

          this.store = new src_app_models_store_store_model__WEBPACK_IMPORTED_MODULE_3__["StoreModel"]();
          this.storeLoading = true; //CART

          this.cartList = Array();
          this.cartIsEmpty = true; //CATALOG LIST

          this.catalogList = Array();
          this.catalogListFiltered = Array();
          this.catalogListLoading = true;
          this.catalogListFilterControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
          this.catalogListCategories = [];
          this.catalogListCategoriesFiltered = [];
        }

        _createClass(StoreCatalogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.route.paramMap.subscribe(function (param) {
              _this2.selectedStoreId = param.get("id");

              _this2.getStoreInfo();

              _this2.getCatalogItensOfStore();

              _this2.setCatalogFilter();
            });
          }
        }, {
          key: "getStoreInfo",
          value: function getStoreInfo() {
            var _this3 = this;

            this._storeService.getStore(this.selectedStoreId).subscribe(function (storeSnapshot) {
              _this3.store = src_app_models_store_store_model__WEBPACK_IMPORTED_MODULE_3__["StoreModel"].fromFirestoreSnapshot(storeSnapshot);
              _this3.storeLoading = false;

              _this3._storage.ref(_this3.store.logo).getDownloadURL().subscribe(function (url) {
                _this3.store.logo = url;
              });
            });
          }
        }, {
          key: "getCatalogItensOfStore",
          value: function getCatalogItensOfStore() {
            var _this4 = this;

            this._catalogService.getCatalogItensOfStore(this.selectedStoreId).subscribe(function (catalogListSnapshot) {
              if (!catalogListSnapshot.empty) {
                catalogListSnapshot.forEach(function (catalogItemSnapshot) {
                  var catalogItem = _models_catalogItem_catalogItem_model__WEBPACK_IMPORTED_MODULE_4__["CatalogItemModel"].fromFirestoreSnapshot(catalogItemSnapshot);

                  _this4._storage.ref(catalogItem.picture).getDownloadURL().subscribe(function (url) {
                    catalogItem.picture = url;
                  });

                  _this4.catalogList.push(catalogItem);
                });
                _this4.catalogListLoading = false;
                _this4.catalogListFiltered = _this4.catalogList;

                _this4.getCategoriesList();
              }
            });
          }
        }, {
          key: "getCategoriesList",
          value: function getCategoriesList() {
            this.catalogListCategoriesFiltered = this.catalogListFiltered.map(function (catalogItem) {
              return catalogItem.category;
            }).filter(function (value, index, self) {
              return self.indexOf(value) === index;
            });
          }
        }, {
          key: "openCheckoutModal",
          value: function openCheckoutModal() {
            var dialogRef = this.dialog.open(_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutModalComponent"], {
              data: {
                cartList: this.cartList,
                whatsAppLink: this.createWhatsAppLink(),
                cartTotalValue: this.calculateTotalValue()
              }
            });
          }
        }, {
          key: "handleQuantityChanges",
          value: function handleQuantityChanges(event, id) {
            var newItemQuantity = parseInt(event.target.value);

            if (newItemQuantity < 0) {
              newItemQuantity = 0;
            }

            var selectedItemCatalogId = id;
            var newCartItem = this.newCartItemByCatalogId(selectedItemCatalogId);
            newCartItem.quantity = newItemQuantity;
            this.addItemToCart(newCartItem);
            this.updateCheckoutValue();
            this.btnCheckoutVisibility();
          }
        }, {
          key: "newCartItemByCatalogId",
          value: function newCartItemByCatalogId(catalogId) {
            var catalogItem = this.catalogList.find(function (item) {
              return item.id == catalogId;
            });
            var newCartItem;
            newCartItem = {
              name: catalogItem.name,
              catalogId: catalogItem.id,
              value: catalogItem.value,
              quantity: 0,
              picture: catalogItem.picture
            };
            return newCartItem;
          }
        }, {
          key: "updateCheckoutValue",
          value: function updateCheckoutValue() {
            var checkoutValue = 0;
            this.cartList.forEach(function (cartItem) {
              checkoutValue += cartItem.quantity * cartItem.value;
            });

            if (this.cartList.length) {
              this.checkoutValueOutput = " ($".concat(checkoutValue, ")");
              return;
            }

            this.checkoutValueOutput = "";
            return;
          }
        }, {
          key: "addItemToCart",
          value: function addItemToCart(cartItem) {
            if (cartItem.quantity == 0) {
              this.removeItemFromCart(cartItem);
              return;
            }

            var cartItemAlreadyExists = this.cartList.some(function (item) {
              return item.catalogId == cartItem.catalogId;
            });

            if (cartItemAlreadyExists) {
              var cartItemOnList = this.cartList.find(function (item) {
                return item.catalogId == cartItem.catalogId;
              });
              cartItemOnList.quantity = cartItem.quantity;
            } else {
              this.cartList.push(cartItem);
            }

            this.catalogListFiltered.find(function (item) {
              return item.id == cartItem.catalogId;
            }).quantity = cartItem.quantity;
            return;
          }
        }, {
          key: "removeItemFromCart",
          value: function removeItemFromCart(cartItem) {
            this.cartList.splice(this.cartList.findIndex(function (item) {
              return item.catalogId == cartItem.catalogId;
            }));
            return;
          }
        }, {
          key: "btnCheckoutVisibility",
          value: function btnCheckoutVisibility() {
            if (this.cartList.length) {
              this.cartIsEmpty = false;
              return;
            }

            this.cartIsEmpty = true;
            return;
          }
        }, {
          key: "createWhatsAppLink",
          value: function createWhatsAppLink() {
            var whatsAppLink;
            var storeNameFormated = this.store.name.split(" ").join("%20");
            var messageText = "Pedido%20da%20loja%20".concat(storeNameFormated, "%0D%0A%0D%0A");
            this.cartList.forEach(function (cartItem) {
              messageText += "".concat(cartItem.quantity, "%20x%20").concat(cartItem.name, "%20=>%20R$%20").concat(cartItem.value, "%0D%0A");
            });
            messageText += "%0D%0ATOTAL%20=>%20".concat(this.calculateTotalValue());
            whatsAppLink = "https://wa.me/".concat(this.store.phone, "?text=").concat(messageText);
            return whatsAppLink;
          }
        }, {
          key: "calculateTotalValue",
          value: function calculateTotalValue() {
            var cartTotalValue = 0;
            this.cartList.forEach(function (cartItem) {
              cartTotalValue += cartItem.value * cartItem.quantity;
            });
            return cartTotalValue;
          }
        }, {
          key: "setCatalogFilter",
          value: function setCatalogFilter() {
            var _this5 = this;

            this.catalogListFilterControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(100)).subscribe(function (filterValue) {
              _this5.catalogListFiltered = _this5.catalogList.filter(function (listItem) {
                return listItem.name.toLowerCase().includes(filterValue.toLowerCase());
              });

              _this5.getCategoriesList();
            });
          }
        }, {
          key: "getCatalogListFilteredByCategory",
          value: function getCatalogListFilteredByCategory(category) {
            return this.catalogListFiltered.filter(function (item) {
              return item.category == category;
            });
          }
        }]);

        return StoreCatalogComponent;
      }();

      StoreCatalogComponent.ɵfac = function StoreCatalogComponent_Factory(t) {
        return new (t || StoreCatalogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]));
      };

      StoreCatalogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StoreCatalogComponent,
        selectors: [["app-store-catalog"]],
        decls: 5,
        vars: 5,
        consts: [["color", "accent", 4, "ngIf"], ["class", "store-info-container", 4, "ngIf"], ["class", "catalog-filter", 4, "ngIf"], ["class", "catalog-category", 4, "ngFor", "ngForOf"], ["class", "btn-checkout", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["color", "accent"], [1, "store-info-container"], [1, "store-logo"], [3, "src"], [1, "store-info"], [1, "store-title"], [1, "store-description"], [1, "store-adress"], [1, "store-adress-icon"], [1, "store-phone"], [1, "store-phone-icon"], [1, "catalog-filter"], [1, "w-100"], ["matInput", "", "type", "text", 3, "formControl"], [1, "catalog-category"], [1, "catalog-category-title"], [1, "catalog-item-list"], ["class", "teste", 4, "ngFor", "ngForOf"], [1, "teste"], [1, "catalog-item"], [1, "catalog-item-picture", 3, "src"], [1, "catalog-item-info"], [1, "catalog-item-title"], [1, "catalog-item-value"], [1, "catalog-item-desc"], ["matInput", "", "type", "number", "min", "0", 1, "catalog-item-quantity-input", 3, "value", "change"], ["mat-raised-button", "", "color", "accent", 1, "btn-checkout", 3, "click"], ["id", "checkout-total-value"]],
        template: function StoreCatalogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreCatalogComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StoreCatalogComponent_div_1_Template, 18, 5, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StoreCatalogComponent_div_2_Template, 8, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StoreCatalogComponent_div_3_Template, 5, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StoreCatalogComponent_button_4_Template, 6, 1, "button", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storeLoading || ctx.catalogListLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.storeLoading && !ctx.catalogListLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.storeLoading && !ctx.catalogListLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.catalogListCategoriesFiltered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cartIsEmpty);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"]],
        styles: ["mat-spinner[_ngcontent-%COMP%] {\n  margin: auto auto;\n}\n\n.store-info-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n  margin-bottom: 3rem;\n}\n\n@media (max-width: 768px) {\n  .store-info-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-info[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-logo[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 200px;\n  height: 200px;\n}\n\n@media (max-width: 768px) {\n  .store-info-container[_ngcontent-%COMP%]   .store-logo[_ngcontent-%COMP%] {\n    margin: 0 auto 1rem auto;\n    width: 150px;\n    height: 150px;\n  }\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-description[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-adress-icon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.store-info-container[_ngcontent-%COMP%]   .store-phone-icon[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-category-title[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-item-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1rem;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-item-list[_ngcontent-%COMP%]   .catalog-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-item-list[_ngcontent-%COMP%]   .catalog-item[_ngcontent-%COMP%]   .catalog-item-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-item-list[_ngcontent-%COMP%]   .catalog-item[_ngcontent-%COMP%]   .catalog-item-info[_ngcontent-%COMP%]   .catalog-item-title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.catalog-category[_ngcontent-%COMP%]   .catalog-item-list[_ngcontent-%COMP%]   .catalog-item[_ngcontent-%COMP%]   .catalog-item-info[_ngcontent-%COMP%]   .catalog-item-value[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.btn-checkout[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  color: black;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWNhdGFsb2cvc3RvcmUtY2F0YWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUxGO0lBTUksMEJBQUE7SUFDQSxrQkFBQTtFQUdGO0FBQ0Y7O0FBREU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBSTtFQU5GO0lBT0ksd0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQUdKO0FBQ0Y7O0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUdOOztBQUNFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFESjs7QUFNRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBSko7O0FBTUk7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0FBSk47O0FBTU07RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUpSOztBQVFRO0VBQ0UsU0FBQTtBQU5WOztBQVFRO0VBQ0UsWUFBQTtBQU5WOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWhCRiIsImZpbGUiOiJzdG9yZS1jYXRhbG9nL3N0b3JlLWNhdGFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc3Bpbm5lcntcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG59XG5cbi5zdG9yZS1pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnN0b3JlLWluZm8ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgfVxuXG4gIC5zdG9yZS1sb2dvIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnN0b3JlLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5zdG9yZS1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IGdyZXk7XG4gIH1cblxuICAuc3RvcmUtYWRyZXNzLWljb24ge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICAuc3RvcmUtcGhvbmUtaWNvbiB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG59XG5cbi5jYXRhbG9nLWNhdGVnb3J5IHtcbiAgLmNhdGFsb2ctY2F0ZWdvcnktdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gIH1cblxuICAuY2F0YWxvZy1pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMXJlbTtcblxuICAgIC5jYXRhbG9nLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMXJlbTtcblxuICAgICAgLmNhdGFsb2ctaXRlbS1waWN0dXJlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXRhbG9nLWl0ZW0taW5mbyB7XG4gICAgICAgIC5jYXRhbG9nLWl0ZW0tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2F0YWxvZy1pdGVtLXZhbHVlIHtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmNhdGFsb2ctaXRlbS1kZXNjIHtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY2F0YWxvZy1pdGVtLXF1YW50aXR5LWlucHV0IHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ0bi1jaGVja291dCB7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreCatalogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-store-catalog",
            templateUrl: "./store-catalog.component.html",
            styleUrls: ["./store-catalog.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: src_app_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"]
          }, {
            type: src_app_services_store_store_service__WEBPACK_IMPORTED_MODULE_8__["StoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/login/login.component */
      "W3Zi");
      /* harmony import */


      var _components_store_catalog_store_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/store-catalog/store-catalog.component */
      "Y0LI");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/checkout-modal/checkout-modal.component */
      "vhUM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _components_index_index_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/index/index.component */
      "R8yp"); //ANGULAR
      //MATERIAL
      //FIREBASE


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[//ANGULAR
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], //MATERIAL
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], //ANGULAR
        _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _components_store_catalog_store_catalog_component__WEBPACK_IMPORTED_MODULE_5__["StoreCatalogComponent"], _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutModalComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_23__["IndexComponent"]],
          imports: [//ANGULAR
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], //MATERIAL
          _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _components_store_catalog_store_catalog_component__WEBPACK_IMPORTED_MODULE_5__["StoreCatalogComponent"], _components_checkout_modal_checkout_modal_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutModalComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_23__["IndexComponent"]],
            imports: [//ANGULAR
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], //MATERIAL
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__["MatAutocompleteModule"], //ANGULAR
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_21__["AngularFirestoreModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ooDN":
    /*!*************************************************!*\
      !*** ./src/app/services/store/store.service.ts ***!
      \*************************************************/

    /*! exports provided: StoreService */

    /***/
    function ooDN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreService", function () {
        return StoreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var StoreService = /*#__PURE__*/function () {
        function StoreService(_firestore) {
          _classCallCheck(this, StoreService);

          this._firestore = _firestore;
        }

        _createClass(StoreService, [{
          key: "getStore",
          value: function getStore(storeId) {
            return this._firestore.collection("stores").doc(storeId).get();
          }
        }, {
          key: "getStores",
          value: function getStores() {
            return this._firestore.collection("stores").get();
          }
        }]);

        return StoreService;
      }();

      StoreService.ɵfac = function StoreService_Factory(t) {
        return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
      };

      StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StoreService,
        factory: StoreService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tfVf":
    /*!*********************************************!*\
      !*** ./src/app/models/store/store.model.ts ***!
      \*********************************************/

    /*! exports provided: StoreModel */

    /***/
    function tfVf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoreModel", function () {
        return StoreModel;
      });

      var StoreModel = /*#__PURE__*/function () {
        function StoreModel() {
          _classCallCheck(this, StoreModel);
        }

        _createClass(StoreModel, null, [{
          key: "fromFirestoreSnapshot",
          //TODO: Adicionar categoria
          value: function fromFirestoreSnapshot(snapshot) {
            var store = new StoreModel();
            store.name = snapshot.get('name');
            store.description = snapshot.get('description');
            store.adress = snapshot.get('adress');
            store.phone = snapshot.get('phone');
            store.id = snapshot.id;
            store.logo = snapshot.get('logo');
            return store;
          }
        }]);

        return StoreModel;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_components_store_catalog_store_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app/components/store-catalog/store-catalog.component */
      "Y0LI");
      /* harmony import */


      var _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/index/index.component */
      "R8yp");

      var routes = [{
        path: '',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
      }, {
        path: ':id',
        component: _app_components_store_catalog_store_catalog_component__WEBPACK_IMPORTED_MODULE_2__["StoreCatalogComponent"]
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
    "vhUM":
    /*!***********************************************************************!*\
      !*** ./src/app/components/checkout-modal/checkout-modal.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CheckoutModalComponent */

    /***/
    function vhUM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckoutModalComponent", function () {
        return CheckoutModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function CheckoutModalComponent_mat_card_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var cartItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cartItem_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cartItem_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Quantity: ", cartItem_r1.quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R$ ", cartItem_r1.value * cartItem_r1.quantity, "");
        }
      }

      var CheckoutModalComponent = /*#__PURE__*/function () {
        function CheckoutModalComponent(data) {
          _classCallCheck(this, CheckoutModalComponent);

          this.cartTotalValue = 0;
          this.cartList = data.cartList;
          this.whatsAppLink = data.whatsAppLink;
          this.cartTotalValue = data.cartTotalValue;
        }

        _createClass(CheckoutModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CheckoutModalComponent;
      }();

      CheckoutModalComponent.ɵfac = function CheckoutModalComponent_Factory(t) {
        return new (t || CheckoutModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      CheckoutModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckoutModalComponent,
        selectors: [["app-checkout-modal"]],
        decls: 16,
        vars: 3,
        consts: [[1, "modal-checkout"], [1, "modal-checkout-title", "mat-dialog-title"], [1, "checkout-item-list"], [4, "ngFor", "ngForOf"], [1, "checkout-total"], [1, "checkout-total-text"], [1, "checkout-total-value"], [3, "href"], ["mat-raised-button", "", 1, "btn-checkout-whatsapp"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "aria-hidden", "true", "focusable", "false", "width", "1em", "height", "1em", "preserveAspectRatio", "xMidYMid meet", "viewBox", "0 0 24 24", 2, "-ms-transform", "rotate(360deg)", "-webkit-transform", "rotate(360deg)", "transform", "rotate(360deg)"], ["d", "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.188 8.188 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18c.21-.58.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01z", "fill", "#626262"], [1, "checkout-item"], [1, "checkout-item-card"], [1, "checkout-item-picture", 3, "src"], [1, "checkout-item-info"], [1, "checkout-item-title"], [1, "checkout-item-value"], [1, "checkout-item-total"], [1, "checkout-item-total-text"], [1, "checkout-item-total-value"]],
        template: function CheckoutModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Meu Carrinho");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutModalComponent_mat_card_4_Template, 14, 4, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Whatsapp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx.cartTotalValue, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.whatsAppLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: [".modal-checkout[_ngcontent-%COMP%]   .modal-checkout-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 1rem;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-item-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  gap: 1rem;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-item-card[_ngcontent-%COMP%]   .checkout-item-picture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n}\n@media (max-width: 768px) {\n  .modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-item-card[_ngcontent-%COMP%]   .checkout-item-picture[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-item-card[_ngcontent-%COMP%]   .checkout-item-total[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-item-card[_ngcontent-%COMP%]   .checkout-item-total[_ngcontent-%COMP%]   .checkout-item-total-value[_ngcontent-%COMP%] {\n  color: green;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-total[_ngcontent-%COMP%]   .checkout-total-text[_ngcontent-%COMP%] {\n  float: left;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .checkout-total[_ngcontent-%COMP%]   .checkout-total-value[_ngcontent-%COMP%] {\n  float: right;\n  color: green;\n}\n.modal-checkout[_ngcontent-%COMP%]   .checkout-item-list[_ngcontent-%COMP%]   .btn-checkout-whatsapp[_ngcontent-%COMP%] {\n  background-color: green;\n  color: white;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LW1vZGFsL2NoZWNrb3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0FBRk47QUFNTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBSlI7QUFLUTtFQUhGO0lBSUksWUFBQTtFQUZSO0FBQ0Y7QUFTTTtFQUNJLGtCQUFBO0FBUFY7QUFVUTtFQUNJLFlBQUE7QUFSWjtBQWdCTTtFQUNJLFdBQUE7QUFkVjtBQWdCTTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBZFY7QUFrQkk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJOIiwiZmlsZSI6ImNoZWNrb3V0LW1vZGFsL2NoZWNrb3V0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNoZWNrb3V0e1xuICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAubW9kYWwtY2hlY2tvdXQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5jaGVja291dC1pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiAxcmVtO1xuICBcbiAgICAuY2hlY2tvdXQtaXRlbS1jYXJkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICAgICAgZ2FwOiAxcmVtO1xuICBcbiAgXG4gIFxuICAgICAgLmNoZWNrb3V0LWl0ZW0tcGljdHVyZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAuY2hlY2tvdXQtaXRlbS1pbmZve1xuICBcbiAgICAgIH1cbiAgXG4gICAgICAuY2hlY2tvdXQtaXRlbS10b3RhbHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5jaGVja291dC1pdGVtLXRvdGFsLXRleHR7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWl0ZW0tdG90YWwtdmFsdWV7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgXG4gIFxuICAgIC5jaGVja291dC10b3RhbCB7XG4gICAgICAuY2hlY2tvdXQtdG90YWwtdGV4dCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgICAuY2hlY2tvdXQtdG90YWwtdmFsdWUge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuYnRuLWNoZWNrb3V0LXdoYXRzYXBwIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbn1cblxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-checkout-modal",
            templateUrl: "./checkout-modal.component.html",
            styleUrls: ["./checkout-modal.component.scss"]
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map