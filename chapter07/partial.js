const fetch = require('node-fetch')

;(async () => {
  const parameters = {
    method: 'GET',
    headers: {
      accept: 'text/html',
    },
  }

  // const getHtml = partial(fetch, undefined, parameters)

  // console.log(await getHtml('https://www.packtpub.com'))

  // console.log(
  //   await getHtml(
  //     'https://www.packtpub.com/web-development/mastering-javascript-functional-programming',
  //   ),
  // )
})()
;(() => {
  const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`

  const fix2And5 = (a, c, d) => nonsense(a, 22, c, d, 1960)

  console.log(fix2And5(1, 2, 3))

  const range = (start, stop) =>
    new Array(stop - start).fill(null).map((_, i) => start + i)

  const partialByEval = (fn, ...args) => {
    const rangeArgs = range(0, fn.length)

    const left = rangeArgs
      .filter(i => args[i] === undefined)
      .map(i => `x${i}`)
      .join(', ')

    const right = rangeArgs.map(i =>
      args[i] === undefined ? `x${i}` : args[i],
    )

    return eval(`(${left}) => ${fn.name}(${right})`)
  }

  const fix2And52 = partialByEval(
    nonsense,
    undefined,
    22,
    undefined,
    undefined,
    1960,
  )

  console.log(fix2And52.toString())
  console.log(fix2And52(1, 2, 3))
})()
