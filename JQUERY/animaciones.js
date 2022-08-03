$(document).ready(function(){


//  $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
             width: '+=300px',
             heigth: '+=300px',
            // opacity: '0.2'
             margin: '+=20px'
        }, 300, function(){
           // alert('fin de la animacion');
        });

        $('.caja').addClass('animacion');
    });
});