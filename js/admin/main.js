let reMoves = document.querySelectorAll(".remove");

function reMoveOnAction(event) {

  let clickedOnRemove = event.target;
  clickedOnRemove.parentNode.removeChild(clickedOnRemove);

}

for (let reMove of reMoves) {
  reMove.addEventListener("click", reMoveOnAction);
}