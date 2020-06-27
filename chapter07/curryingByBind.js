const curryByBind = fn =>
  fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p))

function sum(x, y) {
  return x + y
}

console.log(curryByBind(sum)(2)(3))
;(() => {
  const make = (a, b, c) => String(100 * a + 10 * b + c)

  const f1 = curryByBind(make)
  console.log(f1)

  const f2 = f1(6)
  console.log(f2)

  const f3 = f2(5)
  console.log(f3)

  const f4 = f3(8)
  console.log(f4)
})()
