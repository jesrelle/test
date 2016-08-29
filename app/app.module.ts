import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';
// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';

import { HttpService } from "./http.service";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [HttpService
//     {provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
//     { provide: SEED_DATA }
]
 })
export class AppModule {}