import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]',
})

export class  AppDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}
