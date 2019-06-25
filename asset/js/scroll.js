(function (global, $) {
    let 
    $menu = $('.geek_page_list li.geek_page_move'),
    $header_height = $('.geek_header')[0].offsetHeight,
    $contents = $('.scroll'),
    $doc = $('html, body');
    $(function (){
        $menu.on('click','a', function(e){ 
            var $target = $(this).parent(),
             idx = $target.index(),
              section = $contents.eq(idx),
            offsetTop = section.offset().top+$header_height; 
            console.log(offsetTop);

            $doc.stop()
                     .animate({ 
                        scrollTop :offsetTop 
               }, 800);
               return false; 
            });

    });

    $(window).scroll(function(){
        // console.log('scorll on');
         var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){ 
            
        var $target = $contents.eq(idx),
         i = $target.index(), targetTop = $target.offset().top; 
         console.log(targetTop, scltop);
         if (targetTop <= scltop) { 
             $menu.removeClass('active');
            $menu.eq(idx).addClass('active'); 
         }
         if (!(160 <= scltop)) {
             $menu.removeClass('active');
          } 
        }) 
    });



}(window, window.jQuery));