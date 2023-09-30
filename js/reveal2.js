
var reveal1 = document.querySelector("#sec1");
reveal1.classList.add("active");

var header = document.querySelector(".head-area");
setTimeout(function () {
  header.classList.add("active");
}, 300);
window.addEventListener("scroll", reveal2);
function reveal2() {
  var windowheight = window.innerHeight;
  var sec2 = document.querySelector("#sec2");

  var sec2Position = sec2.getBoundingClientRect().top;
  var revealsec2 = windowheight / 2;
  if (sec2Position < windowheight - revealsec2) {
    sec2.classList.add("active");
  } else {
    sec2.classList.remove("active");
  }
}
window.addEventListener("scroll", reveal3);
function reveal3() {
  var windowheight = window.innerHeight;
  var sec3 = document.querySelector("#sec3");

  var sec3Position = sec3.getBoundingClientRect().top;
  var revealsec3 = windowheight / 4;
  if (sec3Position < windowheight - revealsec3) {
    sec3.classList.add("active");
  } else {
    sec3.classList.remove("active");
  }
}
window.addEventListener("scroll", reveal4);
function reveal4() {
  var fotter = document.querySelector(".footer__container");
  var windowheight = window.innerHeight;
  var sec4 = document.querySelector("#sec4");

  var sec4Position = sec4.getBoundingClientRect().top;
  var revealsec4 = windowheight / 2;
  if (sec4Position < windowheight - revealsec4) {
    sec4.classList.add("active");
    setTimeout(function () {
      fotter.classList.add("active");
    }, 1000);
  } else {
    sec4.classList.remove("active");
    fotter.classList.remove("active");
  }
}
