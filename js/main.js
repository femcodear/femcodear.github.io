"use strict";

function disableScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
}

var burger = document.querySelector('.burger');
var menu = document.querySelector('.nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('active');

  if (burger.classList.contains('burger--active')) {
    disableScroll();
  } else {
    enableScroll();
  }
});
"use strict";

var smoothScroll = function smoothScroll() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.nav');
  var body = document.querySelector('body');

  var scroll = function scroll(targetEl, duration) {
    var targets = document.querySelector(targetEl);
    var targetsPosition = targets.getBoundingClientRect().top;
    var startsPosition = window.pageYOffset;
    var startTime = null;

    var ease = function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t -= 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    var animation = function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startsPosition, targetsPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  var scrollTo = function scrollTo() {
    var links = document.querySelectorAll('.js-smooth-scroll');
    links.forEach(function (each) {
      each.addEventListener('click', function () {
        burger.classList.remove('burger--active');
        menu.classList.remove('active');
        body.classList.remove('scroll');
        var currentTarget = this.getAttribute('href');
        scroll(currentTarget, 1000);
      });
    });
  };

  scrollTo();
};

smoothScroll();
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
