import { CUSTOMER_CODE } from "../../constants/customer.js";

function uidGenerator() {
  const uid = new Date().getTime();
  return uid;
}

function orderIdGenerator(CUSTOMER_TYPE) {
  return CUSTOMER_CODE[CUSTOMER_TYPE] + "_" + uidGenerator();
}

function formatDate(date) {
  const newDate = typeof date === "string" ? new Date(date) : date;
  return newDate.toDateString();
}

export { uidGenerator, formatDate, orderIdGenerator };
