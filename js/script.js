const navbarToggler = document.querySelector(".navbar-toggler-icon");
const navbar = document.querySelector(".navbar");
function userScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

function toggleNavBg() {
  if (window.scrollY < 50) {
    navbar.classList.toggle("bg-dark");
    navbar.classList.toggle("navbar-sticky");
  } else {
    return;
  }
}

document.addEventListener("DOMContentLoaded", userScroll);
navbarToggler.addEventListener("click", toggleNavBg);
