let cartItems;
function loadCart() {
  let loadedData = localStorage.getItem("cartItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(loadedData);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
const cartContainer = document.querySelector(".cart-container");
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
  removeBtn.textContent = "Remove cart";
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
loadCart();
for (let i = 0; i < cartItems.length; i++) {
  Display_CartItem(cartItems[i], i);
}
