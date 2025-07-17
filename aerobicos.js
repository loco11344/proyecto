document.addEventListener('DOMContentLoaded', () => {
    // ---- Navegación Responsiva ----
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active'); // Para animar el icono de hamburguesa si se desea
    });

    // Cerrar el menú cuando se hace clic en un enlace (para móviles)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            }
        });
    });

    // ---- Simulación de Formulario de Registro ----
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.getElementById('registrationMessage');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita el envío real del formulario

            const username = document.getElementById('regUsername').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value.trim();

            // Validación básica
            if (username === '' || email === '' || password === '') {
                registrationMessage.textContent = 'Por favor, completa todos los campos.';
                registrationMessage.className = 'message-area error';
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) { // Validación simple de email
                registrationMessage.textContent = 'Por favor, introduce un correo electrónico válido.';
                registrationMessage.className = 'message-area error';
                return;
            }

            // Simulación de envío al servidor (en un entorno real, aquí iría una llamada fetch/XMLHttpRequest)
            console.log('Intentando registrar:', { username, email, password });

            // Simular una respuesta exitosa
            setTimeout(() => {
                registrationMessage.textContent = `¡Registro exitoso para ${username}! Pronto recibirás un correo de confirmación.`;
                registrationMessage.className = 'message-area success';
                registrationForm.reset(); // Limpia el formulario
            }, 1500); // Retraso para simular una operación de red
        });
    }

    // ---- Smooth Scrolling (desplazamiento suave) para los enlaces de anclaje ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});