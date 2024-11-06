export const CUSTOMER_TYPE = {
  REGULAR: 1,
  RARE: 2,
  NEW: 3,
};
export const CUSTOMER_CODE = {};
export const CUSTOMER_CLASS = {};
for (const [key, value] of Object.entries(CUSTOMER_TYPE)) {
  CUSTOMER_CODE[value] = key.substring(0, 3) + "_CUS";
}
const badge_color = {
  1: "badge-success",
  2: "badge-primary",
  3: "badge-danger",
};
for (const [key, value] of Object.entries(CUSTOMER_CLASS)) {
  CUSTOMER_CODE[value] = badge_color[value];
}
