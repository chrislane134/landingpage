const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".links");
  const links = document.querySelectorAll(".links li");
  //Toggle Nav
  burger.addEventListener("click", () => {
    navBar.classList.toggle("nav-active");

    //Animate links
    links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
