const every = (arr, fn) => arr.reduce((prev, curr) => prev && fn(curr), true)

console.log(every([2, 4], x => x % 2 === 0))
console.log(every([1, 4], x => x % 2 === 0))

module.exports = every
