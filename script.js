const burgerMenu = document.querySelector('.burger-menu');
const burgerOptions = document.querySelector('.burger-menu-options');

burgerMenu.addEventListener('click', () => {
    burgerOptions.classList.toggle("active");
})