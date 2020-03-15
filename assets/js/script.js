/* scrypt */
$(document).ready(function () {

    $(function () {
        var pull = $('#menuButton');
        menu = $('nav ul');

        $(pull).on('click', function (e) {
            e.preventDefault();
            menu.slideToggle().toggleClass('opened');
        });
    });
    
//    $(window).scroll(function (e) {
//        menu = $('nav ul');
//        if(menu.is(":visible")){
//            e.preventDefault();
//            menu.slideToggle().fadeToggle('opened');
//        }
//    });
});
/* scrypt */
