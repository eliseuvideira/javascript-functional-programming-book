const range = require('./range')

const factorial = n => range(1, n + 1).reduce((x, y) => x * y, 1)

console.log(factorial(5))
console.log(factorial(10))
console.log(factorial(0))

const ALPHABET = range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1).map(x =>
  String.fromCharCode(x),
)

console.log(ALPHABET)
