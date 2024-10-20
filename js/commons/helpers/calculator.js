export const minus = (total, value = 0) => {
  return total - value;
};
export const multiply = (price, quantity) => {
  return price * quantity;
};
export const devide = (total, devideBy) => {
  return total / devideBy;
};
export const discountCalculator = (originalPrice, soldPrice) => {
  return (soldPrice / originalPrice) * 100;
};
export const priceAfterDiscount = (originalPrice, discountPercent) => {
  return (originalPrice * discountPercent) / 100;
};
