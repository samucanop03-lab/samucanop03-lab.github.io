// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
// Seleccionar elementos del DOM que vamos a manipular
const mobileMenuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');
const skillBars = document.querySelectorAll('.skill-level');
const scrollElements = document.querySelectorAll('.service-card, .project-card, .skill');
const themeToggle = document.createElement('button');
themeToggle.type = 'button';
themeToggle.className = 'dark-mode-toggle';
themeToggle.setAttribute('aria-label', 'Cambiar al modo claro');
document.body.appendChild(themeToggle);
const savedTheme = localStorage.getItem('darkMode') || localStorage.getItem('theme');

function setTheme(theme) {
document.documentElement.dataset.theme = theme;
const isDark = theme === 'dark';
themeToggle.textContent = isDark ? '☀️' : '🌙';
themeToggle.title = isDark ? 'Cambiar al modo claro' : 'Cambiar al modo oscuro';
themeToggle.setAttribute('aria-label', themeToggle.title);
localStorage.setItem('darkMode', theme);
}

setTheme(savedTheme === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', function() {
const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
setTheme(nextTheme);
});
/**
* Función para alternar el menú móvil
* Esta función añade/quita la clase 'active' al menú y al botón
de menú
*/
function toggleMobileMenu() {
mobileMenuToggle.classList.toggle('active');
nav.classList.toggle('active');
}
// Agregar el evento de clic al botón de menú móvil
if (mobileMenuToggle) {
mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}
/**
* Función para cerrar el menú móvil al hacer clic en cualquier
enlace
* Útil para que el menú se cierre automáticamente después de
seleccionar una opción
*/
function closeMenuOnClick() {
// Solo ejecutar en vista móvil
if (window.innerWidth <= 768) {
mobileMenuToggle.classList.remove('active');
nav.classList.remove('active');
}
}
// Agregar evento a todos los enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
link.addEventListener('click', closeMenuOnClick);
});
/**
* Función para animar las barras de habilidades cuando son
visibles
* Inicialmente las barras tienen width: 0 y se animan al valor
correcto
*/
function animateSkillBars() {

skillBars.forEach(bar => {
// Obtener el valor de ancho desde el style inline
const width = bar.style.width;
// Temporalmente configurar a 0 para la animación
bar.style.width = '0';
// Forzar un reflow (actualización del DOM)
void bar.offsetWidth;
// Restablecer el ancho original para activar la transición
bar.style.width = width;
});
}
/**
* Función para detectar elementos al hacer scroll
* Añade animaciones cuando los elementos son visibles en el
viewport
*/
function checkScrollAnimation() {
const triggerBottom = window.innerHeight * 0.8;
scrollElements.forEach(element => {
const elementTop = element.getBoundingClientRect().top;
if (elementTop < triggerBottom) {
element.classList.add('animate');
}
});
}
/**
* Función para desplazamiento suave a las secciones
* Permite navegar suavemente entre diferentes partes de la página
*/
function smoothScroll() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
// Solo proceder si el id existe
if (targetId !== '#') {
const targetElement =
document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 100,
behavior: 'smooth'
});
}
}
});
});
}
// Ejecutar funciones cuando la página carga
animateSkillBars();

checkScrollAnimation();
smoothScroll();
// Ejecutar ciertas funciones durante el scroll
window.addEventListener('scroll', checkScrollAnimation);
// Agregar estilos CSS para animaciones
const style = document.createElement('style');
style.innerHTML = `
/* Animaciones para elementos al hacer scroll */
.service-card, .project-card, .skill {
opacity: 0;
transform: translateY(20px);
transition: opacity 0.6s ease, transform 0.6s ease;
}
.service-card.animate, .project-card.animate, .skill.animate {
opacity: 1;
transform: translateY(0);
}
/* Animación para el botón de menú móvil */
.menu-toggle.active span:nth-child(1) {
transform: rotate(45deg) translate(5px, 5px);
}
.menu-toggle.active span:nth-child(2) {
opacity: 0;
}
.menu-toggle.active span:nth-child(3) {
transform: rotate(-45deg) translate(5px, -5px);
}
`;
// Añadir estilos al documento
document.head.appendChild(style);
/**
* Formulario de contacto básico (para añadir en la página de
contacto)
* Validación del lado del cliente antes de enviar
*/
const contactForm = document.getElementById('contact-form');
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
// Menú responsive
const menuToggle = document.querySelector('.menu-toggle');

const nav = document.querySelector('nav');
if (menuToggle) {
menuToggle.addEventListener('click', function() {
menuToggle.classList.toggle('active');
nav.classList.toggle('active');
});
}
// Cerrar el menú cuando se hace clic en un enlace (en modo móvil)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('click', function() {
if (window.innerWidth <= 768) {
menuToggle.classList.remove('active');
nav.classList.remove('active');
}
});
});
// Animación de scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 100,
behavior: 'smooth'
});
}
});
});
// Animación para las barras de progreso de habilidades

const progressBars = document.querySelectorAll('.progress');
// Función para animar las barras de progreso cuando son visibles
function animateProgressBars() {
progressBars.forEach(bar => {
const barPosition = bar.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;
if (barPosition < screenPosition) {

bar.style.width = bar.parentElement.getAttribute('data-progress') + '%';

}
});
}
// Llamar a la función cuando la página carga
animateProgressBars();
// Y también cuando se hace scroll
window.addEventListener('scroll', animateProgressBars);
// Efecto de aparición gradual para elementos
const fadeElements = document.querySelectorAll('.fade-in');
function checkFade() {
fadeElements.forEach(element => {
const elementPosition = element.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;
if (elementPosition < screenPosition) {
element.classList.add('visible');
}
});
}
// Añadir clase 'fade-in' a los elementos que quieres animar

document.querySelectorAll('.card, .skill, .hero h2, .hero p, .cta-buttons').forEach(element => {

element.classList.add('fade-in');
});

window.addEventListener('scroll', checkFade);
checkFade(); // Comprobar cuando la página carga
});
});

const contactForm =
document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
        document.getElementById("name").value.trim();

        const email =
        document.getElementById("email").value.trim();

        const subject =
        document.getElementById("subject").value.trim();

        const message =
        document.getElementById("message").value.trim();

        const result =
        document.getElementById("form-message");

        if (!name || !email || !subject || !message) {

            result.textContent =
            "Por favor completa todos los campos.";

            result.style.color = "#c0392b";

            return;
        }

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            `Hola, soy ${name} (${email}).\n\n${message}`
        );
        result.textContent =
        "Se abrirá tu aplicación de correo con el mensaje preparado. Revísalo y envíalo desde allí.";
        result.style.color = "#2475ad";
        window.location.href =
        `mailto:samucanop03@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    });

}