import productRow from "../components/productTable.js";
import { getAll } from "../cruds/category.js";
import categoryOption from "../components/categoryOption.js";
import { ProductForm, EdiProductForm } from "../components/productForm.js";
import { getById, getAllProduct } from "../cruds/products.js";
const tableBody = document.getElementById("p-management-table");
const filterCategory = document.getElementById("filter-category");
const addNewPro = document.getElementById("addNew");
const modalBody = document.getElementById("form_pop");
const categories = getAll();
const productItems = getAllProduct();
productItems.forEach((element) => {
  tableBody.innerHTML += productRow(element, categories);
});
categories.forEach((category) => {
  filterCategory.innerHTML += categoryOption(category);
});
addNewPro.addEventListener("click", async () => {
  await renderForm();
});
const editBtns = document.querySelectorAll("td .edit");

editBtns.forEach((btn) =>
  btn.addEventListener("click", async (e) => {
    const id = parseInt(e.target.id);
    const product = getById(id);
    console.log(product);
    await renderForm("Edit", product);
  })
);
async function renderForm(type = "Add", product = null) {
  modalBody.innerHTML = "";
  if (type === "Add") modalBody.innerHTML += await ProductForm();
  if (type === "Edit" && product)
    modalBody.innerHTML += await EdiProductForm(product);
  return;
}
