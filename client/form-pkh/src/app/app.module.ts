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
import {FormularService} from './formular/formular-service';
import {FormBMaterial} from './formulardaten/form-b/form-b-material';
import {FormCMaterial} from './formulardaten/form-c/form-c-material';
import {FormIMaterial} from './formulardaten/form-i/form-i-material';
import {FormJMaterial} from './formulardaten/form-j/form-j-material';
import {FormDMaterial} from './formulardaten/form-d/form-d-material';
import {FormEMaterial} from './formulardaten/form-e/form-e-material';
import {FormFMaterial} from './formulardaten/form-f/form-f-material';
import {FormGMaterial} from './formulardaten/form-g/form-g-material';




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
    ViewSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FormAMaterial,
    FormBMaterial,
    FormCMaterial,
    FormDMaterial,
    FormEMaterial,
    FormFMaterial,
    FormGMaterial,
    FormIMaterial,
    FormJMaterial,
    AllgemeineDaten,
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
