const menu = document.querySelector('.liste-nav');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
})
btn.addEventListener('click', () => {
    menu.classList.toggle('active-menu');
})
