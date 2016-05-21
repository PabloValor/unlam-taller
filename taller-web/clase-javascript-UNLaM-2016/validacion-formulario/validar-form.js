var formulario = document.getElementById('formulario');

var comentario = document.getElementById("comentario");
var contador = document.getElementById("cantidadCaracteres");

formulario.addEventListener('submit', verificarFormulario);
comentario.addEventListener('keyup', cantidadCaracteresDisponible);

function verificarFormulario(e) {
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var mensajeAlertaNombre = document.getElementById('alertaNombre');
	var mensajeAlertaApellido = document.getElementById('alertaApellido');
	var nombreValido = false;
	var apellidoValido = false;

	if(nombre.length == 0) {
		mensajeAlertaNombre.style.display = "block";
		e.preventDefault();
	} else {
		mensajeAlertaNombre.style.display = "none";
		nombreValido = true;
	}

	if(apellido.length == 0) {
		mensajeAlertaApellido.style.display = "block";
		e.preventDefault();
	} else {
		mensajeAlertaApellido.style.display = "none";
		apellidoValido = true;
	}

	if(nombreValido && apellidoValido) {
		alert("Formulario enviado con éxito!");
	} else {
		alert("Por favor, complete los campos obligatorios");
	}

}

function cantidadCaracteresDisponible() {
	contador.innerHTML = 130 - comentario.value.length;
}