import { inject, Injectable, WritableSignal,signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CheckPlateFormService } from './../../../shared/sevices/checkPlateForm/check-plate-form.service';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {

  translateService:TranslateService = inject(TranslateService);
  checkPlateFormService:CheckPlateFormService = inject(CheckPlateFormService);
  currentLang:WritableSignal<string>=signal<string>("");

  constructor(){
    let defaultLang:string ="en";
    //check local storage language
    if (this.checkPlateFormService.checkIsPlateFormBrowser()){

      if(localStorage.getItem("lang")!= null){
        defaultLang=localStorage.getItem("lang")!;
      }
      this.currentLang.set(defaultLang);
      //the same steps in change because he checked whether the user has choosen a lang
      //2.
      this.translateService.setFallbackLang(defaultLang);
      //3.
      this.translateService.use(defaultLang);
      //4.
      this.changeDirection(defaultLang);

    }
  }

  changeDirection(lang:string){
    // if(lang==="ar"){
    //   document.dir='rtl';
    // }
    // else{
    //   document.dir='ltr';
    // }
    document.dir = lang === 'ar' ? 'rtl' : "ltr" ;
  }

  changeLanguage(lang:string){
    //1.
    localStorage.setItem("lang",lang);
    //2.
    this.translateService.setFallbackLang(lang);
    //3.
    this.translateService.use(lang);
    //4.
    this.changeDirection(lang);

    this.currentLang.set(lang);
  }
}
