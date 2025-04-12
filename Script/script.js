const testimonials = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Client 1",
    img: "https://i.pravatar.cc/100?img=5" // woman
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Client 2",
    img: "https://i.pravatar.cc/100?img=12" // man
  },
  {
    text: "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
    name: "Client 3",
    img: "https://i.pravatar.cc/100?img=36" // woman
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
