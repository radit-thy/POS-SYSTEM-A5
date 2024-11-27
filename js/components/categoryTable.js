/**
 * 
 * @param {*} category 
 * @returns 
 */

const categoryRow = (category) => {
  return `<tr><td>${category.id}</td><td>${category.name}</td><td>${category.description}</td><td class="d-flex justify-content-between"><button class="btn btn-sm btn-success edit" id="${category.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button></td><td><button class="btn btn-sm btn-danger delete" id="${category.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">Remove</button></td></tr>`;
};
export default categoryRow;
