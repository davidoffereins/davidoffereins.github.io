$('input[id="menu-toggle"]').on('change',function(e) {
    if ($(this).prop('checked')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    };
    });