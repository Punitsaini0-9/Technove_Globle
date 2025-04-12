const testimonials = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Client 1",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Client 2",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Client 3",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

let current = 0;

function updateTestimonial() {
  const t = testimonials[current];
  document.getElementById("testimonialText").innerText = t.text;
  document.getElementById("clientName").innerText = t.name;
  document.getElementById("clientImg").src = t.img;
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  updateTestimonial();
}

// Auto-switch every 5 seconds
setInterval(() => {
  nextTestimonial();
}, 5000);

// Initialize first testimonial
window.onload = updateTestimonial;
