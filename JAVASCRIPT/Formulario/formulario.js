(function(){
    var formulario = document.getElementById('formulario'),
        usuario = formulario.usuario,
        contraseña = formulario.contraseña,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

    function validarUsuario(e){
        if(usuario.value == '' || usuario.value == null){
            console.log('Por favor agrega tu usuario');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor agrega tu usuario </li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarContraseña(e){
        if(contraseña.value == '' || contraseña.value == null){
            console.log('Por favor agrega tu contraseña');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor agrega tu contraseña </li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log('Por favor agrega tu sexo');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor agrega tu sexo </li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    function validarTerminos(e){
        if (terminos.checked == false){
            console.log('Por favor acepta los terminos');
            error.style.display = 'block';
            error.innerHTML += '<li> Por favor acepta los terminos </li>'

            e.preventDefault();
        } else {
            error.style.display = 'none';

        }    
    } 

    function validarFormulario(e){
        error.innerHTML = '';

        validarUsuario(e);
        validarContraseña(e);
        validarSexo(e);
        validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario);
}())