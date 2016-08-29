"use strict";
var http_1 = require('@angular/http');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/http/testing');
////////  SPECS  /////////////
describe('test', function () {
    it('should run a passing test', function () {
        expect(true).toEqual(true, 'should pass');
    });
});
describe('injectable', function () {
    xit('constructor should be', function () {
        expect(true).toEqual(true, 'should sting is private');
        it('constructor', function () {
            var constructor;
            expect('ArrayConstructor').toEqual(true, 'any');
        });
        it('should get fake connection'), testing_1.inject[http_1.XHRBackend], (testing_2.MockBackend, clientInformation);
        (function (any) {
            testing_2.MockBackend.connection.subscribe(function (connection) {
                connection.mockRespond(new response(new http_1.ResponseOptions({
                    body: JSON.stringify({
                        has_more: false,
                        data: any[{
                            name: 'name',
                            contact: 'contact',
                            address: 'address',
                            mail: 'mail'
                        }]
                    })
                })));
            });
        });
    });
});
;
;
//# sourceMappingURL=app.component.spec.js.map