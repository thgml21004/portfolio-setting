$(function() {
    $(window).on('scroll', function() {
        let scrpos = $(this).scrollTop();
        if( scrpos > 80) {
            $("#hd").addClass("scroll");
        }else{
            $("#hd").removeClass("scroll");
        }

        // $("body").attr("data-scrollps", $(this).scrollTop())
    })
})