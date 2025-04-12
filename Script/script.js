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
  const img = document.getElementById("clientImg");
  const text = document.getElementById("testimonialText");
  const name = document.getElementById("clientName");

  if (img && text && name) {
    img.src = t.img;
    img.onerror = function () {
      this.src = "https://via.placeholder.com/100?text=No+Image";
    };
    text.innerText = t.text;
    name.innerText = t.name;
  }
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

document.addEventListener("DOMContentLoaded", updateTestimonial);
