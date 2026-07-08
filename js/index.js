menuDrop('menu-usuario', 'Nombre de Usuario', ['Salir del sistema']);

const salir = document.querySelector('#menu-usuario a');

if (salir) {
    salir.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
}




function validarCorreo(correo) {
    let formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formato.test(correo);
}

function validarPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;
    
    let especial = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        } else if (caracter >= 'a' && caracter <= 'z') {
            tieneMinuscula = true;
        } else if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        } else if (especial.indexOf(caracter) !== -1) {
            tieneEspecial = true;
        }
    }

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        return true;
    } else {
        return false;
    }
}



const formularioCaptura = document.getElementById('formulario-captura');
const mensaje = document.getElementById('mensaje-validacion');

if (formularioCaptura) {
    formularioCaptura.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        let correoValido = validarCorreo(document.getElementById('correo').value);
        let passwordValida = validarPassword(document.getElementById('password').value);

        if (correoValido === false) {
            mensaje.textContent = "Correo no válido.";
            mensaje.style.color = "red";
        } 
        else if (passwordValida === false) {
            mensaje.textContent = "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial.";
            mensaje.style.color = "red";
        } 
        else {
            mensaje.textContent = " ";
        }
    });
}

  


const botonSidebar = document.getElementById('boton-sidebar');
const sidebar = document.getElementById('sidebar');

if (botonSidebar && sidebar) {
    botonSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('abierto');
    });
}