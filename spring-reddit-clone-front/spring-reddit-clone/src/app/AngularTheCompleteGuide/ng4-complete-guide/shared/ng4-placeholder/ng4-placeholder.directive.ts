import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appNg4Placeholder]'
})
export class Ng4PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}

}


