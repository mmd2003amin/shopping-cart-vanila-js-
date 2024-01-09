import { fetchData } from "../utils/httpRequest.js";

const loading = document.querySelector(".loading");
const cards = document.querySelector(".cards-user");

const init = async () => {
  const products = await fetchData("users");
  renderUsers(products);
  start();
};

const renderUsers = (products) => {
  products.forEach((product) => {
    const { name, email, username, phone, address, id } = product;
    cards.innerHTML += `
        <div class="card-user">
            <span class="id centering">${id}</span>
        
            <div>
                <h4>Name:</h4>
                <span>${name.firstname} ${name.lastname}</span>
            </div>
            
            <div>
                <h4>UserName:</h4>
                <span>${username}</span>
            </div>
            
            <div>
                <h4>Email</h4>
                <span>${email}</span>
            </div>
            
            <div>
                <h4>Phone</h4>
                <span>${phone}</span>
            </div>
            
            <div>
                <h4>Address</h4>
                <span>${address.city} ${address.street} ${address.zipcode}</span>
            </div>
        <div>
    `;
  });
};

const start = () => {
  loading.style.display = "none";
  cards.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", init);