(function($) {
    $(function(){

        // Responsive videos
        $(".post-content").fitVids();

        // Make images the ability to be wider than the content bleed out further
        if ($(".post-content img").length > 0) {
            var content_width = parseInt($(".post-content").css("width"));
            $(".post-content").find("img").each(function(){
                $(this).load(function(){
                    if ($(this)[0].naturalWidth > content_width) {
                        $(this).addClass("big");
                    }
                });
            });
        }

    });
})(jQuery);