import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  language: string = 'en'; 
  languages: any[] = [
    { key: 'en', value: 'English' },
    { key: 'fr', value: 'Français' },
    { key: 'pt', value: 'Português' }
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.setDefaultLanguage(this.language);
  }

  changeLanguage(event: any) {
    this.language = event.value; 
    this.translateService.use(this.language); 
  }

  setDefaultLanguage(value: string) {
    this.language = value;
  }
}
