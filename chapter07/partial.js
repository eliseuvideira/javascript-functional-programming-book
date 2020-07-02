const fetch = require('node-fetch')

;(async () => {
  const parameters = {
    method: 'GET',
    headers: {
      accept: 'text/html',
    },
  }

  const partial = (fn, ...args) => {
    const partialize = (...args1) => (...args2) => {
      let params1 = [...args1]
      let params2 = [...args2]
      let i
      for (i = 0; i < args.length && params2.length; i += 1) {
        if (params1[i] === undefined) {
          params1[i] = params2.shift()
        }
      }
      const params = [...params1, ...params2]
      return params.includes(undefined) || params.length < fn.length
        ? partialize(...params)
        : fn(...params)
    }
    return partialize(...args)
  }

  const getHtml = partial(fetch, undefined, parameters)

  console.log('here')

  console.log(
    await (
      await getHtml(
        'https://www.packtpub.com/web-development/mastering-javascript-functional-programming',
      )
    ).text(),
  )
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

  const partialByClosure = (fn, ...args) => {
    const partialize = (...args1) => (...args2) => {
      let params1 = [...args1]
      let params2 = [...args2]
      let i
      for (i = 0; i < args.length && params2.length; i += 1) {
        if (params1[i] === undefined) {
          params1[i] = params2.shift()
        }
      }
      const params = [...params1, ...params2]
      return params.includes(undefined) || params.length < fn.length
        ? partialize(...params)
        : fn(...params)
    }
    return partialize(...args)
  }

  const fix2And53 = partialByClosure(
    nonsense,
    undefined,
    22,
    undefined,
    undefined,
    1960,
  )

  console.log(fix2And53(1, 2, 3))
  console.log(fix2And53(1, 2)(3))
})()
