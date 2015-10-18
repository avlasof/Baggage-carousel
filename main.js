(function() {
    $(window).on('load', function() {
        $('.boxes').removeClass('pause');
    });

    $('.button').hover(function() {
        $('.boxes').addClass('pause');
    }, function() {
        $('.boxes').removeClass('pause');
    });
})();