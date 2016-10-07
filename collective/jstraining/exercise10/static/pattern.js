/* global require */

require([
  'jquery',
  'mockup-patterns-livesearch',
  'pat-registry'
], function($, Livesearch, registry) {
  'use strict';
  /* combining bundle and pattern in same file this example */


  // first, unregister existing pattern
  delete registry.patterns.livesearch;
  delete $.fn.patLivesearch;


  // creating new pattern automatically registers it
  Livesearch.extend({
    name: 'livesearch',
    trigger: '.pat-livesearch',
    parser: 'mockup',
    init: function() {
      var that = this;
      Livesearch.prototype.init.call(that);

      // all we're doing in this customization is defaulting to searching
      // current section
      $('.searchSection input', that.$el)[0].checked = true;
    }
  });

});
