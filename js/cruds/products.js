import category from "../data/categories.js";
import { getCatById } from "./category.js";
const products = JSON.parse(localStorage.getItem("productItems"));
export const getAll = () => {
  return products.map(
    ({ id, category_id, name, description, images, total, price }) => {
      return {
        id,
        category_id: 1,
        category: getCatById(category_id),
        name,
        description,
        images,
        total,
        price,
      };
    }
  );
};
export const create = (
  name,
  description,
  images,
  category_id,
  total,
  prices
) => {
  products.push({
    id: products.length + 1,
    category_id: category_id,
    name: name,
    description: description,
    images: images.length ? images : [],
    total: total,
    prices: prices,
  });
};
export const update = (
  id,
  name,
  description,
  images,
  category_id,
  total,
  prices
) => {
  const product = products.find((product) => product.id == id);
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
export const getById = (id) => {
  return products.find((product) => product.id == id);
};
export const getByname = (name) => {
  return products.filter((product) => product.name.includes(name));
};
export const remove = (id) => {
  products.pop((product) => product.id == id);
};
