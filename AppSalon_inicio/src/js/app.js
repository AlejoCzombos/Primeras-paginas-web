let pagina = 1;

document.addEventListener("DOMContentLoaded", function() {
    iniciarApp();
});

function iniciarApp() {
    mostrarServicios();

    // Resaltar el DIV actual
    mostrarSeccion();

    //Oculta o muestra una seccion
    cambiarSeccion();

    paginaSiguiente();

    paginaAnterior();
}; 

function mostrarSeccion() {
    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion'); 

    //resalta elk tab actual   
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');
};

function cambiarSeccion() {
    const enlaces = document.querySelectorAll('.tabs button');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso);

            //Eliminar mostrar-seccion de la seccion anterior
            document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');

            //agrega mostrar-seccion
            const seccion = document.querySelector(`#paso-${pagina}`);
            seccion.classList.add('mostrar-seccion');

            //eliminar clase en tab 
            document.querySelector('.tabs .actual').classList.remove('actual');

            //agregar clase en tab
            const tab = document.querySelector(`[data-paso="${pagina}"]`);
            tab.classList.add('actual');
        });
    });
};

async function mostrarServicios() {
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        
        const {servicios} = db;

        //generar el HTML
        servicios.forEach( servicio => {
            const {id, nombre, precio} = servicio;

            //DOM scripting
            //Generar nombre
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio')

            //Generar precio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$ ${precio}`;
            precioServicio.classList.add('precio-servicio');

            //Generar div contenedor
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicios');
            servicioDiv.dataset.idServicio = id;
            
            // Seleccionar un servicio
            servicioDiv.onclick = seleccionarServicio;
            
            //Inyectar precio y nombre al div
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);
            
            //Incluir en HTML
            document.querySelector('.listado-servicios').appendChild(servicioDiv)
            
        });
    } catch (error) {
        
    }
}

function seleccionarServicio(e) {

    let elemento;
    //Forzar que el elemento al cuial le damos click sea el DIV
    if(e.target.tagName === 'P') {
        elemento = e.target.parentElement;
    } else {
        elemento = e.target;
    }

    if(elemento.classList.contains('seleccionado')) {
        elemento.classList.remove('seleccionado')
    } else {
        elemento.classList.add('seleccionado');
    }
    
};

function paginaSiguiente() {
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina++;
    });
}

function paginaAnterior() {
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina--;
    });
}