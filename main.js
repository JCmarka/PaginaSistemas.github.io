// main.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js cargado correctamente");
    // Detectar el scroll y ocultar/mostrar el header
    let lastScrollTop = 0;
    const header = document.getElementById("header-id");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Desplazamiento hacia abajo - ocultamos el header
            
            header.classList.add("header-hidden");
            //console.log("hacia abajo")
        } else {
            // Desplazamiento hacia arriba - mostramos el header
            header.classList.remove("header-hidden");
            //console.log("hacia arriba")
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos en scroll
    });
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
            const offset = 180; // Altura del header
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
            header.classList.add("header-hidden");
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

    // Obtener todos los enlaces en el menú
    const links = document.querySelectorAll('.menu-nav a');

    // Agregar un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Eliminar la clase 'active' de todos los enlaces
            links.forEach(item => item.classList.remove('active'));
            // Agregar la clase 'active' al enlace que se hizo clic
            this.classList.add('active');
        });
    });
    // Otras funcionalidades que quieras agregar
    console.log("Las funcionalidades de la página se han cargado correctamente.");
});