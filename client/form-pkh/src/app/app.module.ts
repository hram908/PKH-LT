import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormAPersonendatenComponent } from './formular/form-a-personendaten/form-a-personendaten.component';
import { FormBVersicherungenComponent } from './formular/form-b-versicherungen/form-b-versicherungen.component';
import { StartfensterComponent } from './formular/startfenster/startfenster.component';
import { FormsModule } from '@angular/forms';
import { AllgemeineDaten } from './allgemeineDaten';
import { ChatbotComponent } from './chatbot/chatbot.component';
import {ChatbotService} from './chatbot/chatbot-service';
import {FormAComponent} from './chatbot/form-a/form-a.component';
import {StepSpeicher} from './stepSpeicher';
import { FormCUnterhaltsanspruchComponent } from './formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import { FormDGewaehrterUnterhaltComponent } from './formular/form-d-gewaehrter-unterhalt/form-d-gewaehrter-unterhalt.component';
import { FormEBruttoeinnahmenComponent } from './formular/form-e-bruttoeinnahmen/form-e-bruttoeinnahmen.component';
import { FormFAbzuegeComponent } from './formular/form-f-abzuege/form-f-abzuege.component';
import { FormGEigentumComponent } from './formular/form-g-eigentum/form-g-eigentum.component';
import { FormHWohnkostenComponent } from './formular/form-h-wohnkosten/form-h-wohnkosten.component';
// tslint:disable-next-line
import { FormISonstigeVerpflichtungenComponent } from './formular/form-i-sonstige-verpflichtungen/form-i-sonstige-verpflichtungen.component';
import { FormJBesondereBelastungenComponent } from './formular/form-j-besondere-belastungen/form-j-besondere-belastungen.component';
import {FormAMaterial} from './formulardaten/form-a/form-a-material';
import {AppDirective} from './app.directive';
import { ViewSwitchComponent } from './navigation/view-switch.component';
import {ViewSwitchService} from './navigation/view-switch-service';
import {FormBMaterial} from './formulardaten/form-b/form-b-material';
import {FormCMaterial} from './formulardaten/form-c/form-c-material';
import {FormIMaterial} from './formulardaten/form-i/form-i-material';
import {FormJMaterial} from './formulardaten/form-j/form-j-material';
import {FormDMaterial} from './formulardaten/form-d/form-d-material';
import {FormEMaterial} from './formulardaten/form-e/form-e-material';
import {FormFMaterial} from './formulardaten/form-f/form-f-material';
import {FormGMaterial} from './formulardaten/form-g/form-g-material';
import {FormHMaterial} from './formulardaten/form-h/form-h-material';
import {PkhFormMaterial} from './formulardaten/pkh-form-material';
import {RestService} from './rest-api/rest-service';
import {HttpClientModule} from '@angular/common/http';
import {Fragen} from './common/fragen';
import { ChatbotFormBComponent } from './chatbot/chatbot-form-b/chatbot-form-b.component';
import { ChatbotFormCComponent } from './chatbot/chatbot-form-c/chatbot-form-c.component';
import { ChatbotFormDComponent } from './chatbot/chatbot-form-d/chatbot-form-d.component';
import { ChatbotFormEComponent } from './chatbot/chatbot-form-e/chatbot-form-e.component';
import { ChatbotFormFComponent } from './chatbot/chatbot-form-f/chatbot-form-f.component';
import { ChatbotFormGComponent } from './chatbot/chatbot-form-g/chatbot-form-g.component';
import { ChatbotFormHComponent } from './chatbot/chatbot-form-h/chatbot-form-h.component';
import { ChatbotFormIComponent } from './chatbot/chatbot-form-i/chatbot-form-i.component';
import { ChatbotFormJComponent } from './chatbot/chatbot-form-j/chatbot-form-j.component';




@NgModule({
  declarations: [
    AppComponent,
    FormAPersonendatenComponent,
    FormBVersicherungenComponent,
    StartfensterComponent,
    FormAComponent,
    ChatbotComponent,
    FormBVersicherungenComponent,
    FormCUnterhaltsanspruchComponent,
    FormDGewaehrterUnterhaltComponent,
    FormEBruttoeinnahmenComponent,
    FormFAbzuegeComponent,
    FormGEigentumComponent,
    FormHWohnkostenComponent,
    FormISonstigeVerpflichtungenComponent,
    FormJBesondereBelastungenComponent,
    AppDirective,
    ViewSwitchComponent,
    ChatbotFormBComponent,
    ChatbotFormCComponent,
    ChatbotFormDComponent,
    ChatbotFormEComponent,
    ChatbotFormFComponent,
    ChatbotFormGComponent,
    ChatbotFormHComponent,
    ChatbotFormIComponent,
    ChatbotFormJComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    FormAMaterial,
    FormBMaterial,
    FormCMaterial,
    FormDMaterial,
    FormEMaterial,
    FormFMaterial,
    FormGMaterial,
    FormHMaterial,
    FormIMaterial,
    FormJMaterial,
    PkhFormMaterial,
    Fragen,
    AllgemeineDaten,
    RestService,
    ViewSwitchService,
    ChatbotService,
    StepSpeicher
  ],
  entryComponents: [
    StartfensterComponent,
    FormAPersonendatenComponent,
    FormBVersicherungenComponent,
    FormCUnterhaltsanspruchComponent,
    FormDGewaehrterUnterhaltComponent,
    FormEBruttoeinnahmenComponent,
    FormFAbzuegeComponent,
    FormGEigentumComponent,
    FormHWohnkostenComponent,
    FormISonstigeVerpflichtungenComponent,
    FormJBesondereBelastungenComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
