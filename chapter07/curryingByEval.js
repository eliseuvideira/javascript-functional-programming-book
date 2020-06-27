const range = (start, stop) =>
  new Array(stop - start).fill(0).map((_, i) => start + i)

const curryingByEval1 = (fn, len = fn.length) => {
  const content = `${range(0, len)
    .map(i => `x${i}`)
    .join(' => ')} => ${fn.name}(${range(0, len)
    .map(i => `x${i}`)
    .join(', ')})`
  console.log(content)
  return eval(content)
}

const sum = (x, y) => x + y

const sumCurried = curryingByEval1(sum)

console.log(sumCurried(1)(2))

const curryingByEval2 = (fn, len = fn.length) => {
  const content = `${range(0, len)
    .map(i => `x${i}`)
    .join(' => ')} => (${fn.toString()})(${range(0, len)
    .map(i => `x${i}`)
    .join(', ')})`
  console.log(content)
  return eval(content)
}

const sumCurried2 = curryingByEval2(sum)

console.log(sumCurried2(1)(2))
