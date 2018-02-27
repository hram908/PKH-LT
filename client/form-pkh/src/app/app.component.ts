import {
  Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AllgemeineDaten} from './allgemeineDaten';
import {ViewSwitchService} from './navigation/view-switch-service';
import {Abschnitt} from './abschnitt';
import {RestService} from './rest-api/rest-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Prozesskostenhilfe-Helfer';

  constructor(private viewSwitchService: ViewSwitchService,
              private componentFactoryResolver: ComponentFactoryResolver,
              public allgemeineDaten: AllgemeineDaten, public rest: RestService) {
    this.viewSwitchService.formChanged.subscribe(this.onFormViewChanged);
  }

  ngOnInit() {
    this.erschaffeComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  erschaffeComponent() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.viewSwitchService.currentAbschnitt.component);
    this.componentRef = this.container.createComponent(factory);
  }

  private onFormViewChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {
      this.container.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(abschnitt.component);
      this.componentRef = this.container.createComponent(factory);
    }
  }
}
