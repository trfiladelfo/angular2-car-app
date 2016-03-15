System.register(["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/Rx"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var CarService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            CarService = (function () {
                function CarService(_http) {
                    this._http = _http;
                    this._apiUrl = "http://localhost:5000/api/";
                }
                CarService.prototype.getCars = function () {
                    return this._http.get(this._apiUrl + "cars")
                        .map(function (res) { return res.json(); })
                        .catch(this.throwError);
                };
                CarService.prototype.getCar = function (id) {
                    return this._http.get(this._apiUrl + "cars/:id".replace(":id", id.toString()))
                        .map(function (res) { return res.json(); })
                        .catch(this.throwError);
                };
                CarService.prototype.throwError = function (response) {
                    return Observable_1.Observable.throw(response.json().error || "Server error");
                };
                CarService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CarService);
                return CarService;
            })();
            exports_1("CarService", CarService);
        }
    }
});
//# sourceMappingURL=car-service.js.map