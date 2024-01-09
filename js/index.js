import { fetchData } from "../utils/httpRequest.js";

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const listMenu = document.querySelector(".list-menu");
const container = document.querySelector(".container");
const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const searchInputMenu = document.querySelector(".search-input-menu");
const searchButtonMenu = document.querySelector(".search-button-menu");
const filterItems = document.querySelectorAll(".filter-item");

let allProduct = null;
let category = "ALL";
let search = "";

const init = async () => {
  allProduct = await fetchData("products");
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
            <div class="buy centering" onclick="clickHandler()">
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

const searchHandler = () => {
  search = searchInput.value.trim().toUpperCase();
  filterProducts();
};

const searchMenuHandler = () => {
  search = searchInputMenu.value.trim().toUpperCase();
  filterProducts();
};

const selectCategory = (e) => {
  category = e.target.innerText.toUpperCase();
  filterProducts();
};

const filterProducts = () => {
  const filter = allProduct.filter((product) => {
    if (category === "ALL") {
      return product.title.toUpperCase().includes(search);
    } else {
      return (
        product.category.toUpperCase() === category &&
        product.title.toUpperCase().includes(search)
      );
    }
  });
  renderProducts(filter);
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
searchButton.addEventListener("click", searchHandler);
searchButtonMenu.addEventListener("click", searchMenuHandler);
filterItems.forEach((li) => li.addEventListener("click", selectCategory));
