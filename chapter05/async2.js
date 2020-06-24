const timeout = async (time, value) => {
  await new Promise(resolve => setTimeout(() => resolve(), time))
  return value
}
;(async () => {
  const forEachAsync = (arr, fn) =>
    arr.reduce(
      (promise, value) => promise.then(() => fn(value)),
      Promise.resolve(),
    )

  await (async () => {
    console.log('forEach start')
    await forEachAsync([1, 2, 3, 4], async n =>
      console.log(await timeout(n * 250, n)),
    )
    console.log('forEach end')
  })()

  const mapAsync = (arr, fn) => Promise.all(arr.map(fn))

  await (async () => {
    console.log('map start')
    const mapped = await mapAsync([1, 2, 3, 4], async n => {
      return (await timeout(n * 250, n)) * 2
    })
    console.log(mapped)
    console.log('map end')
  })()

  const filterAsync = (arr, fn) =>
    mapAsync(arr, fn).then(res => arr.filter((_, i) => res[i]))

  await (async () => {
    console.log('filter start')
    const filtered = await filterAsync([1, 2, 3, 4, 5], async value => {
      await timeout(value * 250, value)
      return value % 2 === 0
    })
    console.log(filtered)
    console.log('filter end')
  })()
})()
