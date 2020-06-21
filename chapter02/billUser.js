const billUser = ((clicked) => {
  return () => {
    if (clicked) {
      console.log("Already billed");
    } else {
      clicked = true;
      console.log("Billing the user...");
    }
  };
})(false);

billUser();
billUser();
billUser();
billUser();
