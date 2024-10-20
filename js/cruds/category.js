const categories = JSON.parse(localStorage.getItem("categories"));
export const create = (name, description) => {
  categories.push({
    id: list.length + 1,
    name: name,
    description: description,
  });
  localStorage.setItem("categories", JSON.stringify(categories));
};
export const update = (id, name, description) => {
  const category = categories.find((cat) => cat.id == id);
  category.name = name != "" ? name : category.name;
  category.description = description != "" ? description : category.description;
  localStorage.setItem("categories", JSON.stringify(categories));
};
export const getCatById = (id) => {
  return categories.find((cat) => cat.id === id);
};
export const getByname = (name) => {
  return categories.filter((cat) => cat.name.includes(name));
};
export const remove = (id) => {
  categories.pop((cat) => cat.id == id);
  localStorage.setItem("categories", JSON.stringify(categories));
};
