var reveal1 = document.querySelector(".cB1");
reveal1.classList.add("active");
var header = document.querySelector(".head-area");
setTimeout(function () {
  header.classList.add("active");
}, 300);

window.addEventListener("scroll", reveal);
function reveal() {
  var windowheight = window.innerHeight;
  var info = document.querySelector(".sB2");
  var service = document.querySelectorAll(".service");

  var infoPosition = info.getBoundingClientRect().top;
  var revealInfo = windowheight / 4;
  if (infoPosition < windowheight - revealInfo) {
    info.classList.add("active");
    for (let i = 0; i < service.length; i++) {
      setTimeout(function () {
        service[i].classList.add("active");
      }, 300 + i * 100);
    }
  } else {
    info.classList.remove("active");
    for (let i = 0; i < service.length; i++) {
      service[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);
function reveal2() {
  var windowheight = window.innerHeight;
  var questions = document.querySelector("#faqs");

  var questionsPosition = questions.getBoundingClientRect().top;
  var revealquestions = windowheight / 4;
  if (questionsPosition < windowheight - revealquestions) {
    questions.classList.add("active");
  } else {
    questions.classList.remove("active");
  }
}

window.addEventListener("scroll", reveal3);
function reveal3() {
  var windowheight = window.innerHeight;
  var newsletter = document.querySelector(".newsletter");
  var fotter = document.querySelector(".footer__container");

  var newsletterPosition = newsletter.getBoundingClientRect().top;
  var revealnewsletter = windowheight / 3;
  if (newsletterPosition < windowheight - revealnewsletter) {
    newsletter.classList.add("active");
    setTimeout(function () {
      fotter.classList.add("active");
    }, 1000);
  } else {
    newsletter.classList.remove("active");
    fotter.classList.remove("active");
  }
}
