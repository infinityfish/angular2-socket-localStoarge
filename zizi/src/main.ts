import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ZiziAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(ZiziAppComponent);
