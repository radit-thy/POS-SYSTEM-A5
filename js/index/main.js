//
export let products = [
  {
    name: "",
    productImg: "",
    category: "",
    price: "",
    quantity: "",
    sellStaus: "",
  },
];
// Save Product to Local
export function loadToLocal(data) {
  localStorage.setItem("products", JSON.stringify(data));
}
loadToLocal(products);
export function getData(data, name) {
  data = JSON.parse(localStorage.getItem(name));
}
getData(products, "products");

// all variable
const cardContainer = document.querySelector(".card-container");
// add new product

// add new category

// display product

// display category

// remove product

// remove category
