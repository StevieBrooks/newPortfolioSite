const burgerMenu = document.querySelector('.burger-menu');
const burgerOptions = document.querySelector('.burger-menu-options');
const overlay = document.querySelector('.overlay');
const burgerItem = document.querySelectorAll('.burger-item');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
    burgerOptions.classList.toggle("active");
    overlay.classList.toggle("active");
})

burgerItem.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.toggle("active");
        burgerOptions.classList.toggle("active");
        overlay.classList.toggle("active");
    })
})