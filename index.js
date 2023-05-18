const navbar = document.querySelector("nav"),
openMenu = document.querySelector("#menu-button"), closeMenu = document.getElementById("menu-close");


openMenu.addEventListener("click", () => {
    navbar.classList.add("open")
});
closeMenu.addEventListener("click", () => {
    navbar.classList.remove("open");
});
