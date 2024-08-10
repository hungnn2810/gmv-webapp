import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'scroll-more-button',
  templateUrl: './scroll-more-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollMoreButton implements OnInit {
  @Input() theme: 'dark' | 'light' = 'dark';
  private sections: HTMLElement[] = [];

  ngOnInit(): void {
    this.sections = Array.from(
      document.querySelectorAll('section')
    ) as HTMLElement[];
  }
  scrollToNextSection(): void {
    const currentPosition = window.scrollY;
    let nextSection: HTMLElement | null = null;
    for (const section of this.sections) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY + 20;
      if (sectionTop > currentPosition) {
        nextSection = section;
        break;
      }
    }

    if (nextSection) {
      this.scrollIntoView(nextSection);
    }
  }

  private scrollIntoView(element: HTMLElement): void {
    // Use requestAnimationFrame for smooth scrolling
    const scrollTo = () => {
      element.scrollIntoView({ behavior: 'smooth' });
    };
    requestAnimationFrame(scrollTo);
  }
}
