/**
 * 
 * @param {*} cate 
 * @returns 
 */

function categoryBtn(cate) {
  return `<button class="btn btn-sm btn-outline-primary mb-2" id="${cate.id}">${cate.name}</button>`;
}

export default categoryBtn;
