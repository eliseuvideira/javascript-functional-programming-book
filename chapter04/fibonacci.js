console.log("first");
(() => {
  const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

  console.log(fib(10));
  console.log(fib(15));

  console.time("fib");
  fib(30);
  console.timeEnd("fib");

  console.time("fib");
  fib(37);
  console.timeEnd("fib");
})();

console.log("second");
(() => {
  const cache = {};
  const fib = (n) => {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    if (n <= 1) {
      cache[n] = 1;
    } else {
      cache[n] = fib(n - 2) + fib(n - 1);
    }
    return cache[n];
  };

  console.log(fib(10));
  console.log(fib(15));

  console.time("fib");
  fib(30);
  console.timeEnd("fib");

  console.time("fib");
  fib(1500);
  console.timeEnd("fib");
})();

(() => {
  const fib = (n, a = 0, b = 1) => (n === 0 ? a : fib(n - 1, b, a + b));
  console.log(fib(100));
  console.time("fib");
  fib(1500);
  console.timeEnd("fib");
})();
