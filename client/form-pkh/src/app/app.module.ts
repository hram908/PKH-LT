import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { FormData } from './formData';
import { InsuranceDataComponent } from './insurance-data/insurance-data.component';
import { FormAComponent } from './chatbot/form-a/form-a.component';
import { ChatbotComponent } from './chatbot/chatbot.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    InsuranceDataComponent,
    FormAComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [FormData],
  bootstrap: [AppComponent]
})
export class AppModule { }
