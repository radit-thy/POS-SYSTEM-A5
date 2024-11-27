let products;
let cartItems;
let allCategory;
let customerRecord;
// get elements
const customerRecordContainer = document.querySelector(".customer-container");
const income = document.getElementById("income");
const totalSell = document.getElementById("product-total");
const totalInStock = document.getElementById("product-stock");
const purchasDetail = document.querySelector(".purchase-detail");
const orderNumber = document.getElementById("order-no");
const listContainer = document.querySelector(".p-list");
const totalOrder = document.getElementById("total-order");
const totalCategory = document.getElementById("category-detail");
import { getAll } from "../cruds/category.js";
import { getAllProduct } from "../cruds/products.js";
function getData() {
  let loadedData = localStorage.getItem("productItems");
  if (loadedData === null) {
    products = [];
  } else {
    products = JSON.parse(loadedData);
  }
  localStorage.setItem("productItems", JSON.stringify(products));
}
function getDataforCart() {
  let loadedData = localStorage.getItem("cartItems");
  if (loadedData === null) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(loadedData);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function loadCategory() {
  let loadedData = localStorage.getItem("allCategory");
  if (loadedData === null) {
    allCategory = [];
  } else {
    allCategory = JSON.parse(loadedData);
  }
  localStorage.setItem("allCategory", JSON.stringify(allCategory));
}
function loadRecord() {
  let loadedRecord = localStorage.getItem("customerRecord");
  if (loadedRecord === null) {
    customerRecord = [];
  } else {
    customerRecord = JSON.parse(loadedRecord);
  }
  localStorage.setItem("customerRecord", JSON.stringify(customerRecord));
}
getData();
getDataforCart();
loadCategory();
loadRecord();
function caculate() {
  let sum = 0;
  for (let items of customerRecord) {
    sum += parseInt(items.quantity);
  }
  return sum;
}
function caculateIncome() {
  let sum = 0;
  for (let items of customerRecord) {
    sum += parseInt(items.income);
  }
  return sum;
}
function calculateProduct() {
  console.log(getAllProduct());
  let total = 0;
  for (let order of getAllProduct()) {
    total += parseInt(order.total);
  }
  return total;
}
income.textContent = caculateIncome();
totalInStock.textContent = calculateProduct();
totalSell.textContent = caculate();
totalCategory.textContent = allCategory.length;
function createList(data) {
  listContainer.innerHTML = "";
  for (let item of data) {
    const list = document.createElement("li");
    const orderNumber = document.createElement("div");
    const productName = document.createElement("div");
    const productTotal = document.createElement("div");
    const productPrice = document.createElement("div");
    const productCategory = document.createElement("div");
    const orderNumberContext = document.createElement("h4");
    const productNameContext = document.createElement("h4");
    const productTotalContext = document.createElement("h4");
    const productPriceContext = document.createElement("h4");
    const productCategoryContext = document.createElement("h4");
    const orderSpan = document.createElement("span");
    const nameSpan = document.createElement("span");
    const totalSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const categorySpan = document.createElement("span");
    orderNumber.classList.add("order-id");
    productName.classList.add("order-productName");
    productCategory.classList.add("category");
    productTotal.classList.add("total-product");
    productPrice.classList.add("total-price");
    orderNumberContext.textContent = "Order Number: ";
    productNameContext.textContent = "ProductName: ";
    productCategoryContext.textContent = "Category: ";
    productTotalContext.textContent = "Total: ";
    productPriceContext.textContent = "Total Price: ";
    orderSpan.textContent = item.id;
    nameSpan.textContent = item.name;
    categorySpan.textContent = item.category;
    priceSpan.textContent = item.price;
    totalSpan.textContent = item.quantity;

    // append
    orderNumber.appendChild(orderNumberContext);
    orderNumber.appendChild(orderSpan);
    productName.appendChild(productNameContext);
    productName.appendChild(nameSpan);
    productCategory.appendChild(productCategoryContext);
    productCategory.appendChild(categorySpan);
    productTotal.appendChild(productTotalContext);
    productTotal.appendChild(totalSpan);
    productPrice.appendChild(productPriceContext);
    productPrice.appendChild(priceSpan);
    list.appendChild(orderNumber);
    list.appendChild(productName);
    list.appendChild(productCategory);
    list.appendChild(productTotal);
    list.appendChild(productPrice);
    listContainer.appendChild(list);
  }
}
function showOrder(index) {
  orderNumber.textContent = customerRecord[index].iD;
  totalOrder.textContent = customerRecord[index].order;
  createList(customerRecord[index].product);
}
loadRecord();
for (let i = 0; i < customerRecord.length; i++) {
  createRecord(customerRecord[i], i);
}
const detailBtns = document.querySelectorAll(".detail-order");
for (let btn of detailBtns) {
  btn.addEventListener("click", () => {
    purchasDetail.classList.toggle("purchase-detail-show");
    showOrder(btn.id);
  });
}
