import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { JokeComponent } from './joke/joke.component';
import { JokeTestBedComponent } from './joke-test-bed/joke-test-bed.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    JokeComponent,
    JokeTestBedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }