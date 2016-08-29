import { Component } from '@angular/core';
//import {WikipediaService} from './wikipedia.service';
import { HttpService } from "./http.service";
import {Observable} from 'rxjs/observable';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'http.component.html'
})
export class AppComponent {
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {}

  onSubmit(name: string, contact: string, address: string, mail:string ) {
    this.httpService.sendData({name: name, contact: contact, address: address, mail: mail})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray:any[] = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
}
    //export class WikiComponent {
    //items: Observable<string[]>;
    //constructor (private wikipediaService: WikipediaService) {}
    // search (term: string) {
    //     this.items = this.wikipediaService.search(term);
    // }
    // }