const ProductCard = (product) => {
  return `<div class="card"><div class="card-title"><h4>Name: <span>${product.name}</span></h4><p>Available in stock:<span>${product.total}</span></p></div><div class="category"><p>Category: <span>${product.category_id}</span></p></div><div class="btn-card"><button class="btn add-to-cart" id="0">Add to card</button><p>$<span>${product.price}</span></p></div></div>`;
};
export default ProductCard;
