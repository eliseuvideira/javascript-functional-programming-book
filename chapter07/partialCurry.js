const createDate = (() => {
  const pad = (n, q) =>
    `${'0'.repeat(q - Math.floor(n).toString().length)}${Math.floor(
      n,
    ).toString()}`
  return (y, m, d) => new Date(`${pad(y, 4)}/${pad(m, 2)}/${pad(d, 2)}`)
})()

console.log(createDate(2020, 7, 4))
;(() => {
  const partialCurry = fn =>
    fn.length === 0 ? fn() : (...p) => partialCurry(fn.bind(null, ...p))

  const partialCreateDate = partialCurry(createDate)

  const july2020 = partialCreateDate(2020, 7)

  console.log(july2020(3))
  console.log(july2020(4))
})()
;(() => {
  const partialCurry = (fn, len = fn.length) =>
    len === 0
      ? fn()
      : (...p) => partialCurry(fn.bind(null, ...p), len - p.length)

  const partialCreateDate = partialCurry(createDate)

  console.log(partialCreateDate(2020)(7)(4))
  console.log(partialCreateDate(2020)(7, 4))

  const sum = (...args) => args.reduce((x, y) => x + y, 0)

  const sum5 = partialCurry(sum, 5)

  console.log(sum5(1, 2)(3)(4, 5))
})()
;(() => {
  const partialCurry = (fn, len = fn.length) => {
    const curryize = (...args1) => (...args2) => {
      const params = [...args1, ...args2]
      return (params.length < len ? curryize : fn)(...params)
    }

    return curryize()
  }

  const partialCreateDate = partialCurry(createDate)
  console.log(partialCreateDate(2020)(7)(4))
  console.log(partialCreateDate(2020)(7, 4))
})()
