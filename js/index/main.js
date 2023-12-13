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
export function loadToLocal(data) {
  localStorage.setItem("products", JSON.stringify(data));
}
loadToLocal(products);
export function getData(data, name) {
  data = JSON.parse(localStorage.getItem(name));
  console.log(data);
}
getData(products, "products");

// all variable
const cardContainer = document.querySelector(".card-container");
// add new product

// add new category

// display product
function Display_Card(){
  let card = document.createElement('div');
  card.className = 'card';

  let card_image = document.createElement('div');
  card_image.className = 'card-img';

  let img = document.createComment('img');
  img.src = 'image/Dolls/doll01.jpg';

  let card_title = document.createElement('div');
  card_title.className = 'card-title' ;

  



}


// display category

// remove product

// remove category

console.log(cardContainer.children)
