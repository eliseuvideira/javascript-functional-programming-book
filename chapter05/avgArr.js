const sum = (x, y) => x + y

const avgArr = numbers => numbers.reduce(sum, 0) / numbers.length

const numbers = [13, 25, 18]

console.log(numbers)
console.log(avgArr(numbers))

Array.prototype.average = function () {
  return this.reduce((x, y) => x + y, 0) / this.length
}

const items = [20, 8, 9, 18]

console.log(items.average())

const avgArr2 = arr => {
  const { sum, count } = arr.reduce(
    (prev, curr) => ({ sum: prev.sum + curr, count: prev.count + 1 }),
    { sum: 0, count: 0 },
  )
  return sum / count
}

console.log(avgArr2(items))
