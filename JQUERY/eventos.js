$(document).ready(function(){
var boton = $('#boton');

    // boton.click(function(){ alert('Johan'); });

// Evento con funcion
    // function saludo(){
    //     alert('Saludos');
    // }

    // boton.click(saludo);
    
    // boton.on('click', saludo);

// Evento con Fallback

    // boton.on('mouseenter', function(){
    //     document.body.style.background = '#000';
    // });

    // boton.on('mouseleave', function(){
    //     document.body.style.background = '#FFF';
    // });

// Eliminando eventos

    // boton.on('click', function(){
    //     alert('saludos');
    //     console.log('saludos');
    // })
    
    // var desactivar = $('#desactivar');

    // desactivar.on('click', function(){
    //     boton.off('click')
    //     console.log(' Boton de ejecutar desactivado');
    // })

// Previniendo el comportamiento de los enlaces
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link desactivado')
    })

});