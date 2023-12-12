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
function loadToLocal() {
  localStorage.setItem("products", JSON.stringify(products));
}
loadToLocal();
// all variable
const cardContainer = document.querySelector(".card-container");
// add new product

// add new category

// display product

// display category

// remove product

// remove category
