import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { PersonalDataComponent } from './formular/personal-data/personal-data.component';
import { FormData } from './formData';
import { InsuranceDataComponent } from './formular/insurance-data/insurance-data.component';
import { GreetingWindowComponent } from './formular/greeting-window/greeting-window.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    InsuranceDataComponent,
    GreetingWindowComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormData],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
