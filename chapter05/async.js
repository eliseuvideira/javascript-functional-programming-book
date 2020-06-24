const reduceAsync = (arr, fn, initial) =>
  arr.reduce(
    (prev, curr, index) => prev.then(x => fn(x, curr, index)),
    Promise.resolve(initial),
  )

const forEachAsync = (arr, fn) =>
  arr.reduce(
    (promise, value) => promise.then(() => fn(value)),
    Promise.resolve(),
  )

const filterAsync = (arr, fn) =>
  reduceAsync(arr, async (x, y) => ((await fn(y)) ? x.concat(y) : x), [])

const timeout = async value => {
  await new Promise(resolve =>
    setTimeout(() => resolve(), 100 * Math.floor(Math.random() * 20)),
  )
  console.log(value)
}

;(async () => {
  const sum = await reduceAsync([1, 2, 3, 5], (x, y) => x + y, 0)

  console.log(sum)

  await forEachAsync([0, 1], timeout)

  const x = await filterAsync([5, 1], async x => {
    await timeout(x)
    return x === 1
  })

  console.log('filter', x)
})()
