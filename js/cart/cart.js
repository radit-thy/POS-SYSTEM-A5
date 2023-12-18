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
const card_Container = document.querySelector(".card-container");
function Display_CartItem (data,id){
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    let cartTitle_1 = document.createElement("div");
    cartTitle_1.className = "card-title";
    let h4_1 = document.createElement("h4");
    h4_1.textContent = "Order No:";
    let span_1 = document.createElement('span');
    span_1.textContent = data.id;
    let cartTitle_2 = document.createElement("div");
    cartTitle_2.className = "card-title";
    let h4_2 = document.createElement("h4");
    h4_2.textContent = "Product Name:";
    let span_2 = document.createElement("span");
    span_2.textContent = data.name;
    let cartText = document.createElement("div");
    cartText.className ="card-text";
    let p_1 = document.createElement("p");
    p_1.textContent = "Added:";
    let span_3 = document.createElement('span');
    span_3.textContent = data.quantity;
    let price = document.createElement('div');
    price.className = "price";
    let p_2 = document.createElement('p');
    p_2.textContent = "Price:" ;
    let span_4 = document.createElement('span');
    span_4.textContent = data.price;
    let btnCard = document.createElement("div");
    btnCard.className = "btn-card";
    let btn_1 = document.createElement('button');
    btn_1.className = "btn add";
    btn_1.id=id
    btn_1.textContent = "Update";
    let btn_2 = document.createElement('button');
    btn_2.className = "btn remove";
    btn_2.id = id
    btn_2.textContent = "Remove from cart";

    cartItem.appendChild(cartTitle_1);
    cartTitle_1.appendChild(h4_1);
    h4_1.appendChild(span_1);
    cartItem.appendChild(cartTitle_2);
    cartTitle_2.appendChild(h4_2);
    h4_2.appendChild(span_2);
    cartItem.appendChild(cartText);
    cartText.appendChild(p_1);
    p_1.appendChild(span_3);
    cartItem.appendChild(price);
    price.appendChild(p_2)
    p_2.appendChild(span_4)
    cartItem.appendChild(btnCard);
    btnCard.appendChild(btn_1);
    btnCard.appendChild(btn_2);
    
    card_Container.appendChild(cartItem);
    console.log(cartItem)
}
loadCart()