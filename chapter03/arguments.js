const listArguments = function () {
  console.log(arguments);

  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  const arr2 = Array.from(arguments);
  console.log(arr2);

  const arr3 = [...arguments];
  console.log(arr3);
};

listArguments(1, 2, 3, "js");

const listArguments2 = function (...args) {
  console.log(arguments);
  console.log(args);
};

listArguments2(4, 5, 6.2, true);
