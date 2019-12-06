import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_LOCATION} from '../location-reducer';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {

  loc: string;
  date: Date;
  found_data:boolean;
  lan:string;

  constructor(private store: Store<any>,public translate: TranslateService) {
    //translation process
    translate.addLangs(['en', 'ar', 'bg', 'ca','de','cz','el','tr','zh_tw','zh_cn','es','it','fr','ru','ja']);
    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');
      translate.use(browserLang.match(/en|ar|bg|ca|de|cz|tr|zh_tw|zh_cn|es|it|fr|ru|ja/) ? browserLang : 'en');
    } else {
     // this language will be used as a fallback when a translation isn't found in the current language
      localStorage.setItem('locale', 'en');
      translate.setDefaultLang('en');
    }
    this.lan=localStorage.getItem('locale');
  }

  //function on change languges on page
  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
    //this.lan=localStorage.getItem('locale');
    this.lan=language;
  }

   search(searchForm: NgForm) {
    if (searchForm.invalid ) {
      return;
    }
    //This is where the search happens. The search keyword is propagated throughout the whole app by sending the keyword in the store
    this.store.dispatch({ type: SET_LOCATION, payload:this.loc});
    this.date = new Date();
    this.found_data=true;
  }
}

