const categories = document.querySelector(".categories");
const cat = document.querySelector(".dropdown");
categories.addEventListener("click", () => {
  cat.classList.toggle("drop-category");
});
