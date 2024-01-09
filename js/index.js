import { fetchData } from "../utils/httpRequest.js";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const listMenu = document.querySelector(".list-menu");
const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");

const init = async () => {
  const allProduct = await fetchData("products");
  renderProducts(allProduct);
  start();
};

const renderProducts = (data) => {
  cards.innerHTML = "";
  const mapData = data.map((product) => {
    const { rating, image, title, price } = product;
    cards.innerHTML += `
        <div class="card centering">
            <div class="points centering">
            <div class="centering star">
                <i class="fa-solid fa-star"></i>
                <span>${rating.rate}</span>
            </div>
            <div class="centering user-buy">
                <i class="fa-solid fa-user"></i>
                <span>${rating.count}</span>
            </div>
            </div>
        
            <img src="${image}" alt="image" class="image-card" />
        
            <h3>${shortenText(title)}</h3>
        
            <div class="about centering">
            <span class="price">$ ${price}</span>
            <div class="buy centering">
                <p>Buy</p>
                <i class="fa-solid fa-shopping-cart"></i>
            </div>
            </div>
        </div>
    `;
  });
};

const shortenText = (text) => {
  const splitText = text.split(" ").slice(0, 2).join(" ");
  return splitText;
};

const start = () => {
  loading.style.display = "none";
  cards.style.display = "grid";
  container.style.display = "flex";
};

const openMenuHandler = () => {
  listMenu.style.transform = "translateY(0)";
};

const closeMenuHandler = () => {
  listMenu.style.transform = "translateY(-275px)";
};

openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);
document.addEventListener("DOMContentLoaded", init);
