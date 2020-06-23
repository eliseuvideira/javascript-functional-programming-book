const range = (start, stop) =>
  new Array(stop - start).fill(0).map((_, i) => start + i)

const values = range(2, 6)

console.log(values)

module.exports = range
