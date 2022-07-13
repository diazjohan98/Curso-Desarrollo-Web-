var cajas = document.getElementsByTagName('div');

//var cajas = document.getElementsByClassName('caja');
//cajas[0].textContent = 'Sebastian';
//cajas[0].innerHTML = '<h1>Vasquez</h1>'

var primeraCaja = document.getElementById('primeraCaja');

//primeraCaja.textContent = 'sebastian';
//primeraCaja.innerHTML = '<u>Vasquez</u>'


//---------CREANDO NODOS
// 1. crea el elemento
var caja = document.createElement('div');
// 2. crea un nodo de texto
var contenido = document.createTextNode('Sebastian Vasquez');
// 3. añadir el nodo de texto al elemento
caja.appendChild(contenido);
// 4. agregar atributos a las cajas
caja.setAttribute('class', 'caja naranja');

// 5. agregar el elemento al documento
//var contenedor = document.getElementById('contenedor');
//contenedor.appendChild(caja);

//-------Modificando la clase o id de un elemento 
caja.id = 'primera';
caja.className = 'caja naranja'

//-------Conociendo el elemento padre
var padre = cajas[0].parentNode;

//padre.insertBefore(caja, primeraCaja);/7posicionar cajas

padre.replaceChild(caja, cajas[2]);//para reemplazar cajas

padre.removeChild(cajas[3]);