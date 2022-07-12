// querySelectror --> te va a retornar ya sea 0 o hasta 1 elemento que concuerde con el selector que estas escribiendo

const heading = document.querySelector(".header__texto h2") ;
//console.log(heading);

// querySelectorAll --> retorna 0 o todos los elementos que concuerden a ese selector

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Hola chupapija";


// Generar un nuevo enlace

const nuevoEnlace = document.createElement("A");

//console.log(nuevoEnlace)

//agregar el texto

nuevoEnlace.textContent = 'Un nuevo enlace';
//agregar clase

nuevoEnlace.classList.add("navegacion__enlace");
//agregar href

nuevoEnlace.href = "nuevo-enlace.html";

// agregarlo al Documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


// Eventos

//console.log(1);

window.addEventListener("load", function() { //load espera que el JS y los archivos que dependen de HTML esten listos
    //console.log(2);
} );

window.onload = function() {
    //console.log(3);
}

document.addEventListener('DOMContentLoaded', function (){ //solo espera por el HTML y no por las imagenes o CSS
    //console.log(4);
});
//console.log(5);


const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreinput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

nombreinput.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

// validar formulario

    const { nombre, email, mensaje } = datos;

    if(nombre === "" || email === '' || mensaje === '') {
        mostrarAlerta('Los campos no fueron completados', "error");
        return;
    }
    mostrarAlerta('El email a sido enviado con exito!');

    //enviar formulario
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value ;
}

function mostrarAlerta(mensaje, error) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    formulario.appendChild(alerta);

    if(error) {
        alerta.classList.add("error")
    } else {
        alerta.classList.add("correcto")
    }
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}