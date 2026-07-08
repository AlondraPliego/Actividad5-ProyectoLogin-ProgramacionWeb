function validarLogin() {
    const correo = document.getElementById("correoLogin").value;
    const password = document.getElementById("passwordLogin").value;
    let mensajeErrorL = document.getElementById("errorCorreoLogin");
    let mensajeErrorP = document.getElementById("errorPasswordLogin");
    mensajeErrorL.textContent = "";
    mensajeErrorP.textContent = "";
    let hayError = false;
    if (correo === "") {
        mensajeErrorL.textContent = "El campo no puede estar vacío.";
        hayError = true;
    } else if (validarCorreo(correo) === false) {
        mensajeErrorL.textContent = "Correo inválido.";
        hayError = true;
    }
    if (password === "") {
        mensajeErrorP.textContent = "El campo no puede estar vacío.";
        hayError = true;
    } else if (validarPassword(password) === false) {
        mensajeErrorP.textContent = "Contraseña insegura (min 8, mayúscula, minúscula, número, símbolo)";
        hayError = true;
    }
    if (hayError) {
        return;
    }
    sessionStorage.setItem("correoIngresado", correo);
    window.location.href = "index.html";
}
document.getElementById("correoLogin").addEventListener("focus", function() {
    document.getElementById("errorCorreoLogin").textContent = "";
});

document.getElementById("passwordLogin").addEventListener("focus", function() {
    document.getElementById("errorPasswordLogin").textContent = "";
});