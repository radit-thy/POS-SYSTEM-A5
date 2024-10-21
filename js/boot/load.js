import productItems from "../data/product.js";
import category from "../data/categories.js";
export function boot() {
  localStorage.setItem("productItems", JSON.stringify(productItems));
  localStorage.setItem("categories", JSON.stringify(category));
}
export function generateMessage() {
  let loadData = localStorage.getItem("productItems");
  if (loadData.length === 1) {
    alert("There's no products in store got to admin");
  }
}
