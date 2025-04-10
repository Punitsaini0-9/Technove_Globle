const image = document.querySelectorAll('input[name="slider"]');
let current = 0;

setInterval(() => {
    image[current].checked = false; 
    current = (current + 1) % image.length;
    image[current].checked = true;
}, 5000); 
const slides = document.querySelectorAll('.slide');

setInterval(() => {
    let activeIndex = [...slides].findIndex(slide =>
        slide.classList.contains('active')
    );

    if (activeIndex >= 0) {
        inputs.forEach(input => input.checked = false);
        inputs[activeIndex].checked = true;
    }
}, 5000);

inputs[current].checked = true;
// inputs[current].focus();
