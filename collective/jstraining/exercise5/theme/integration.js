require([
  'jquery',
  '++theme++exercise5/lightgallery/js/lightgallery.min'
], function($){
  $(document).ready(function() {
    var $photos = $('.photoAlbumEntry a');
    if($photos.size() > 0){
      // we're on an album view page
      // we need to adjust links so the work nicely with light gallery
      $photos.each(function(){
        var $a = $(this);
        $a.attr('href', $a.attr('href').replace('/view', ''));
      });
      $("#content-core").lightGallery({
        selector: '.photoAlbumEntry a'
      });
    }
  });
});
