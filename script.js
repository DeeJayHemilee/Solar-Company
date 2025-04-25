document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('menu-btn');
    const close = document.getElementById('close-btn');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
    }
    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});