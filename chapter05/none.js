const numbers = [-1, 2, 4, -22, 18, -2]

;(() => {
  const hasNegative = numbers.some(number => number < 0)
  console.log(hasNegative)
})()
;(() => {
  const allIntegers = numbers.every(number => Number.isInteger(number))
  console.log(allIntegers)
})()
;(() => {
  const none = (arr, fn) => arr.every(item => !fn(item))
  const noOdd = none(numbers, number => number % 2 !== 0)
  console.log(noOdd)
})()
