const image = document.querySelectorAll('input[name="slider"]');
let current = 0;

setInterval(() => {
    image[current].checked = false; 
    current = (current + 1) % image.length;
    image[current].checked = true;
}, 2000);

inputs[current].checked = true;
inputs[current].focus();

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector("#home");

    // Get the bottom position of the hero section
    const heroBottom = hero.offsetTop + hero.offsetHeight;

    // If scrollY goes past the hero's bottom, add 'scrolled' class
    if (window.scrollY >= heroBottom) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
