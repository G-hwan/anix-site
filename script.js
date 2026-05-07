const header = document.querySelector(".site-header");
const heroPanel = document.querySelector(".hero-panel");
const revealItems = document.querySelectorAll(".reveal");
const modeToggle = document.querySelector(".mode-toggle");
const modeStorageKey = "anix-display-mode";

const applyMode = (mode) => {
  const isInverted = mode === "inverted";

  document.body.classList.toggle("is-inverted", isInverted);

  if (modeToggle) {
    modeToggle.setAttribute("aria-pressed", String(isInverted));
    modeToggle.setAttribute(
      "aria-label",
      isInverted ? "기본 화면 모드로 전환" : "화면 모드 반전"
    );
  }
};

const getPreferredMode = () => {
  const savedMode = window.localStorage.getItem(modeStorageKey);

  if (savedMode === "default" || savedMode === "inverted") {
    return savedMode;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "inverted" : "default";
};

const updateHeader = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

if (heroPanel) {
  heroPanel.addEventListener("pointermove", (event) => {
    const rect = heroPanel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 7;

    heroPanel.style.transform = `perspective(1200px) rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  heroPanel.addEventListener("pointerleave", () => {
    heroPanel.style.transform = "";
  });
}

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 220)}ms`;
    observer.observe(item);
  });
}

if (modeToggle) {
  applyMode(getPreferredMode());

  modeToggle.addEventListener("click", () => {
    const nextMode = document.body.classList.contains("is-inverted") ? "default" : "inverted";

    applyMode(nextMode);
    window.localStorage.setItem(modeStorageKey, nextMode);
  });
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
