module.exports = (fn1, fn2) => {
  let toggle = true;

  return (...args) => {
    if (toggle) {
      fn1(...args);
    } else {
      fn2(...args);
    }
    toggle = !toggle;
  };
};
