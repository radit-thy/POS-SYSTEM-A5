// all variable
import ProductCard from "../components/productCard.js";
import { boot, generateMessage } from "../boot/load.js";
import { getAllProduct, getById } from "../cruds/products.js";
import { getCatById } from "../cruds/category.js";
import categoryBtn from "../components/categoryButton.js";
import { orderIdGenerator } from "../commons/helpers/id_generator.js";
import { CUSTOMER_TYPE } from "../constants/customer.js";
import credentialMatcher from "../data/authenticator.js";

boot();
generateMessage();
const products = getAllProduct();
let cartItems;
let allCategory = loadCategory();
const pName = document.getElementById("product-name");
const pCategory = document.getElementById("product-category");
const pPrice = document.getElementById("product-price");
const pQuantity = document.getElementById("product-quantity");
const addBtn = document.getElementById("add");
const cutomerId = document.getElementById("pCustomer-id");
const cardContainer = document.querySelector(".card-container");
const searchTab = document.getElementById("searchItems");
const adminBtn = document.getElementById("admin");

adminBtn.addEventListener("click", (e) => {
  console.log(credentialMatcher("posAdmins", "rcrmart"));
  if (!credentialMatcher("posAdmin", "rcrmart")) {
    e.target.href = "";
    return;
  } else {
    e.target.href;
  }
});

products.forEach((item) => {
  cardContainer.innerHTML += ProductCard(item, allCategory);
});

// 2. Attach Events
getDataforCart();
window.addEventListener("click", generateMessage());
// Save Product to Local
function loadtoCart(cartItems) {
  localStorage.setItem("productItems", JSON.stringify(cartItems));
}
function getDataforCart() {
  let loadedData = localStorage.getItem("cartItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(loadedData);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function loadCategory() {
  let loadedData = localStorage.getItem("categories");
  return JSON.parse(loadedData);
}
const addToCartBtn = document.querySelectorAll(".add-to-cart");
function update(index) {
  const product = getById(index);
  let quantity = 0;
  cutomerId.value = orderIdGenerator(CUSTOMER_TYPE.NEW);
  pName.value = product.name;
  pCategory.value = getCatById(product.category_id).name;
  pPrice.value = product.price;
  pQuantity.value = 0;
  pQuantity.addEventListener("change", () => {
    quantity = product.total - pQuantity.value;
  });
  const cart = {};
  addBtn.addEventListener("click", () => {
    cart.id = cutomerId.value;
    cart.name = pName.value;
    cart.category_id = pCategory.value;
    cart.price = products[index].price * pQuantity.value;
    cart.quantity = quantity;
    if (pQuantity.value >= 1 && pQuantity.value <= products[index].quantity) {
      cartItems.push(cart);
      if (product.quantity > 0) {
        product.quantity = products[index].quantity - pQuantity.value;
      } else {
        products.splice(index, 1);
        alert("Out of Product");
      }
      localStorage.setItem("productItems", JSON.stringify(products));
    } else {
      products.splice(index, 1);
      localStorage.setItem("productItems", JSON.stringify(products));
      alert("Cannot be added Product is out of stock");
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.reload();
  });
}
for (let btn of addToCartBtn) {
  btn.addEventListener("click", () => {
    update(btn.id);
  });
}
//Display category
const most_sell = document.querySelector(".most-sell");
function creatBtn(data) {
  let btn_Category = document.createElement("button");
  btn_Category.textContent = data;
  most_sell.appendChild(btn_Category);
}
for (let category of allCategory) {
  most_sell.innerHTML += categoryBtn(category);
}
const categoryBtns = document.querySelectorAll(".most-sell button");
const cardItems = cardContainer.children;
function showAll() {
  for (let card of cardItems) {
    card.style.display = "block";
    card.style.display = "flex";
  }
}
function sorter(category) {
  for (let card of cardItems) {
    let titleText = card.children[1].children[0].children[0].textContent;
    if (category === titleText) {
      card.style.display = "block";
      card.style.display = "flex";
    } else if (category === "All Category") {
      showAll();
    } else {
      card.style.display = "none";
    }
  }
}
for (let btn of categoryBtns) {
  btn.addEventListener("click", () => {
    btn.classList.add("active");
    sorter(btn.textContent);
  });
}
