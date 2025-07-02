$(document).ready(function () {
  $('.nav-link').click(function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 60 }, 700);
  });
});


const text = "Full Stack .NET Developer | 1.2+ Years Experience";
const typeSpeed = 70;    // speed willl be be calculated in the milliseconds
const pauseTime = 1000;

function startTyping() {
  const el = document.getElementById("typedText");
  el.textContent = "";
  let i = 0;

  const typeInterval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typeInterval);
      setTimeout(startTyping, pauseTime);
    }
  }, typeSpeed);
}

window.onload = function() {
  // Fade-in typing container
  document.querySelector(".typing-line").classList.add("visible");
  startTyping();
};
