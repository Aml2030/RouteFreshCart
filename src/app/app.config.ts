import { ApplicationConfig, provideBrowserGlobalErrorListeners ,importProvidersFrom} from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { setHeaderInterceptor } from './core/interceptores/setHeader/set-header-interceptor';
import { errorInterceptor } from './core/interceptores/error/error-interceptor';
import { spinnerInterceptor } from './core/interceptores/spinner/spinner-interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch(),withInterceptors([setHeaderInterceptor,errorInterceptor,spinnerInterceptor])),
    provideToastr(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
    provideAnimations(),
    importProvidersFrom(NgxSpinnerModule.forRoot())
  ]
};
