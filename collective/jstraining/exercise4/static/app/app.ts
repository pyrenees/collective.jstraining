import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  // make sure to load after doc is done loading...
  if(document.querySelector('my-app')){
    // only load if found...
    platformBrowserDynamic().bootstrapModule(AppModule);
  }
});
