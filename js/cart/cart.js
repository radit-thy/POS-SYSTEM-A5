let cartItems;
let customerRecord;
function loadCart() {
  let loadedData = localStorage.getItem("cartItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(loadedData);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function loadCustomerRecord() {
  let loadedData = localStorage.getItem("customerRecord");
  if (loadedData === null) {
    customerRecord = [];
  } else {
    customerRecord = JSON.parse(loadedData);
  }
  localStorage.setItem("customerRecord", JSON.stringify(customerRecord));
}
const cartContainer = document.querySelector(".cart-container");
const productTotal = document.querySelector(".product-total");
const purchaseBtn = document.getElementById("checkout");
const retractOrder = document.getElementById("retract");
console.log(productTotal);
console.log(cartContainer);
function Display_CartItem(data, id) {
  const cartItem = document.createElement("div");
  const cartTitle = document.createElement("div");
  const titleText = document.createElement("h4");
  const titleSpan = document.createElement("span");
  const cartName = document.createElement("div");
  const cartNameTitle = document.createElement("h4");
  const cartNameSpan = document.createElement("span");
  const cartQuatity = document.createElement("div");
  const quantityTitle = document.createElement("p");
  const quantitySpan = document.createElement("span");
  const cartPrice = document.createElement("div");
  const priceTitle = document.createElement("p");
  const priceSpan = document.createElement("span");
  const buttonContainer = document.createElement("div");
  const addBtn = document.createElement("button");
  const removeBtn = document.createElement("button");
  // set Class
  cartItem.classList.add("cart-item");
  cartTitle.classList.add("order-title");
  cartName.classList.add("card-title");
  cartQuatity.classList.add("card-text");
  cartPrice.classList.add("price");
  buttonContainer.classList.add("btn-card");
  addBtn.classList.add("btn");
  addBtn.classList.add("add");
  removeBtn.classList.add("btn");
  removeBtn.classList.add("remove-cart");
  //Set Id
  addBtn.id = id;
  removeBtn.id = id;
  // add text
  titleText.textContent = "Order No: ";
  titleSpan.textContent = data.id;
  cartNameTitle.textContent = "Product Name: ";
  cartNameSpan.textContent = data.name;
  quantityTitle.textContent = "Total Added: ";
  quantitySpan.textContent = data.quantity;
  cartPrice.textContent = "Price: ";
  priceSpan.textContent = data.price;
  addBtn.textContent = "Update";
  removeBtn.textContent = "Remove";
  // Appending
  titleText.appendChild(titleSpan);
  cartNameTitle.appendChild(cartNameSpan);
  quantityTitle.appendChild(quantitySpan);
  priceTitle.appendChild(priceSpan);
  cartTitle.appendChild(titleText);
  cartName.appendChild(cartNameTitle);
  cartQuatity.appendChild(quantityTitle);
  cartPrice.appendChild(priceTitle);
  buttonContainer.appendChild(addBtn);
  buttonContainer.appendChild(removeBtn);
  cartItem.appendChild(cartTitle);
  cartItem.appendChild(cartName);
  cartItem.appendChild(cartQuatity);
  cartItem.appendChild(cartPrice);
  cartItem.appendChild(buttonContainer);
  cartContainer.appendChild(cartItem);
}
function createTrow(data) {
  let compare = name;
  const tRow = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdTotal = document.createElement("td");
  const tdCurrency = document.createElement("td");
  if (compare === data.name) {
    data.quantity = data.quantity + data.quantity;
  } else {
    tdName.textContent = data.name;
    tdTotal.textContent = data.price;
    tdCurrency.textContent = "$";
    tRow.appendChild(tdName);
    tRow.appendChild(tdTotal);
    tRow.appendChild(tdCurrency);
    productTotal.appendChild(tRow);
  }
}
loadCart();
loadCustomerRecord();
for (let i = 0; i < cartItems.length; i++) {
  Display_CartItem(cartItems[i], i);
}
const removeBtn = document.querySelectorAll(".remove-cart");
for (let btn of removeBtn) {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
    cartItems.splice(btn.id, 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  });
}
for (let cart of cartItems) {
  createTrow(cart);
}
retractOrder.addEventListener("click", () => {
  for (let i = 0; i < cartItems.length; i++) {
    cartItems.splice(i);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
  window.localStorage.reload();
});
const idNumber = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
function IdGenerator() {
  let id = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * idNumber.length);
    id += idNumber[index];
  }
  return id;
}
const tbody = document.querySelector(".product-total");
const totalText = document.getElementById("cash");
let id = IdGenerator();
const customId = document.getElementById("customer-id");
customId.textContent = id;
function sum() {
  let total = 0;
  for (let tr of tbody.children) {
    total += parseInt(tr.children[1].textContent);
  }
  return total;
}
totalText.textContent = sum();
purchaseBtn.addEventListener("click", () => {
  const textContainer = document.querySelector(".invoice-detail");
  html2pdf().from(textContainer).save();
  tbody.children.remove();
});
