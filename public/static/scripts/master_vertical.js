//var socket = new io.Socket();
// socket.io.io v7+ change
var socket = io.connect();

socket.on('message', function(update){ 
  //alert('msg received');
  var data = $.parseJSON(update);
  $(document).trigger(data);
});

var Media = {
    onNewMedia: function(ev) {
      $(ev.media).each(function(index, media) {
        //var numChildren = $('#wrapper').children().length;
        //var index = Math.floor(Math.random() * numChildren);
        //if(index % 2 == 0) {
        //  var $container = $($('#wrapper').children()[0]);
          $('#wrapper').append(
            '<div class="container"><img src='+media.images.low_resolution.url+' width="200" height="200"></div>'
          );
        /*} else {
          var $oldCube = $('.img', $container);
          $oldCube.fadeOut("slow");
          $oldCube.attr('src', media.images.low_resolution.url);
          $oldCube.fadeIn("slow");
        }*/
      });
    },
    positionAll: function() {
      $(window).load(function(){autoScroller('wrapper', 1)});
    }
};
/*
var Media = {
    onNewMedia: function(ev) {
        $(ev.media).each(function(index, media){
            $('<img/>').attr('src', media.images.low_resolution.url).load(function(){
            var numChildren = $('#wrapper').children().length;
            var index = Math.floor(Math.random() * numChildren);
            var $container = $($('#wrapper').children()[index]);
            var $oldCube = $('.cube', $container);

                if ($.browser.webkit){
                $newCube = $('<div class="cube in"><span class="location"></span><span class="channel"></span</div>');
                $newCube.prepend(this);
                $('.location', $newCube).html(media.location.name);
                $('.channel', $newCube).html(media.meta.location);
                $container.addClass('animating').append($newCube);
                $oldCube.addClass('out').bind('webkitAnimationEnd', function(){
                  $container.removeClass('animating');
                  $(this).remove();
                });
            } else {


                $('img', $oldCube).fadeOut("slow");
                  $('img', $oldCube).attr('src', media.images.low_resolution.url);
                  $('.location', $oldCube).html(media.location.name);
                  $('.channel', $oldCube).html(media.meta.location);
		              $('img', $oldCube).fadeIn("slow");

//            }
          }); 
        });
    },
    positionAll: function(){
      var columns = 5;
      var width = parseInt($('.container').css('width'));
      $('.container').each(function(index, item){
        $(item).css('top', 10+parseInt(index / columns) * width +'px')
        .css('left', 10+(index % columns) * width +'px');
        
        $(item).animate({
          'left': '+=' + width + 'px'
        }, {
          duration:10000
        });

      });
    }

};

*/

$(document).bind("newMedia", Media.onNewMedia)
