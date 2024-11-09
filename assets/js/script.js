const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
