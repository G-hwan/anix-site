const header = document.querySelector(".site-header");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

document.querySelectorAll(".work-visual, .frame").forEach((item) => {
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
    item.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});
