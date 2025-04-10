const image = document.querySelectorAll('input[name="slider"]');
let current = 0;

setInterval(() => {
    image[current].checked = false; 
    current = (current + 1) % image.length;
    image[current].checked = true;
}, 2000);

inputs[current].checked = true;
inputs[current].focus();
