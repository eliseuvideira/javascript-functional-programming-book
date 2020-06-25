const invert = fn => (...args) => -fn(...args)

;(() => {
  const words = ['Hello', 'World', 'Javascript', 'Typescript']

  const asceding = (a, b) => a.localeCompare(b)

  console.log(words.sort(asceding))

  console.log(words.sort(invert(asceding)))
})()
