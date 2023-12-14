//
let products = [
  {
    name: "RCR",
    productImg:"image/Dolls/doll01.jpg",
    category: "",
    price: "12",
    quantity: "5",
    sellStaus: "2",
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
function Display_Card(data){
  let card = document.createElement('div');
  card.className = 'card';
  let card_image = document.createElement('div');
  card_image.className = 'card-img';
  let img = document.createElement('img');
  img.src = data.productImg;
  let card_title = document.createElement('div');
  card_title.className = 'card-title' ;
  let h4_card_title = document.createElement('h4');
  h4_card_title.textContent = 'Name: ';
  let span_h4 = document.createElement ('span');
  span_h4.textContent = data.name;
  let p_card_title  = document.createElement('p');
  p_card_title .textContent = 'Available in stock:';
  let span_p_card_title = document.createElement('span');
  span_p_card_title.textContent = data.quantity;
  let btn_card = document.createElement('div');
  btn_card.className = 'btn-card';
  let button = document.createElement('button');
  button.className = 'btn add';
  button.textContent = 'Add to card';
  let pPrice = document.createElement('p');
  pPrice.textContent = '$';
  let span_btn_card = document.createElement('span');
  span_btn_card.textContent = data.price;
  
  card.appendChild(card_image);
  card_image.appendChild(img);
  card.appendChild(card_title);
  card_title.appendChild(h4_card_title);
  h4_card_title.appendChild(span_h4);
  card_title.appendChild(p_card_title);
  p_card_title.appendChild(span_p_card_title);
  card.appendChild(btn_card);
  btn_card.appendChild(button);
  btn_card.appendChild(p_btn_card);
  p_btn_card.appendChild(span_btn_card);
  cardContainer.appendChild(card);
}
for (let item of products){
  Display_Card(item)
}

// display category

// remove product

// remove category

console.log(cardContainer.children)
