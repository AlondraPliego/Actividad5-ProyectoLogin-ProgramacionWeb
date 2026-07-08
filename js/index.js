let correoGuardado = sessionStorage.getItem("correoIngresado");
if (!correoGuardado) {
    correoGuardado = "Usuario Invitado";
} 

menuDrop('menu-usuario', correoGuardado, ['Salir del sistema']);

const salir = document.querySelector('#menu-usuario a');

if (salir) {
    salir.addEventListener('click', function() {
        sessionStorage.removeItem("correoIngresado");
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
        //let correoCoincide = correoIngresado === correoSesion;
        if (correoValido === false) {
            mensaje.textContent = "Correo no válido.";
            mensaje.style.color = "red";
        } 
        /*else if (!correoCoincide) {
            mensaje.textContent = "El correo no coincide con el de tu sesión iniciada.";
            mensaje.style.color = "red";
        }*/
        else if (passwordValida === false) {
            mensaje.textContent = "La contraseña debe tener 8 caracteres, una mayúscula, una minúscula, un número y un símbolo especial.";
            mensaje.style.color = "red";
        }
        else {
            mensaje.textContent = " ¿Datos válidados";
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
function guardarDatos() {
    const numeroControl = document.getElementById("nc").value;
    const semestre = document.getElementById("semestre").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let mensajeErrorN = document.getElementById("errorNumeroControl");
    let mensajeErrorT = document.getElementById("errorSemestre");
    let mensajeErrorF = document.getElementById("errorFecha");
    mensajeErrorN.textContent = "";
    mensajeErrorT.textContent = "";
    mensajeErrorF.textContent = "";
    let valido = true;
    if (numeroControl === "" && semestre === "" && fechaNacimiento === "") {
        mensajeErrorN.textContent = "El campo no puede estar vacío.";
        mensajeErrorT.textContent = "El campo no puede estar vacío.";
        mensajeErrorF.textContent = "El campo no puede estar vacío.";
        return;
    }
    if (numeroControl === "") {
        mensajeErrorN.textContent = "El campo no puede estar vacío.";
        return;
    }
    if (semestre === "") {
        mensajeErrorT.textContent = "El campo no puede estar vacío.";
        return;
    }
    if (fechaNacimiento === "") {
        mensajeErrorF.textContent = "El campo no puede estar vacío.";
        return;
    }
    if (!soloNumeros(numeroControl)) {
        mensajeErrorN.textContent = "El número de control solo debe contener números.";
        valido = false;
    } else if (!validarLongitud(numeroControl, 6)) {
        mensajeErrorN.textContent = "Solo debe de tener 6 dígitos";
        valido = false;
    } else {
        mensajeErrorN.textContent = "";
    }
    document.getElementById("errorFecha").textContent = "";
    if (valido) {
        const edad = calcularEdad(fechaNacimiento);
        const mayor = esMayorDeEdad(fechaNacimiento);
        document.getElementById("nc-guardado").textContent = "Número de control: " + numeroControl;
        document.getElementById("semestre-guardado").textContent = "Semestre: " + semestre + "°";
        document.getElementById("edad-calculada").textContent = "Edad: " + edad + " años";
        document.getElementById("edad-validacion").textContent = mayor ? "Es mayor de edad" : "Es menor de edad";
        document.getElementById("modal").classList.remove("oculto");
    }
}

function cerrarModal() {
    document.getElementById("modal").classList.add("oculto");
}

function validarLongitud(numero, maxLongitud) {
    const texto = String(numero).trim();
    return texto.length == maxLongitud;
}
/** Calcula edad a partir de fecha de nacimiento */
function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    return edad;
}

/** Valida si es mayor de edad */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function soloNumeros(texto) {
    const patronL = /^[0-9]+$/;
    return patronL.test(texto);
}
document.getElementById("nc").addEventListener("focus", function() {
    document.getElementById("errorNumeroControl").textContent = "";
});

document.getElementById("semestre").addEventListener("focus", function() {
    document.getElementById("errorSemestre").textContent = "";
});
document.getElementById("fechaNacimiento").addEventListener("focus", function() {
    document.getElementById("errorFecha").textContent = "";
});