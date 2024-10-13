const categoryRow = (category) => {
  return `<tr><td>${category.id}</td><td>${category.name}</td><td>safsdaf</td><td><button class="edit" id="${category.id}">Edit</button></td><td><button class="remove" id="${category.id}">Remove</button></td></tr>`;
};
export default categoryRow;
