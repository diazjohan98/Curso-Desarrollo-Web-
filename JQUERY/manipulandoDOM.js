$(document).ready(function(){

  //  $('#titulo').text('Encabezado modificado');

    $('#titulo').html('<u>Encabezado modificado </u>');
    
    var nombre = $('#nombre');

    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    // $('#enlace').text('Facebook.com');
    // $('#enlace').attr('href', 'http://www.facebook.com');

    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });

});