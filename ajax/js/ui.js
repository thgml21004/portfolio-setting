$(function() {
    $(window).on('scroll', function() {
        let scrpos = $(this).scrollTop();
        if( scrpos > 80) {
            $("#hd").addClass("bg-dark border-bottom border-whitd").removeClass("bg-white")
        }else{
            $("#hd").removeClass("bg-dark border-bottom border-whitd").addClass("bg-white")
        }

        // $("body").attr("data-scrollps", $(this).scrollTop())
    })
})