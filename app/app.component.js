"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import {WikipediaService} from './wikipedia.service';
var http_service_1 = require("./http.service");
var AppComponent = (function () {
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.items = [];
        this.asyncString = this.httpService.getData();
    }
    AppComponent.prototype.onSubmit = function (name, contact, address, mail) {
        this.httpService.sendData({ name: name, contact: contact, address: address, mail: mail })
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onGetData = function () {
        var _this = this;
        this.httpService.getOwnData()
            .subscribe(function (data) {
            var myArray = [];
            for (var key in data) {
                myArray.push(data[key]);
            }
            _this.items = myArray;
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'http.component.html'
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//export class WikiComponent {
//items: Observable<string[]>;
//constructor (private wikipediaService: WikipediaService) {}
// search (term: string) {
//     this.items = this.wikipediaService.search(term);
// }
// } 
//# sourceMappingURL=app.component.js.map