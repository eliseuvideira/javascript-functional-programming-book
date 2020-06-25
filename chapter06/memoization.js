function fib(x) {
  if (x === 0) {
    return 0
  }
  if (x === 1) {
    return 1
  }
  return fib(x - 2) + fib(x - 1)
}

const memoize = fn => {
  const cache = {}
  return x => (x in cache ? cache[x] : (cache[x] = fn(x)))
}

const addTiming = fn => (...args) => {
  const start = Date.now()
  fn(...args)
  console.log(`${Date.now() - start}ms`)
}

fib = memoize(fib)

addTiming(fib)(35)
addTiming(fib)(35)
addTiming(fib)(30)
const memoizedFib = memoize(fib)
addTiming(memoizedFib)(35)
addTiming(memoizedFib)(35)
addTiming(memoizedFib)(30)
