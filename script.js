const mobileNav = document.querySelector("ul.clearfix");
const burgerBtn = document.querySelector(".burger");

burgerBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  burgerBtn.classList.toggle("active");
});
