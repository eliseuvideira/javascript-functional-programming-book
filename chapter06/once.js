const once = fn => {
  let done = false
  let result
  return (...args) => {
    if (!done) {
      done = true
      result = fn(...args)
    }
    return result
  }
}

;(() => {
  const doSomething = x => Math.random() * Math.random() * 1000

  console.log(doSomething())
  console.log(doSomething())
  console.log(doSomething())

  const doSomethingOnce = once(doSomething)

  console.log(doSomethingOnce())
  console.log(doSomethingOnce())
  console.log(doSomethingOnce())
})()
