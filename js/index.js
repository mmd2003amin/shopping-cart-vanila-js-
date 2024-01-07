const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const listMenu = document.querySelector(".list-menu");

const openMenuHandler = () => {
  listMenu.style.transform = "translateY(0)";
};

const closeMenuHandler = () => {
  listMenu.style.transform = "translateY(-275px)";
};

openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
