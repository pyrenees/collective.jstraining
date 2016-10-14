/* global require */

require([
  'jquery',
  'mockup-patterns-base',
  'tablesorter'
], function($, Base) {
  'use strict';

  /* combining bundle and pattern in same file this example */

  Base.extend({
    name: 'tablesorter',
    trigger: '.pat-tablesorter',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
      var that = this;
      that.$el.tablesorter();
    }
  });

});
