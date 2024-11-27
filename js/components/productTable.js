import { getCatById } from "../cruds/category.js";
/**
 * 
 * @param {*} product 
 * @returns 
 */
const productRow = (product) => {
  return `<tr><td>${product.id + 1}</td><td>${product.name}</td><td>${
    getCatById(product.category_id)?.name
  }</td><td>${product.price}</td><td>${
    product.total
  }</td><td><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="edit btn btn-sm btn-outline-success" id="${
    product.id
  }">Edit</button></td><td><button data-bs-toggle="modal" data-bs-target="#exampleModal" class="table-remove btn btn-sm btn-outline-danger" id="${
    product.id
  }">Remove</button></td></tr>`;
};
export default productRow;
