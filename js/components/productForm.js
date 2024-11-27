import { getAll } from "../cruds/category.js";
import categoryOption from "./categoryOption.js";
const ProductForm = async (categories = getAll()) => {
  let options = "";
  categories.forEach((element) => {
    options += categoryOption(element);
  });
  return `<form action="#" class="form d-flex flex-column gap-2">
              <div class="p-name form-group">
                <label for="product-name">Product Name</label>
                <input type="text" class="form-control" name="product-name" id="product-name" />
              </div>
              <div class="p-category form-group">
                <label for="product-category">Product Category</label>
                <select class="form-control" name="product-category" id="product-category">
                  <option>Select category</option>
                  ${options}
                </select>
              </div>
              <div class="p-price form-group">
                <label for="product-price">Product Price</label>
                <input class="form-control" type="number" id="product-price" />
              </div> 
              <div class="p-quantity form-group">
                <label for="product-quantity">Product Quantity</label>
                <input class="form-control"
                  type="number"
                  name="product-quantity"
                  id="product-quantity"
                />
              </div>
              <div class="btn-manange d-flex justify-content-between">
                <button class="cancel btn" id="cancel">Cancel</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="add btn" type="submit" id="add">Add New</button>
              </div>
            </form>`;
};
const EdiProductForm = async (product) => {
  const categories = getAll();
  let options = "";
  categories.forEach((element) => {
    options += categoryOption(element, element.id);
  });
  return `<form action="#">
              <div class="p-name form-group">
                <label for="product-name">Product Name</label>
                <input type="text" class="form-control" name="product-name" value="${product.name}"  id="product-name" />
              </div>
              <div class="p-category form-group">
                <label for="product-category">Product Category</label>
                <select class="form-control" name="product-category" id="product-category">
                  <option>Select category</option>
                  ${options}
                </select>
              </div>
              <div class="p-price form-group">
                <label for="product-price">Product Price</label>
                <input class="form-control" type="number"  value="${product.price}" id="product-price" />
              </div>
              <div class="p-quantity form-group">
                <label for="product-quantity">Product Quantity</label>
                <input class="form-control"
                  type="number"
                  name="product-quantity"
                  id="product-quantity"
                  value="${product.total}"
                />
              </div>
              <div class="btn-manange d-flex justify-content-between" >
                <button class="cancel btn" id="cancel">Cancel</button>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="add btn" type="submit" id="add">Add New</button>
              </div>
            </form>`;
};
export { EdiProductForm, ProductForm };
