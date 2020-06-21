const once = require("once");

const billUser = () => {
  console.log("Billing the user...");
};

const handler = once(billUser);

handler();
handler();
handler();
handler();
