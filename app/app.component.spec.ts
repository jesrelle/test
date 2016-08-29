
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS, 
  XHRBackend, Response,
   ResponseOptions} from '@angular/http';
import { __core_private_testing__,
   TestBed, async, fakeAsync, 
   MetadataOverride, 
   TestModuleMetadata,
    addProviders, inject } from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {MockConnection} from '@angular/http/testing';
import { By }             from '@angular/platform-browser';
import {HttpService} from './http.service';

////////  SPECS  /////////////


describe('test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});
describe('injectable', () =>{
 xit ('constructor should be', () =>{
   expect(true).toEqual(true, 'should sting is private');
   it ('constructor', () =>{
     let constructor : ArrayConstructor
     expect('ArrayConstructor').toEqual(true, 'any')
   });
it('should get fake connection'), inject [XHRBackend], (MockBackend, clientInformation)any =>{
MockBackend.connection.subscribe(
(connection: MockConnection) => {
connection.mockRespond(new response(
  new ResponseOptions({
    body:JSON.stringify(
      {
        has_more: false
         data: any [{
          name:'name',
          contact:'contact',
          address:'address',
          mail:'mail'
        }]
      }
    );
  });
));

}

);


}
 });
});


