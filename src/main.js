import "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
import "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js";

window.addEventListener("DOMContentLoaded", () => {
  VANTA.HALO({
    el: "#vantaBackground",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
  });

  setTimeout(() => {
    const content = document.querySelector(".content");

    content.classList.add("animated");
  }, 500);
});
