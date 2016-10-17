$(window).resize(function(){
    var wd = $(document).width();

    if(wd > 1024) {
        $("header div.nav").slideDown(0);
    } else {
        $("header div.nav").slideUp(0);
    }
});

$(".toggle").click(function() {
   $("header div.nav").slideToggle(400);
});
