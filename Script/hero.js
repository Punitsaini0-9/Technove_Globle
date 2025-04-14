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

    const heroHeight = hero.offsetHeight;

    if (window.scrollY > heroHeight - 50) { // small buffer for smoother transition
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
