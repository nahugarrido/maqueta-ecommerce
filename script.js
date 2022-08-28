/* Sticky navbar animation */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navigation-bar");
  const carrousel = document.getElementById("new-carrousel");
  const banner_carrousel = document.getElementById("carousel-slider");
  const scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled < 40) {
    navbar.classList.remove("sticky");
    carrousel.style.display = "block";
    banner_carrousel.style.marginTop = "0px";
  } else {
    navbar.classList.add("sticky");
    carrousel.style.display = "none";
    banner_carrousel.style.marginTop = "101px";
  }
});
