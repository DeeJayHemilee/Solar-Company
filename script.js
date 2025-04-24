const bar = document.getElementById('menu-btn');
const close = document.getElementById('close-btn');
const nav = document.getElementById('navbar');
const searchIcon = document.querySelector(".fa-multiply");
const searchBtn = document.querySelector('.searchBtn');
const closeSearch = document.querySelector('.search-toggle');
const searchBox = document.querySelector('.search-box');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}