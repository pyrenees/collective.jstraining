
if(String.prototype.startsWith){
  // weird conflict between es6 polyfills and plone's polyfills
  delete String.prototype.startsWith;
}

require('./app/polyfills.ts');
require('./app/vendor.ts');
require('./app/app.ts');
