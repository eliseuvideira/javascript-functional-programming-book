const some = (arr, fn) => arr.reduce((prev, curr) => prev || fn(curr), false)

console.log(some([2, 3], x => x % 2 === 0))
console.log(some([1, 3], x => x % 2 === 0))

module.exports = some
