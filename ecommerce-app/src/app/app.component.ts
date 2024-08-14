import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  state = 'hidden';

  constructor(public translate: TranslateService) {
    translate.addLangs;
    ['en', 'vi'];
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    Aos.init({
      once: true,
    });
  }
}
