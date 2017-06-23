import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from '@angular/common';
import {WindowRef} from './windowRef';

@Injectable()
export class PlatformService {
  /**
   * Returns true, if the current application is running within cordova.
   * This method should only be used for bootstrapping the application.
   */
  public static get isCordovaApplication(): boolean {
    // Global is only set when running on a server platform, where accessing window object would crash the application
    return !global && !!window.cordova;
  }

  constructor(@Inject(PLATFORM_ID) private _platformId: Object, private _windowRef: WindowRef) {
  }

  public get isCordovaApplication(): boolean {
    return !this.isServerApplication && PlatformService.isCordovaApplication;
  }

  public get isElectronApplication(): boolean {
    return !this.isServerApplication && !!this._windowRef.nativeWindow.navigator.userAgent.match(/Electron/);
  }

  public get isServerApplication(): boolean {
    return isPlatformServer(this._platformId);
  }

  public get isBrowserApplication(): boolean {
    return isPlatformBrowser(this._platformId);
  }
}
