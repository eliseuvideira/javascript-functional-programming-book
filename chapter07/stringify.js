const toString = x => x.toString()

;(() => {
  const stringify = arr => arr.map(toString)

  console.log(stringify([1, 2, 3]))
})()
;(() => {
  const flip = fn => (x, y) => fn(y, x)

  const curry = fn => (fn.length === 0 ? fn() : p => curry(fn.bind(null, p)))

  const map = (arr, fn) => Array.prototype.map.bind(arr)(fn)

  const myMap = curry(flip(map))

  const stringify = myMap(toString)

  console.log(stringify([1, 2, 3]))
})()
