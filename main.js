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
            const section = document.querySelector(sectionID);
            const offset = 170; // Altura del header
            const top = section.getBoundingClientRect().top + window.scrollY - offset;
        
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    // Seleccionamos el icono del menú y el contenedor del menú nav
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Función para alternar el menú al hacer clic en el icono
    menuToggle.addEventListener('click', function(event) {
        navMenu.classList.toggle('active');
        event.stopPropagation(); // Detenemos la propagación del clic
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

    // Seleccionamos todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu-nav a');

    // Añadimos un evento a cada enlace del menú para que cierre el menú al hacer clic
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active'); // Cerramos el menú
        });
    });

    // Otras funcionalidades que quieras agregar
    console.log("Las funcionalidades de la página se han cargado correctamente.");
});