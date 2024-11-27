/**
 * 
 * @param {*} product 
 * @returns 
 */

const ProductCard = (product) => {
  return `<div class="col-3"><div class="card p-2">
  ${
    product.images[0]?.length
      ? `<img class="card-img-top" src="${product.images[0]}" alt="${product.images[0]}">`
      : `<img class="card-img-top" src="../../image/assets/no-photo.png" alt="${product.images[0]}">`
  }
  <div class="card-title">
    <h4>Name: <span>${product.name}</span></h4>
    <p>Available in stock: <span class="${
      product.total > 0 ? "badge badge-success" : "badge badge-danger"
    }">${
    product.total > 0 ? product.total : "Out of Stocks"
  }</span></p></div><div class=""><p>Category: <span>${
    product.category?.name
  }</span></p>
    </div>
    <div class="d-flex justify-content-between  align-items-center">
      <button class="btn btn-sm btn-primary add-to-cart" id="${product.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add to Cart
      </button>
      <p class="badge badge-success p-2 d-flex align-items-center">$ <span>${
        product.price
      }</span></p>
    </div>
    </div>
  </div>`;
};
export default ProductCard;
