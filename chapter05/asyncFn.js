const asyncFn = async (timeout, value) =>
  new Promise(resolve => setTimeout(() => resolve(value), timeout))

const logResult = (() => {
  let counter = 0
  return async fn => {
    const value = ++counter
    console.time(`duration ${value}`)
    await fn()
    console.timeEnd(`duration ${value}`)
  }
})()

;(async () => {
  await logResult(async () => {
    console.log('start')
    await asyncFn(200, 'Hello, World!')
    console.log('end')
  })

  await logResult(async () => {
    let i = 0
    console.log('start sequential')
    console.log(await asyncFn(200, ++i))
    console.log(await asyncFn(200, ++i))
    console.log(await asyncFn(200, ++i))
    console.log('end sequential')
  })

  await logResult(
    (() => {
      const range = (start, end) =>
        new Array(end - start).fill(0).map((_, i) => start + i)
      return async () => {
        console.log('start foreach')
        range(0, 5).forEach(async x => {
          console.log(await asyncFn(200, x))
        })
        console.log('end foreach')
      }
    })(),
  )
})()
