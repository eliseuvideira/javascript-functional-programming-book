const fact = (n) => n <= 0 ? 1 : n * fact(n - 1);

const number = process.argv[2] || 0;

console.log(fact(number));
