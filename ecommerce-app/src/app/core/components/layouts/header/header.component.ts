import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { EXTENSIONS, LANGUAGES } from '../../../constant/constant';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.style.css'],
  animations: [
    trigger('toggleInput', [
      state(
        'hidden',
        style({
          opacity: 0,
          width: '0',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          width: '*',
        })
      ),
      transition('hidden => visible', [animate('300ms ease-in-out')]),
      transition('visible => hidden', [animate('300ms ease-in-out')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = true;
  showInput: boolean = false;
  languages: Array<Language> = LANGUAGES;
  logoScale = 1.5;
  sidebarVisible: boolean = false;

  searchValue: string | undefined;
  selectedLanguage: string = this.languages[0].code;
  languageName: string = this.languages[0].name;
  languageFlag: string = this.languages[0].flag;
  extensions: Array<Extension> = EXTENSIONS;
  subMenu: Array<SubMenu> = this.extensions.map((x) => x.subMenu).flat();

  blogs: Array<SubMenuItem> = [
    {
      name: 'OUR CULTURE',
      route: '',
    },
    {
      name: 'JOIN OUR TEAM',
      route: '',
    },
    {
      name: 'IN THE MEDIA',
      route: '',
    },
  ];
  private hideTimeout: any;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.logoScale = scrollPosition > 0 ? 1 : 1.5;
  }
  onMouseEnter() {
    this.showInput = true;
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  onMouseLeave() {
    this.hideTimeout = setTimeout(() => {
      this.showInput = false;
    }, 10000);
  }

  onSelectLanguage() {
    ///save to storage
    var language = this.languages.find((x) => x.code == this.selectedLanguage)!;
    if (language) {
      this.languageName = language.name;
      this.languageFlag = language.flag;
    }
  }
}

export class Extension {
  name: string = '';
  subMenu: Array<SubMenu> = [];
  type: 'default' | 'accessory' = 'default';
}
export interface SubMenu {
  name: string;
  route: string;
  items: Array<SubMenuItem>;
}
export interface SubMenuItem {
  name: string;
  route: string;
  src?: string;
}
export interface Language {
  code: string;
  name: string;
  flag: string;
}
