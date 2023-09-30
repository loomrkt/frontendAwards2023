
const mobileNavIcon = document.querySelector(".mobile-nav img");
const menu = document.querySelector(".menu");
mobileNavIcon.addEventListener("click", function () {
  console.log("clicked");
  menu.classList.toggle("mobile-menu");
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    document.querySelector(".head-area").classList.add("sticky");
  } else {
    document.querySelector(".head-area").classList.remove("sticky");
  }
});
