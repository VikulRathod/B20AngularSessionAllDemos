import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[vhaashCustomIf]'
})
export class CustomIfDirective {
  // private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set vhaashCustomIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!condition) {
      this.viewContainer.clear();
    }
    // if (condition && !this.hasView) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    //   this.hasView = true;
    // } else if (!condition && this.hasView) {
    //   this.viewContainer.clear();
    //   this.hasView = false;
    // }
  }
}
