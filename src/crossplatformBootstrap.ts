import {PlatformService} from './services/platform';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Type} from '@angular/core';

export const crossplatformBootstrap = <M>(module: Type<M>) => {
  const bootstrap = () => platformBrowserDynamic().bootstrapModule(module);

  if (PlatformService.isCordovaApplication) {
    return document.addEventListener('deviceready', bootstrap);
  }

  window.addEventListener('load', bootstrap);
};
