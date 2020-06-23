const range = require('./range')

const flatArr = arr =>
  arr.reduce(
    (prev, curr) => prev.concat(Array.isArray(curr) ? flatArr(curr) : curr),
    [],
  )

console.log(flatArr([[1, 2], 3, [4, [[5, [[6]]]]]]))

module.exports = (() => {
  const flatOne = arr => [].concat(...arr)

  console.log(flatOne([1, [2, [3, [4, 5]]], 7, [8]]))
})()

module.exports = (() => {
  const flatOne = arr => arr.reduce((prev, curr) => prev.concat(curr), [])

  console.log(flatOne([1, [2, [3, [4, 5]]], 7, [8]]))
})()

module.exports = (() => {
  const flatOne = arr => [].concat(...arr)

  const flat = (arr, depth) => {
    if (depth === Infinity) {
      return flatArr(arr)
    }

    let result = arr
    range(0, depth).forEach(() => {
      result = flatOne(result)
    })
    return result
  }

  console.log(flat([1, [2, [3, [4, 5]]], 7, [8]], 2))
})()

module.exports = (() => {
  const flatOne = arr => [].concat(...arr)

  const flat = (arr, depth) =>
    depth === Infinity
      ? flatAll(arr)
      : depth === 1
      ? flatOne(arr)
      : flat(flatOne(arr), depth - 1)

  console.log(flat([1, [2, [3, [4, 5]]], 7, [8]], 2))
})()

module.exports = (() => {
  Array.prototype.flat = (() => {
    const flatOne = arr => [].concat(...arr)

    return function (depth) {
      return depth === Infinity
        ? flatArr(this)
        : depth === 1
        ? flatOne(this)
        : flatOne(this).flat(depth - 1)
    }
  })()

  console.log([1, [2, [3, [4, 5]]], 7, [8]].flat(2))
})()
