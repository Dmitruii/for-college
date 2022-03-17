'use strict'

/* ====================== ANIMATION HEADER BURGER ====================== */
// DOM items
const headerBurgerElem = document.querySelector('.header_burger'); // burger item
const bodyElem = document.querySelector('body'); // body document
const headerNavBarElem = document.querySelector('.header__nav-bar'); // header menu

headerBurgerElem.addEventListener('click', toggleClassHeaderBurger);

// header event logic
function toggleClassHeaderBurger () {
  headerBurgerElem.classList.toggle('active');
  bodyElem.classList.toggle('lock');
  headerNavBarElem.classList.toggle('active');
}

/* ====================== SCROLLING ANIMATION ====================== */
// Anchors
const links = document.querySelectorAll('.scroll-link');

if (links.length > 0) {
  for (let i = 0; i < links.length; i++) {
    // Anchor link
    const link = links[i];
    link.addEventListener('click', function (e) {
      e.preventDefault();
      // take scroll section
      const scrollToElem = document.querySelector(link.getAttribute('data-scrollTo'));
      if (scrollToElem) {
        if (scrollToElem.offsetHeight > window.innerHeight) {
          e.preventDefault();
          scrollToElem.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
          });
        }else {
          e.preventDefault();
          scrollToElem.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
          });
        }
      }
    });
  }
}