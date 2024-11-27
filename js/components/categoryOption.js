const categoryOption = (category, isSelected = "") => {
  return `<option value="${category.id}" ${
    parseInt(isSelected) === category.id && "selected"
  }>${category.name}</option>`;
};
export default categoryOption;
