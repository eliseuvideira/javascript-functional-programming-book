const unary = fn => (...args) => fn(args[0])

;(() => {
  console.log(['10', '-2', '40.6'].map(parseInt))

  console.log(['10', '-2', '40.6'].map(unary(parseInt)))
})()

const binary = fn => (...args) => fn(args[0], args[1])

const ternary = fn => (...args) => fn(args[0], args[1], args[2])

const arity = (fn, n) => (...args) => fn(...args.slice(0, n))

;(() => {
  console.log(['10', '-2', '40.6'].map(parseInt))

  console.log(['10', '-2', '40.6'].map(unary(parseInt)))

  console.log(['10', '-2', '40.6'].map(arity(parseInt, 1)))
})()
