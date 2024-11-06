/**
 * 
 * @returns 
 */

export const ADDFORM = () => {
  return `<form>
            <div class="form-group">
                <label for="name">Category Name</label>
                <input class="form-control" type="text" name="name" id="cat_name">
            </div>
            <div class="form-group">
                <label for="description">Category Name</label>
                <textarea class="form-control" name="description" id="cat_description"></textarea>
            </div>
            </form>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button class="add btn  btn-primary" type="button" type="submit" id="add" data-bs-dismiss="modal">Add to Cart</button>
            </div> 
        `;
};

/**
 * 
 * @param {*} name 
 * @param {*} description 
 * @returns 
 */
export const EDITFORM = (name, description) => {
  return `<form>
            <div class="form-group">
                <label for="name">Category Name</label>
                <input class="form-control" value="${name}" type="text" name="name" id="cat_name">
            </div>
            <div class="form-group">
                <label for="description">Category Name</label>
                <textarea class="form-control" name="description" id="cat_description">${description}</textarea>
            </div>
            </form>
            <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button class="add btn  btn-primary" type="button" type="submit" id="edit" data-bs-dismiss="modal">Save</button>
            </div> 
        `;
};

/**
 * 
 * @param {*} id 
 * @returns 
 */
export const DELETEFORM = (id) => {
  return `<div class="p-2">
              <h5 class="text-danger text-center">This action cannot be undone</h5>
          </div>
          <div class="d-flex justify-content-between">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button class="add btn  btn-danger delete-cat" type="button" type="submit" id="${id}" data-bs-dismiss="modal">Yes</button>
          </div>`;
};
