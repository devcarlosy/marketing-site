'use strict';



/**
 * alternância da barra de navegação
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * alterne a barra de navegação quando qualquer link da barra de navegação for clicado
 */

const navbarLinks = document.querySelectorAll("[data-navlink]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * adicione classe ativa no cabeçalho e back-to-top btn
 * quando a janela rolará 100px a partir do topo
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});