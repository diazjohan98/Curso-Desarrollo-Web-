$(document).ready(function(){

    var titulo = $('#titulo');
    var info = $('#info');

    // Calcula el ancho del elemento
    info.append('Ancho: ' + titulo.width() + '<br />');
    // Calcula el ancho del elemento + el paddding
    info.append('Ancho Interno: ' + titulo.innerWidth() + '<br />');
    // Calcula el ancho del elemento + el paddding + el borde
    info.append('Ancho Externo: ' + titulo.outerWidth() + '<br />');
    // Calcula el ancho del elemento + el paddding + el borde + margin
    info.append('Ancho Externo: ' + titulo.outerWidth(true) + '<br />');

    //-------------------


    // Calcula el alto del elemento
    info.append('Alto : ' + titulo.height() + '<br />');
    // Calcula el Alto del elemento + el paddding
    info.append('Alto Interno: ' + titulo.innerHeight() + '<br />');
    // Calcula el Alto del elemento + el paddding + el borde
    info.append('Alto Externo: ' + titulo.outerHeight() + '<br />')
    // Calcula el Alto del elemento + el paddding + el borde + el margin
    info.append('Alto Externo: ' + titulo.outerHeight(true) + '<br />')

});