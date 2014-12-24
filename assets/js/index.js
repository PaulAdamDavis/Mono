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

        function no_schema_links () {
            var links = document.querySelectorAll('.js-remove-domain-schema');
            if (links) {
                for (i = 0; i < links.length; ++i) {
                    var link = links[i],
                        text = link.innerHTML,
                        no_schema = text.replace(/.*?:\/\//g, "");
                    link.innerHTML = no_schema;
                }
            }
        }
        window.onload = function () {
            no_schema_links();
        }

    });
})(jQuery);