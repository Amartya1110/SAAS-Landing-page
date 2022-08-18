const hamMenu = document.querySelector(".ham-menu");
const navMenu = document.querySelector(".nav-menu");

hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-nav");
})

function removeClass() {
    if(window.innerWidth >= 920){
        navMenu.classList.remove("toggle-nav");
    }
}

window.addEventListener("resize", () => removeClass())



