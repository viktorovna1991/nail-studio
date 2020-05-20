import {Inject, Injectable, InjectionToken, NgModule} from '@angular/core';

export const BASE_URL = new InjectionToken<string>('BASE_URL');

@NgModule()
export class AppCommonModule {
  static forRoot(host: string) {
    return {
      ngModule: AppCommonModule,
      providers: [{
        provide: BASE_URL,
        useValue: host
      }]
    };
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiHelper {

  url: string;

  constructor(@Inject(BASE_URL) BASE_URL: string){
    this.url = BASE_URL;
  }
}
