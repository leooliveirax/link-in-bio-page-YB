import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
import "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";

window.addEventListener("DOMContentLoaded", () => {
  VANTA.NET({
    el: "#vantaBackground",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
  });

  setTimeout(() => {
    const content = document.querySelector(".content");

    content.classList.add("animated");
  }, 500);
});
