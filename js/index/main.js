//
let products = [
  { name: "", category: "", price: "", quantity: "", popularity: "" },
];
//drop down
const categories = document.querySelector(".categories");
const cat = document.querySelector(".dropdown");
categories.addEventListener("click", () => {
  cat.classList.toggle("drop-category");
});
// Save Product to Local
function loadToLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}
loadToLocal();
// all variable
const cardContainer = document.querySelector(".card-container");
const cartContainer = document.querySelector(".cart-container");
// add new product

// add new category

// display product

// display category

// remove product

// remove category
