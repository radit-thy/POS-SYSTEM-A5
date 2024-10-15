import { getById } from "../cruds/category.js";
/*
    @params product Objects,
    @params categories Arrays
*/
const productRow = (product, categories) => {
  return `<tr><td>${product.id + 1}</td><td>kggkjg</td><td>${
    getById(categories, product.category_id)?.name
  }</td><td>${product.price}</td><td>${
    product.total
  }</td><td><button class="edit" id="${
    product.id
  }">Edit</button></td><td><button class="table-remove" id="${
    product.id
  }">Remove</button></td></tr>`;
};
export default productRow;
