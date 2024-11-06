import productItems from "../data/product.js";
import category from "../data/categories.js";
const products = localStorage.getItem("productItems");
export function boot() {
  !JSON.parse(products).length && window.location.reload();
  !JSON.parse(products).length &&
    localStorage.setItem("productItems", JSON.stringify(productItems));
  localStorage.setItem("categories", JSON.stringify(category));
}
export function generateMessage() {
  if (products === 1) {
    alert("There's no products in store got to admin");
  }
}
