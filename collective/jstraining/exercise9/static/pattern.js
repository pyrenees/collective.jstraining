/* global require */

require([
  'jquery',
  'mockup-patterns-base',
  'exercise9-react'
], function($, Base, R) {
  'use strict';
  /* combining bundle and pattern in same file this example */

  var D = R.DOM;


  var Exercise9Component = R.createClass({
    render: function(){
      return D.div({}, [
        D.span({}, 'Foobar rendered by exercise 9')
      ]);
    }
  });

  Base.extend({
    name: 'exercise9',
    trigger: '.pat-exercise9',
    parser: 'mockup',
    defaults: {
    },
    init: function() {
      var that = this;
      R.render(R.createElement(Exercise9Component, that.options), that.$el[0]);
    }
  });

});
