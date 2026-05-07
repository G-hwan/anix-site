const header = document.querySelector(".site-header");
const visual = document.querySelector(".hero-visual");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

if (visual) {
  visual.addEventListener("pointermove", (event) => {
    const rect = visual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;

    visual.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  visual.addEventListener("pointerleave", () => {
    visual.style.transform = "";
  });
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
