const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  hamburger.classList.toggle("border-[1px]");
  nav.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target != hamburger && e.target != nav) {
    hamburger.classList.remove("hamburger-active");
    hamburger.classList.toggle("border-[1px]");
    nav.classList.add("hidden");
  }
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
