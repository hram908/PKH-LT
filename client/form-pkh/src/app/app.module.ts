import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonendatenComponent } from './formular/personendaten/personendaten.component';
import { VersicherungsdatenComponent } from './formular/versicherungsdaten/versicherungsdaten.component';
import { StartfensterComponent } from './formular/startfenster/startfenster.component';
import { FormsModule } from '@angular/forms';
import { AllgemeineDaten } from './allgemeineDaten';
import { Formulardaten } from './formulardaten';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {ChatbotService} from './chatbot/chatbot-service';
import {FormAComponent} from './chatbot/form-a/form-a.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonendatenComponent,
    VersicherungsdatenComponent,
    StartfensterComponent,
    FormAComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Formulardaten,
    AllgemeineDaten,
    ChatbotService
  ],
  entryComponents: [
    StartfensterComponent,
    PersonendatenComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
