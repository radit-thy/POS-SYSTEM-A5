import { loadToLocal, getData, products } from "../index/main.js";
let reMoves = document.querySelectorAll(".remove");
const menuBtn = Array.from(document.querySelectorAll("aside button"));
const customerRecord = document.querySelector(".customer-record");
const producManagement = document.querySelector(".products-management");
const categoryManagement = document.querySelector(".category-management");
const productName = document.getElementById("product-name");
const productCategory = document.getElementById("product-category");
const productPrice = document.getElementById("product-price");
const productImage = document.getElementById("product-image");
const productQuantity = document.getElementById("product-quantity");
const addProductBtn = document.getElementById("add");
// set variable
function getDataFromInput(e) {
  e.preventDefault();
  let data = {};
  data.name = productName.value;
  data.productImg = productImage.files[0].name;
  for (let value of productCategory) {
    if (value.checked) {
      data.category = value.value;
    }
  }
  data.price = productPrice.value;
  data.quantity = productQuantity.value;
  products.push(data);
  loadToLocal(products);
  console.log(products);
}
addProductBtn.addEventListener("click", getDataFromInput);
// show content upon click on the button
function showContent(e) {
  let text = e.target.textContent;
  if (text === "Customer Records") {
    customerRecord.classList.toggle("show-customer-record");
  } else if (text === "Category Management") {
    categoryManagement.classList.toggle("show-category-management");
  } else if (text === "Products Mangement") {
    producManagement.classList.toggle("show-products-management");
  }
  text = "";
}

function reMoveOnAction(event) {
  let clickedOnRemove = event.target;
  clickedOnRemove.parentNode.removeChild(clickedOnRemove);
}
for (let reMove of reMoves) {
  reMove.addEventListener("click", reMoveOnAction);
}
for (let btn of menuBtn) {
  btn.addEventListener("click", showContent);
}
