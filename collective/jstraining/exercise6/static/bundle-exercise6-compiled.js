/* global require */

define('exercise6',[
  'jquery',
  'mockup-patterns-base',
], function($, Base) {
  'use strict';

  var Pattern = Base.extend({
    name: 'exercise6',
    trigger: '.pat-exercise6',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
      var that = this;
      that.$el.append(' <span>Exercise 6 was here</span>');
    }
  });

  return Pattern;
});

require([
  'exercise6'
], function() {
  'use strict';
});

define("/Users/vangheem/code/minimalplone5/src/collective.jstraining/collective/jstraining/exercise6/static/bundle.js", function(){});

