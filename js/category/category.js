import categoryRow from "../components/categoryTable.js";
import { ADDFORM, EDITFORM, DELETEFORM } from "../components/CategoryForm.js";
import {
  create,
  getAll,
  getCatById,
  update,
  remove,
} from "../cruds/category.js";
const categoryContainer = document.querySelector(".category-Container");
const category = getAll();
category.forEach((cat) => {
  categoryContainer.innerHTML += categoryRow(cat);
});
const form = document.getElementById("form_pop");
const addBtn = document.querySelector(".add-category");
const allEditBtn = document.querySelectorAll("td .btn-success");
const allDeleteBtn = document.querySelectorAll("td .btn-danger");
const formTitle = document.querySelector(".modal-title");
addBtn.addEventListener("click", () => {
  formRender("Add New Category");
  const addBtn = document.getElementById("add");
  const inputName = document.getElementById("cat_name");
  const inputDescription = document.getElementById("cat_description");
  addBtn.addEventListener("click", () => {
    create(inputName.value, inputDescription.value);
    window.location.reload();
  });
});
allEditBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = parseInt(e.target.id);
    editCategory(id);
  });
});
allDeleteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = parseInt(e.target.id);
    deleteCategory(id);
  });
});

function editCategory(id) {
  const category = getCatById(id);
  formRender("Edit", category);
  const editBtn = document.getElementById("edit");
  const inputName = document.getElementById("cat_name");
  const inputDescription = document.getElementById("cat_description");
  editBtn.addEventListener("click", () => {
    const name = inputName.value;
    const description = inputDescription.value;
    update(id, name, description);
    window.location.reload();
  });
}
function deleteCategory(id) {
  formRender("Remove", null, id);
  const deleteBtn = document.querySelector(".delete-cat");
  deleteBtn.addEventListener("click", (e) => {
    const id = parseInt(e.target.id);
    remove(id);
    window.location.reload();
  });
}

function formRender(type, category = null, id = null) {
  if (form_pop.innerHTML) form_pop.innerHTML = "";
  if (type === "Add New Category") {
    formTitle.textContent = type;
    form.innerHTML += ADDFORM();
  }
  if (type === "Edit") {
    formTitle.textContent = "Modify current Category";
    form.innerHTML += EDITFORM(category.name, category.description);
  }
  if (type == "Remove") {
    formTitle.textContent = "Remove current Category";
    form.innerHTML += DELETEFORM(id);
  }
}
