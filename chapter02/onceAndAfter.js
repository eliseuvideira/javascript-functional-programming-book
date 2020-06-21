module.exports = (fn, af) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      fn(...args);
    } else {
      af(...args);
    }
  };
};
