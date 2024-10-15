export const create = (list, name, description) => {
  list.push({
    id: list.length + 1,
    name: name,
    description: description,
  });
};
export const update = (list, id, name, description) => {
  const category = list.find((cat) => cat.id == id);
  category.name = name != "" ? name : category.name;
  category.description = description != "" ? description : category.description;
};
export const getById = (list, id) => {
  return list.find((cat) => cat.id === id);
};
export const getByname = (list, name) => {
  return list.filter((cat) => cat.name.includes(name));
};
export const remove = (list, id) => {
  list.pop((cat) => cat.id == id);
};
