// remove on Action
let reMoves = document.querySelectorAll(".remove");

function reMoveOnAction(event) {

  let clickedOnRemove = event.target;
  clickedOnRemove.parentNode.removeChild(clickedOnRemove);

}

for (let reMove of reMoves) {
  reMove.addEventListener("click", reMoveOnAction);
}

// remove catagory
let reMOVES = document.querySelectorAll(".remove-category")

function reMoveCatagory(event){
 
  let clickedOnButtonRemove = event.target;
  clickedOnButtonRemove.parentNode.removeChild(clickedOnButtonRemove);

}
for (let reMOVE of reMOVES){
  reMOVE.addEventListener("click",reMoveCatagory);
}