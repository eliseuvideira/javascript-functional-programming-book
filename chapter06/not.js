const not = fn => (...args) => !fn(...args)

;(() => {
  const isNegative = x => x < 0

  console.log([-2, -1, 0, 1, 2].filter(not(isNegative)))
})()
;(() => {
  const isNegative = x => x < 0

  Array.prototype.filterOut = function (fn) {
    return this.filter(not(fn))
  }

  console.log([-2, -1, 0, 1, 2].filterOut(isNegative))
})()
