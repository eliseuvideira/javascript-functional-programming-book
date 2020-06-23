const sum = (x, y) => x + y

const sumArr = numbers => numbers.reduce(sum, 0)

console.log(sumArr([20, 44, 17, 28, 13, 11]))

const sumAndLog = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`)
  return x + y
}

const sumAndLogArr = numbers => numbers.reduce(sumAndLog, 0)

console.log(sumAndLogArr([27, 45, 17, 86, 24, 56]))
