import {ModuleWithProviders, NgModule} from '@angular/core';
import {WindowRef} from './services/windowRef';
import {PlatformService} from './services/platform';

export * from './services/index';

@NgModule()
export class PlatformModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlatformModule,
      providers: [
        WindowRef,
        PlatformService
      ]
    }
  }
}
