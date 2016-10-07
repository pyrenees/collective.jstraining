/* global require, FileReader, Image */

require([
  'jquery',
  'mockup-patterns-base',
], function($, Base) {
  'use strict';

  Base.extend({
    name: 'exercise7',
    trigger: '.pat-exercise7',
    parser: 'mockup',
    defaults: {
      minHeight: 200,
      minWidth: 200
    },
    init: function() {
      var that = this;

      that.$el.on('change', function(){
        if(this.files.length === 0){
          return;
        }

        var fr = new FileReader();
        fr.onload = function() {
          var img = new Image();
          img.onload = function() {
            if(img.width < that.options.minWidth ||
               img.height < that.options.minHeight){
              alert('Invalid image size. The image must be at least ' +
                    that.options.minWidth + 'x' + that.options.minHeight + '.');
              that.$el[0].value = '';
            }
          };
          img.src = fr.result;
        };
        fr.readAsDataURL(this.files[0]);
      });
    }
  });

});
