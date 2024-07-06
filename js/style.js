$(document).ready(function () {

    $('.navbar-toggler').click(function (e) { 
        
        if ($('.fas').hasClass('fa-bars')) {
            $('.fas').removeClass('fa-bars')
            $('.fas').addClass('fa-times')   
        } else {
            $('.fas').addClass('fa-bars')
            $('.fas').removeClass('fa-times')   
        }
        
    });

});