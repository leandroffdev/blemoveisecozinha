// Botao menu hamburger
const menuMobile = document.querySelector('.menu-mobile');
function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('active');
    console.log('clicou', menu);
}
menuMobile.addEventListener('click', toggleMenu);