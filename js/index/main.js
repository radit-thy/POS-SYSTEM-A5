//
let products = [
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
function loadToLocal(data) {
  localStorage.setItem("products", JSON.stringify(data));
}
loadToLocal(products);
function getData(data, name) {
  data = JSON.parse(localStorage.getItem(name));
  console.log(data);
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
