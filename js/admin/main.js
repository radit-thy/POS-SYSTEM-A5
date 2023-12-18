let product;
let cartItems;
let allCategory;
function getData() {
  let loadedData = localStorage.getItem("productItems");
  if (loadedData === null) {
    products = [];
  } else {
    products = JSON.parse(loadedData);
  }
  localStorage.setItem("productItems", JSON.stringify(products));
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
  let loadedData = localStorage.getItem("allCategory");
  if (loadedData === null) {
    allCategory = [];
  } else {
    allCategory = JSON.parse(loadedData);
  }
  localStorage.setItem("productItems", JSON.stringify(products));
}
getData();
getDataforCart();
loadCategory();


