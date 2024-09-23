// main.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js cargado correctamente");

    // Función para manejar el envío de formularios de contacto
    const form = document.querySelector("#contacto form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita la recarga de la página
        
        const nombre = document.querySelector("#nombre").value;
        const email = document.querySelector("#email").value;
        const mensaje = document.querySelector("#mensaje").value;

        // Validación simple
        if (nombre && email && mensaje) {
            alert(`Gracias, ${nombre}, tu mensaje ha sido enviado correctamente.`);
            form.reset(); // Reinicia el formulario
        } else {
            alert("Por favor completa todos los campos antes de enviar.");
        }
    });

    // Función para navegar entre secciones
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionID = this.getAttribute('href');
            document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Otras funcionalidades que quieras agregar
    console.log("Las funcionalidades de la página se han cargado correctamente.");
});


// Seleccionamos el icono del menú y el contenedor del menú nav
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Función para alternar el menú al hacer clic en el icono
menuToggle.addEventListener('click', function(event) {
    navMenu.classList.toggle('active');
    event.stopPropagation(); // Detenemos la propagación del clic para que no cierre el menú inmediatamente
});

// Función para cerrar el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnMenuIcon = menuToggle.contains(event.target);

    // Si el clic no es dentro del menú ni en el icono, cerramos el menú
    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        navMenu.classList.remove('active');
    }
});
