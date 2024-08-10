import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { hasPrivilege } from '../guards/auth.guard';

@Directive({
  selector: '[canActivate]',
})
export class ElementActivateDirective {
  private hasRunOnce: boolean = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set canActivate(privilege: string) {
    if (!this.hasRunOnce && hasPrivilege(privilege)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasRunOnce = true;
    } else if (this.hasRunOnce && !hasPrivilege(privilege)) {
      this.viewContainer.clear();
    }
  }
}
