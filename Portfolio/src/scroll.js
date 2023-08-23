ScrollReveal({ reset: true });

const elements = document.querySelectorAll(".timeline-container");

const options = {
  delay: 200,
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  scale: 0.9,
};

elements.forEach((element) => {
  ScrollReveal().reveal(element, options);
});
