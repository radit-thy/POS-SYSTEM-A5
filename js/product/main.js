let productItem = [
  //   {
  //     name: "RCR",
  //     productImg: "image/Dolls/doll01.jpg",
  //     category: "",
  //     price: "12",
  //     quantity: "5",
  //     sellStaus: "2",
  //   },
];
// form
const pName = document.getElementById("product-name");
const pCategory = document.getElementById("product-category");
const pPrice = document.getElementById("product-price");
const pQuantity = document.getElementById("product-quantity");
// const tableBody = document.getElementById("p-management-table");
const addBtn = document.getElementById("add");
let id = 0;
function createTableRow(e) {
  e.preventDefault();
  let allItem = tableBody.children;
  let notExist = true;
  for (let item of allItem) {
    if (pName.value === item.children[1].textContent) {
      notExist = false;
      item.children[4].firstChild.textContent =
        parseInt(item.children[4].firstChild.textContent) +
        parseInt(pQuantity.value);
      item.children[3].textContent =
        parseInt(item.children[4].firstChild.textContent) *
        parseInt(pPrice.value);
      console.log(pQuantity.value);
    }
  }
  if (notExist && pName.value !== "") {
    const tableRow = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdCategory = document.createElement("td");
    const tdPrice = document.createElement("td");
    const tdQuantity = document.createElement("td");
    const spanQuantity = document.createElement("span");
    const tdAction = document.createElement("td");
    const tdAction1 = document.createElement("td");
    const editBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    removeBtn.textContent = "Remove";
    tdId.textContent = id;
    tdName.textContent = pName.value;
    tdCategory.textContent = pCategory.value;
    tdPrice.textContent = pPrice.value;
    spanQuantity.textContent = pQuantity.value;
    tdQuantity.appendChild(spanQuantity);
    tdAction.appendChild(editBtn);
    tdAction1.appendChild(removeBtn);
    tableRow.appendChild(tdId);
    tableRow.appendChild(tdName);
    tableRow.appendChild(tdCategory);
    tableRow.appendChild(tdPrice);
    tableRow.appendChild(tdQuantity);
    tableRow.appendChild(tdAction);
    tableRow.appendChild(tdAction1);
    tableBody.appendChild(tableRow);
    id++;
  }
}
const tableBody = document.getElementById("p-management-table");
addBtn.addEventListener("click", createTableRow);
