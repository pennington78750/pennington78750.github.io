const menu = document.querySelector(".menu-bar");
const nav = document.querySelector(".nav-menu");
const navItem = document.querySelector(".nav-item");

menu.addEventListener("click", () => {
    navItem.classList.add("active");
    nav.classList.add("active");
});

window.addEventListener("click", (e) => {
    if (e.target == nav) {
        navItem.classList.remove("active");
        nav.classList.remove("active");
    }
});const selectElement = (element) => document.querySelector(element);
selectElement(".hamburger").addEventListener("click", () => {
    selectElement(".hamburger").classList.toggle("active");
    selectElement(".nav-list").classList.toggle("active");

