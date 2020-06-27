const demethodize1 = fn => (arg0, ...args) => fn.apply(arg0, args)

const demethodize2 = fn => (arg0, ...args) => fn.call(arg0, ...args)

const demethodize3 = fn => (...args) => fn.bind(...args)()

;(() => {
  const word = 'functional'
  const upperWord = [...word].map(x => x.toUpperCase())

  console.log(upperWord)

  const map = demethodize3(Array.prototype.map)
  const toUpperCase = demethodize3(String.prototype.toUpperCase)

  const upperWord2 = map(word, toUpperCase)

  console.log(upperWord2)

  const toLocaleString = demethodize3(Number.prototype.toLocaleString)

  const numbers = [2209.6, 124.56, 1048576]

  console.log(map(numbers, toLocaleString))
})()
