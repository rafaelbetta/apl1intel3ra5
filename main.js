webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavedPage = /** @class */ (function () {
    function SavedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    SavedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SavedPage');
        var html_lista;
        this.storage.get('lista').then(function (lista) {
            for (var i = 0; i < lista.length; i++) {
                html_lista += '<ion-card> <ion-card-content> <ion-card-title> ' + lista[i] + ' </ion-card-title><br> <button ion-button full (click)="mostrar(2)"> Mostrar Resultado </button> </ion-card-content></ion-card><br>';
            }
            document.getElementById('nomes').innerHTML = html_lista;
        });
    };
    SavedPage.prototype.mostrar = function (X) {
        document.getElementById('nomes').style.display = 'none';
        document.getElementById('result').style.display = 'flex';
        document.getElementById('result').style.flexDirection = 'column';
        var html_resultado;
        this.storage.get('clientes').then(function (matriz) {
            html_resultado = '<h2>' + matriz[X].nome + '</h2>';
            html_resultado += '<h3> Matriz </h3>';
            for (var i = 0; i < Object.keys(matriz[X].Matriz).length; i++) {
                if (i <= 3) {
                    html_resultado += matriz[X].Matriz[i] + " tronco<br>";
                }
                else if (i <= 10) {
                    html_resultado += matriz[X].Matriz[i] + ' Ramais<br>';
                }
                else {
                    html_resultado += matriz[X].Matriz[i] + ' Acessórios<br>';
                }
            }
            document.getElementById('result').innerHTML = html_resultado;
        });
    };
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\saved\saved.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>saved</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button color=\'secondary\' ion-button full (click)="mostrar(1)">teste</button>\n  <div id="nomes">\n\n  </div>\n  <div id="result">\n    \n  </div>\n</ion-content>\n<style>\n\n#nomes ion-card-title {\n  font-size: 20px;\n}\n\n  ion-content{\n    background-color: lightgray;\n  }\n\n</style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\saved\saved.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/acc/acc.module": [
		277,
		5
	],
	"../pages/produtos/produtos.module": [
		278,
		4
	],
	"../pages/ramais/ramais.module": [
		279,
		3
	],
	"../pages/resultados/resultados.module": [
		280,
		2
	],
	"../pages/saved/saved.module": [
		281,
		1
	],
	"../pages/troncos/troncos.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__troncos_troncos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__produtos_produtos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saved_saved__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    HomePage.prototype.openTroncos = function () {
        var _this = this;
        var nome = prompt("Digite o nome do cliente"); //Nome do cliente para a simulação > entran o objeto
        var listaNomes = [];
        this.storage.get('lista').then(function (lista_salva) {
            if (lista_salva !== null) {
                lista_salva.push(nome);
                _this.storage.set('lista', lista_salva);
            }
            else {
                listaNomes = [nome];
                _this.storage.set('lista', listaNomes);
            }
        });
        var clienteId;
        this.storage.get('clientes').then(function (matriz) {
            if (matriz !== null) {
                clienteId = Object.keys(matriz).length;
                matriz[Object.keys(matriz).length] = {
                    id: Object.keys(matriz).length,
                    Nfilial: 0,
                    nome: nome
                };
                _this.storage.set('clientes', matriz);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__troncos_troncos__["a" /* TroncosPage */], { clienteId: clienteId });
            }
            else {
                matriz = {}; // é necessário definir como objeto utilizado o {}
                clienteId = 0;
                matriz[0] = {
                    id: 0,
                    Nfilial: 0,
                    nome: nome
                };
                _this.storage.set('clientes', matriz);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__troncos_troncos__["a" /* TroncosPage */], { clienteId: clienteId }); //O ID é o que vai ser utilizado para encontrar o objeto
            }
        });
    };
    HomePage.prototype.openProdutos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__produtos_produtos__["a" /* ProdutosPage */]);
    };
    HomePage.prototype.openSaved = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__saved_saved__["a" /* SavedPage */]);
    };
    HomePage.prototype.clear = function () {
        this.storage.remove('lista');
        this.storage.remove('clientes');
    };
    HomePage.prototype.load = function () {
        this.storage.get('lista').then(function (val) {
            console.log(val);
        });
        this.storage.get('clientes').then(function (matriz) {
            console.log(matriz);
            console.log(matriz[0]);
            if (matriz !== null) {
                console.log(Object.keys(matriz).length);
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Seletor UnniTI\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Bem vindo ao aplicativo seletor UnniTI</h3>\n  <p>Selecione alguma opção</p>\n  <button ion-button full block color=\'secondary\' (click)="openTroncos()">Começar</button>\n  <button ion-button full block color=\'secondary\' (click)="openSaved()">Simulações salvas</button>\n  <button ion-button full block color=\'secondary\' (click)="openProdutos()">Produtos</button>\n  <button ion-button full block color=\'secondary\' (click)="clear()">Limpa os dados</button>\n  <button ion-button full block color=\'secondary\' (click)="load()">Verificação dos dados</button>\n</ion-content>\n<style>\n  ion-content{\n    background-color: lightgray;\n  }\n</style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_troncos_troncos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ramais_ramais__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_acc_acc__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_produtos_produtos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resultados_resultados__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_troncos_troncos__["a" /* TroncosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ramais_ramais__["a" /* RamaisPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acc_acc__["a" /* AccPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_produtos_produtos__["a" /* ProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resultados_resultados__["a" /* ResultadosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/acc/acc.module#AccPageModule', name: 'AccPage', segment: 'acc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ramais/ramais.module#RamaisPageModule', name: 'RamaisPage', segment: 'ramais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultados/resultados.module#ResultadosPageModule', name: 'ResultadosPage', segment: 'resultados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/saved/saved.module#SavedPageModule', name: 'SavedPage', segment: 'saved', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/troncos/troncos.module#TroncosPageModule', name: 'TroncosPage', segment: 'troncos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_troncos_troncos__["a" /* TroncosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_ramais_ramais__["a" /* RamaisPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_acc_acc__["a" /* AccPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_produtos_produtos__["a" /* ProdutosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resultados_resultados__["a" /* ResultadosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_saved_saved__["a" /* SavedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_troncos_troncos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ramais_ramais__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_acc_acc__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_produtos_produtos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_resultados_resultados__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', Component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Troncos', Component: __WEBPACK_IMPORTED_MODULE_5__pages_troncos_troncos__["a" /* TroncosPage */] },
            { title: 'Ramais', Component: __WEBPACK_IMPORTED_MODULE_6__pages_ramais_ramais__["a" /* RamaisPage */] },
            { title: 'Acessórios', Component: __WEBPACK_IMPORTED_MODULE_7__pages_acc_acc__["a" /* AccPage */] },
            { title: 'Produtos', Component: __WEBPACK_IMPORTED_MODULE_8__pages_produtos_produtos__["a" /* ProdutosPage */] },
            { title: 'Resultados', Component: __WEBPACK_IMPORTED_MODULE_9__pages_resultados_resultados__["a" /* ResultadosPage */] }
        ];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TroncosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ramais_ramais__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TroncosPage = /** @class */ (function () {
    function TroncosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.TrAn = '';
        this.TrDi = '';
        this.TrIP = '';
        this.TrGSM = '';
        this.clienteId = navParams.get('clienteId');
    }
    TroncosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TroncosPage');
        console.log(this.clienteId);
    };
    TroncosPage.prototype.openRamais = function () {
        var Try = [];
        if (this.TrAn == "") {
            Try[0] = 0;
        }
        else {
            Try[0] = parseInt(this.TrAn);
        }
        if (this.TrDi == "") {
            Try[1] = 0;
        }
        else {
            Try[1] = parseInt(this.TrDi);
        }
        if (this.TrIP == "") {
            Try[2] = 0;
        }
        else {
            Try[2] = parseInt(this.TrIP);
        }
        if (this.TrGSM == "") {
            Try[3] = 0;
        }
        else {
            Try[3] = parseInt(this.TrGSM);
        }
        //Os IFs são necessários, pois não tem como converter vazio '' direto para um número inteiro;
        var x = Try[0] + Try[1] + Try[2] + Try[3];
        if (x >= 60) {
            alert("O número máximo de troncos permitidos é de 60, reveja o número. Atual: " + x);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ramais_ramais__["a" /* RamaisPage */], {
                TroncoArray: Try,
                clienteId: this.clienteId
            });
        }
    };
    TroncosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-troncos',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\troncos\troncos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Troncos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Etapa 1: Troncos</h3>\n  <p>\n    Informe a quantidade de cada item:<br>\n    A quantidade máxima de alguns campos serão automaticamente alteradas de acordo com o preenchimento do campo anterior.\n  </p>\n  <p>O numero máximo de troncos disponíveis é 60</p>\n  <ion-item>\n    <ion-label> Troncos Digitais</ion-label>\n    <ion-input id="di" placeholder="0-60" min=0 type=number max=60 [(ngModel)]="TrDi"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Troncos Analógicos</ion-label>\n    <ion-input [(ngModel)]="TrAn" placeholder="0-24"  class="input" min=0 type=number max=24></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Troncos GSM</ion-label>\n    <ion-input id="gsm" placeholder="0-24" min=0 type=number max=24 [(ngModel)]="TrGSM"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Troncos IP</ion-label>\n    <ion-input id="ip" placeholder="0-60" min=0 type=number max=60 [(ngModel)]="TrIP"></ion-input>\n  </ion-item>\n\n  <button ion-button block color=\'secondary\' (click)="openRamais()">Continuar</button>\n</ion-content>\n<style>\nion-item{\n  display: flex;\n  align-content: space-around;\n}\n.input {\nalign-self: flex-end;\n}\n\n  ion-content{\n    background-color: lightgray;\n  }\n\n</style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\troncos\troncos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TroncosPage);
    return TroncosPage;
}());

//# sourceMappingURL=troncos.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados_resultados__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccPage = /** @class */ (function () {
    function AccPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AcGC = '';
        this.AcCV = '';
        this.AcMV = '';
        this.AcDISA = '';
        this.TroncoArray = navParams.get('TroncoArray');
        this.RamalArray = navParams.get('RamalArray');
        this.clienteId = navParams.get('clienteId');
    }
    AccPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccPage');
        console.log(this.clienteId);
    };
    AccPage.prototype.openResultados = function () {
        var Ary = [];
        if (this.AcGC == "") {
            Ary[0] = 0;
        }
        else {
            Ary[0] = parseInt(this.AcGC);
        }
        if (this.AcCV == "") {
            Ary[1] = 0;
        }
        else {
            Ary[1] = parseInt(this.AcCV);
        }
        if (this.AcMV == "") {
            Ary[2] = 0;
        }
        else {
            Ary[2] = parseInt(this.AcMV);
        }
        if (this.AcDISA == "") {
            Ary[3] = 0;
        }
        else {
            Ary[3] = parseInt(this.AcDISA);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resultados_resultados__["a" /* ResultadosPage */], {
            TroncoArray: this.TroncoArray,
            RamalArray: this.RamalArray,
            AccArray: Ary,
            clienteId: this.clienteId
        });
    };
    AccPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-acc',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\acc\acc.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Acessórios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Etapa 3: Acessórios</h3>\n  <p>Paragrafo aqui</p>\n  \n  <label class="toggle">\n    <input type="checkbox">\n    <div class="track">\n      <div class="handle"></div>\n    </div>\n  </label>\n  <ion-item>\n    <ion-label> Gravação de chamadas </ion-label>\n    <ion-input placeholder="0-8" [(ngModel)]="AcGC"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Correio de voz </ion-label>\n    <ion-input placeholder="0-160" [(ngModel)]="AcCV"></ion-input><!--Varia entre 0 e ramais-->\n  </ion-item>\n  <ion-item>\n    <ion-label> Mesa virtual </ion-label>\n    <ion-input placeholder="0-10" [(ngModel)]="AcMV"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> DISA </ion-label>\n    <ion-input placeholder="0-20" [(ngModel)]="AcDISA"></ion-input>\n  </ion-item>\n\n  <button ion-button color=\'secondary\' block (click)="openResultados()">Continuar</button>\n</ion-content>\n<style>\n    ion-content{\n      background-color: lightgray;\n    }\n  </style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\acc\acc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AccPage);
    return AccPage;
}());

//# sourceMappingURL=acc.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__troncos_troncos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultadosPage = /** @class */ (function () {
    function ResultadosPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.Try = navParams.get('TroncoArray');
        this.Rry = navParams.get('RamalArray');
        this.Ary = navParams.get('AccArray');
        this.clienteId = navParams.get('clienteId');
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
        console.log(this.Try);
        console.log(this.Rry);
        console.log(this.Ary);
        console.log(this.clienteId);
    };
    ResultadosPage.prototype.Resultar = function () {
        var _this = this;
        var TroncoArray = this.Try; //Analogico, digital, ip, gsm
        var RamalArray = this.Rry; //Analogico, digital, IP, Sem display, Com display, Video chamada e Softphone
        var AccArray = this.Ary; //Gravação de chamadas, correio de voz, mesa virtual e DISA
        // ----- RAMAIS -----
        //Slots de Ramais Ana
        var RA = Math.ceil(RamalArray[0] / 16);
        //Slots de ramais dig
        var RD = Math.ceil(RamalArray[1] / 12);
        // ====== TRONCOS ======
        //Slots de troncos analogicos
        var TA = Math.ceil(TroncoArray[0] / 8);
        //Slots de troncos digitais 1E1 (30) e 2E1 (60)
        var TD1E1 = Math.ceil(TroncoArray[1] / 30); //  
        var TD2E1 = Math.floor(TD1E1 / 2); //  
        var TD = TD1E1 - TD2E1; //
        //Slots de troncos IP
        var TI = Math.ceil(TroncoArray[2] / 60);
        //Slots de troncos GSM
        var TG = Math.ceil((Math.ceil(TroncoArray[3] / 4)) / 2); //Número de slots
        var EG = Math.floor((Math.ceil(TroncoArray[3] / 4)) / 2); //Expansão
        //Calcula total de slots e escreve o resultado
        var slots = RA + RD + TA + TD + TI + TG;
        var Central;
        if (slots == 0) {
            Central = "Cetral não atende esse requisito (0 slots) <br>";
        }
        else if (slots < 7) {
            Central = "Central 2k <br>";
        }
        else if (slots < 11) {
            Central = "Central 3k <br>";
        }
        else {
            Central = "Nenhuma Central não atende esse requisito (" + slots + " slots [max = 10]) <br>";
        }
        document.getElementById("Central").innerHTML = Central; //Aqui bota o valor no <p id="central">
        //Escreve a quantidade de cada placas, sendo que a mista não foi considerada.
        var Placas = "<b>Placas requisitadas (" + slots + "):</b> <br>";
        if (RA > 0) {
            Placas += RA + "x Placa(s) para Ramal analógico<br>";
        }
        if (RD > 0) {
            Placas += RD + "x Placa(s) para Ramal digital<br>";
        }
        if (TA > 0) {
            Placas += TA + "x Placa(s) para Tronco analógico<br>";
        }
        if (TD1E1 > 0) {
            Placas += TD + "x Placa(s) para Tronco Digital (30)<br>";
        }
        if (TD2E1 > 0) {
            Placas += TD + "x Placa(s) para Tronco Digital (60)<br>";
        }
        if (TI > 0) {
            Placas += TI + "x Placa(s) para Tronco IP<br>";
        }
        if (TG > 0) {
            Placas += TG + "x Placa(s) para Tronco GSM, com " + EG + "x expansões<br>";
        }
        document.getElementById("Placas").innerHTML = Placas; //escreve no <p id='placas'>
        //Escreve as licenças necessárias para os acessórios
        var Acc = "<b>Licenças de acessórios requistados:</b> <br>";
        if (AccArray[0] > 0) {
            Acc += "Gravação de chamada <br>";
        }
        if (AccArray[1] > 0) {
            Acc += "Correio de voz <br>";
        }
        if (AccArray[2] > 0) {
            Acc += "Mesa virtual <br>";
        }
        if (AccArray[3] > 0) {
            Acc += "GISA<br>";
        }
        document.getElementById("Acc").innerHTML = Acc; // <p id="Acc">. O innerhtml modifica tudo o que ta dentro da tag e bota o que eu setar, no caso o texto
        document.getElementById("Title").style.display = "flex"; //Ativa o card do resultado
        //Aqui prepara o array para salvar no objeto
        var Array_select = [];
        Array_select[0] = TroncoArray[0];
        Array_select[1] = TroncoArray[1];
        Array_select[2] = TroncoArray[2];
        Array_select[3] = TroncoArray[3];
        Array_select[4] = RamalArray[0];
        Array_select[5] = RamalArray[1];
        Array_select[6] = RamalArray[2];
        Array_select[7] = RamalArray[3];
        Array_select[8] = RamalArray[4];
        Array_select[9] = RamalArray[5];
        Array_select[10] = RamalArray[6];
        Array_select[11] = AccArray[0];
        Array_select[12] = AccArray[1];
        Array_select[13] = AccArray[2];
        Array_select[14] = AccArray[3];
        var local; //A variável local serve para determinar se é matriz ou filial e o número da filial, para por no objeto
        var novoObjeto; // o "nome: valor" do objeto é criado antes e inserido de uma vez só
        this.storage.get('clientes').then(function (matriz) {
            for (var i = 0; i < Object.keys(matriz).length; i++) {
                if (_this.clienteId == matriz[i].id) {
                    if (matriz[i].Nfilial == 0) {
                        local = "Matriz";
                    }
                    else {
                        local = "Filial_" + matriz[i].Nfilial;
                    }
                    novoObjeto = matriz[i]; //copia a penas o objeto que possui o mesmo id, de um array de objetos
                    novoObjeto[local] = Array_select; // insere o local: array, no primeiro caso a Matriz: Array(15)
                    matriz[i] = novoObjeto;
                    _this.storage.set('clientes', matriz); //Salva o novo array de objetos, com apenas a matriz/filial modificada
                }
            }
        });
    };
    ResultadosPage.prototype.openTroncos = function () {
        var _this = this;
        //Para adicionar uma nova filial é passado o mesmo ID do objeto e é acrescentado 1 no contador de filiais do objeto
        var clienteId;
        this.storage.get('clientes').then(function (matriz) {
            for (var i = 0; i < Object.keys(matriz).length; i++) {
                if (_this.clienteId == matriz[i].id) {
                    matriz[i].Nfilial += 1; //+1 filial
                    clienteId = matriz[i].id; //Pega o ID
                    _this.storage.set('clientes', matriz); //Salva de novo para quando voltar para resultado o novo array_select seja vinculado ao local novo 
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__troncos_troncos__["a" /* TroncosPage */], { clienteId: clienteId });
                }
            }
        });
    };
    ResultadosPage.prototype.Salvar = function () {
        //O botão de salvar é, atualmente, puramente estético, já que a função do resultado já salva.
    };
    ResultadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resultados',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\resultados\resultados.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Resultados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button block color=\'secondary\' (click)="Resultar()">Simular</button>  \n  \n  <ion-card id="Resultado">\n      <img src=""/>\n      <ion-card-content>\n        <ion-card-title id="Title">\n          Resultado:\n        </ion-card-title>\n        <h3 id="Central"></h3>\n        <p id="Placas"></p>\n        <p id="Acc"></p>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button color=\'secondary\' block (click)="Salvar()">Salvar simulação</button> \n    <button ion-button color=\'secondary\' block (click)="openTroncos()">Filial</button> \n\n  </ion-content>\n\n<style>\n#Title{\n  display: none;\n}\n\n  ion-content{\n    background-color: lightgray;\n  }\n\n</style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\resultados\resultados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ResultadosPage);
    return ResultadosPage;
}());

//# sourceMappingURL=resultados.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RamaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__acc_acc__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RamaisPage = /** @class */ (function () {
    function RamaisPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.RaAn = '';
        this.RaDi = '';
        this.RaIP = '';
        this.RaSD = '';
        this.RaCD = '';
        this.RaVC = '';
        this.RaSP = '';
        this.TroncoArray = navParams.get('TroncoArray');
        this.clienteId = navParams.get('clienteId');
    }
    RamaisPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RamaisPage');
        console.log(this.TroncoArray);
        console.log(this.clienteId);
    };
    RamaisPage.prototype.openAcc = function () {
        var Rry = [];
        if (this.RaAn == "") {
            Rry[0] = 0;
        }
        else {
            Rry[0] = parseInt(this.RaAn);
        }
        if (this.RaDi == "") {
            Rry[1] = 0;
        }
        else {
            Rry[1] = parseInt(this.RaDi);
        }
        if (this.RaIP == "") {
            Rry[2] = 0;
        }
        else {
            Rry[2] = parseInt(this.RaIP);
        }
        if (this.RaSD == "") {
            Rry[3] = 0;
        }
        else {
            Rry[3] = parseInt(this.RaSD);
        }
        if (this.RaCD == "") {
            Rry[4] = 0;
        }
        else {
            Rry[4] = parseInt(this.RaCD);
        }
        if (this.RaVC == "") {
            Rry[5] = 0;
        }
        else {
            Rry[5] = parseInt(this.RaVC);
        }
        if (this.RaSP == "") {
            Rry[6] = 0;
        }
        else {
            Rry[6] = parseInt(this.RaSP);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__acc_acc__["a" /* AccPage */], {
            TroncoArray: this.TroncoArray,
            RamalArray: Rry,
            clienteId: this.clienteId
        });
    };
    RamaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ramais',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\ramais\ramais.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Ramais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Etapa 2: Ramais</h3>\n  <p>Paragrafo aqui</p>\n  <ion-item>\n    <ion-label> Ramais Digitais</ion-label>\n    <ion-input placeholder="0-48" min=0 type=number max=48 [(ngModel)]="RaDi"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Ramais Analógicos</ion-label>\n    <ion-input placeholder="0-160" min=0 type=number max=160 id="input" [(ngModel)]="RaAn"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Ramais IP </ion-label>\n    <ion-input placeholder="0-120" type=number min=0 max=120 [(ngModel)]="RaIP"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Sem display</ion-label>\n    <ion-input placeholder="0-120" min=0 type=number max=120 [(ngModel)]="RaSD"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Com display</ion-label>\n    <ion-input placeholder="0-120" min=0 type=number max=120 [(ngModel)]="RaCD"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Com vídeo chamada</ion-label>\n    <ion-input placeholder="0-120" min=0 type=number max=120 [(ngModel)]="RaVC"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label> Softphone </ion-label>\n    <ion-input placeholder="0-120" min=0 type=number max=120 [(ngModel)]="RaSP"></ion-input>\n  </ion-item>\n\n  <button ion-button block color=\'secondary\' (click)="openAcc()">Continuar</button>\n</ion-content>\n<style>\n    ion-content{\n      background-color: lightgray;\n    }\n  </style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\ramais\ramais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RamaisPage);
    return RamaisPage;
}());

//# sourceMappingURL=ramais.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutosPage = /** @class */ (function () {
    function ProdutosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProdutosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProdutosPage');
    };
    ProdutosPage.prototype.show = function (x) {
        switch (x) {
            case 1:
                document.getElementById("card-centrais").style.display = "flex";
                document.getElementById("card-placas").style.display = "none";
                document.getElementById("card-acc").style.display = "none";
                break;
            case 2:
                document.getElementById("card-centrais").style.display = "none";
                document.getElementById("card-placas").style.display = "flex";
                document.getElementById("card-acc").style.display = "none";
                break;
            case 3:
                document.getElementById("card-centrais").style.display = "none";
                document.getElementById("card-placas").style.display = "none";
                document.getElementById("card-acc").style.display = "flex";
                break;
            default:
                break;
        }
    };
    ProdutosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-produtos',template:/*ion-inline-start:"C:\Users\joseb\Ionic\appintelbras\src\pages\produtos\produtos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div class="prodRow">\n    <button ion-button color=\'secondary\' (click)="show(1)">Centrais</button>\n    <button ion-button color=\'secondary\' (click)="show(2)">Placas</button>\n    <button ion-button color=\'secondary\' (click)="show(3)">Acessórios</button>\n  </div>\n  <div class="card-container">\n    <div id="card-centrais">\n      <ion-card>\n        <img src=""/>\n        <ion-card-content>\n          <ion-card-title>\n            UnniTI 2000\n            </ion-card-title>\n          <p>\n            Solução eficaz para a integração de redes de voz e dados, ideal para pequenas e médias empresas. Com capacidade para até <b>6 placas adicionais</b>, ela chega a uma configuração máxima de 60 troncos IP, 96 ramais analógicos mais 120 ramais IP.\n          </p>\n          <p>Serial code: xxxx-xx</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=""/>\n        <ion-card-content>\n          <ion-card-title>\n            UnniTI 3000\n            </ion-card-title>\n          <p>\n            Solução eficaz para a integração de redes de voz e dados, ideal para pequenas e médias empresas. Com capacidade para até <b>10 placas adicionais</b>, ela chega a uma configuração máxima de 60 troncos IP, 160 ramais analógicos mais 120 ramais IP.\n          </p>\n          <p>Serial code: xxxx-xx</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div id="card-placas">\n      <ion-card>\n        <img src=""/>\n        <ion-card-content>\n          <ion-card-title>\n            Placa de ramais\n            </ion-card-title>\n          <p>\n            Ramal: em uma rede telefônica privada (PABX), refere-se a qualquer ramo de uma rede deste tipo.\n          </p>\n          <p>\n            Placa Ramal analógico: 16 ramais; <br>\n            Placa ramal digital: 36 ramais; <br>\n            Placa ramal IP: 120 ramais (Teórico);\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div id="card-acc">\n      <ion-card>\n        <img src=""/>\n        <ion-card-content>\n          <ion-card-title>\n            Gravação de chamdas\n          </ion-card-title>\n          <p>\n            Grava chamadas\n          </p>\n          <p>\n            Serial code: xxxx-xx\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n    </div>\n </div>\n\n\n\n</ion-content>\n<style>\n.prodRow{\n  display: flex;\n  justify-content: center;\n}\n\n#card-centrais  {\n  display: flex;\n  flex-direction: column;\n}\n\n#card-placas, #card-acc {\n  display: none;\n  flex-direction: column;\n}\n\n  ion-content{\n    background-color: lightgray;\n  }\n\n</style>'/*ion-inline-end:"C:\Users\joseb\Ionic\appintelbras\src\pages\produtos\produtos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProdutosPage);
    return ProdutosPage;
}());

//# sourceMappingURL=produtos.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map