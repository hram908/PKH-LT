import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { FormData } from './formData';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormData],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
