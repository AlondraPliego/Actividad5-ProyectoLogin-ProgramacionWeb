function validarLogin() {
    const correo = document.getElementById("correoLogin").value;
    const password = document.getElementById("passwordLogin").value;
    const correoValido = validarCorreo(correo);
    const passwordValida = validarPassword(password);
    let mensajeErrorL = document.getElementById("errorCorreoLogin");
    let mensajeErrorP = document.getElementById("errorPasswordLogin");
    let mensajeExito = document.getElementById("exitoLogin");
    mensajeErrorL.textContent = "";
    mensajeErrorP.textContent = "";
    if (correo === "" || password === "") {
        mensajeErrorP.textContent = "El campo no puede estar vacío.";
        mensajeErrorL.textContent = "El campo no puede estar vacío.";
        document.getElementById("correoLogin").focus();
        return;
    }
    if (correoValido === false || passwordValida === false ) {
        mensajeErrorL.textContent = "Correo inválido.";
        mensajeErrorP.textContent = "Contraseña insegura (min 8, mayúscula, minúscula, número, símbolo)";
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