const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("border-[1px]");
  nav.classList.toggle("hidden");
  header.classList.remove("transparent");
});

window.addEventListener("click", (e) => {
  if (hamburger.classList.contains("border-[1px]") && e.target != hamburger) {
    return;
  }

  if (e.target != hamburger && e.target != nav) {
    hamburger.classList.remove("hamburger-active");
    hamburger.classList.toggle("border-[1px]");
    nav.classList.add("hidden");
  }
});

window.onscroll = function () {
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    header.classList.add("transparent");
    hamburger.classList.remove("hamburger-active");
    nav.classList.add("hidden");
    if (!hamburger.classList.contains("border-[1px]")) {
      hamburger.classList.add("border-[1px]");
    }
  } else {
    header.classList.remove("navbar-fixed");
    hamburger.classList.add("border-[1px]");
  }
};
