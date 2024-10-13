import { getById } from "./category";
import category from "../data/categories";
export const create = (
  list,
  name,
  description,
  images,
  category_id,
  total,
  prices
) => {
  list.push({
    id: list.length + 1,
    category_id: category_id,
    name: name,
    description: description,
    images: images.length ? images : [],
    total: total,
    prices: prices,
  });
};
export const update = (
  list,
  id,
  name,
  description,
  images,
  category_id,
  total,
  prices
) => {
  const product = list.find((product) => product.id == id);
  product.name = name != "" ? name : product.name;
  product.description = description != "" ? description : product.description;
  product.images = images.length ? [...images] : product.images;
  product.category_id = getById(category, category_id)
    ? category_id
    : product.category_id;
  product.total = total > 0 && total != product.total ? total : product.total;
  product.prices =
    prices > 0 && prices != product.prices ? prices : product.prices;
};
export const getById = (list, id) => {
  return list.find((product) => product.id == id);
};
export const getByname = (list, name) => {
  return list.filter((product) => product.name.includes(name));
};
export const remove = (list, id) => {
  list.pop((product) => product.id == id);
};
