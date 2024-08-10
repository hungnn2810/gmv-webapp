import {
  Component,
  ElementRef,
  AfterContentInit,
  ContentChild,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnchorComponent implements AfterContentInit {
  @ContentChild('content', { static: false }) content!: ElementRef;
  sections: { id: string; title: string }[] = [];

  ngAfterContentInit(): void {
    if (this.content) {
      this.generateAnchors();
    }
  }

  private generateAnchors(): void {
    const anchors =
      this.content.nativeElement.querySelectorAll('[id][data-anchor]');
    this.sections = Array.from(anchors).map((element) => {
      const htmlElement = element as HTMLElement;
      return {
        id: htmlElement.id,
        title: htmlElement.getAttribute('data-anchor') || 'No Title',
      };
    });
  }
}
