function validarFormulario(): void {
  let usuario = document.getElementById("name").value;

  let contr = document.getElementById("pass").value;
  let email = document.getElementById("mail").value;
  let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (
    contr.length > 5 &&
    contr.length < 10 &&
    emailRegex.test(email) &&
    usuario.length > 3 &&
    usuario.length < 20
  ) {
    document.getElementById("in").style.display = "none";
    document.getElementById("cerrar").style.display = "flex";
    let saludo = document.getElementById("holaNombre");
    saludo.innerHTML = "Hola " + usuario;
  } else {
    alert("el nombre, mail o contraseña es incorrecto");
  }
}

let btn = document.getElementById("entrar");
btn.addEventListener("click", validarFormulario);

function cerrarSesion(): void {
  document.getElementById("in").style.display = "flex";
  document.getElementById("cerrar").style.display = "none";
  document.getElementById("holaNombre").style.display = "none";
}

let btnCerrar = document.getElementById("cerrar");
btnCerrar.addEventListener("click", cerrarSesion);
