;(() => {
  const doSomething = (x = 0, y = 0) => {
    const value = Math.floor(Math.random() * 1000) + x
    const power = Math.floor(Math.random() * 4) + y
    return value ** power
  }

  console.log(doSomething())

  const addLogging = fn => (...args) => {
    console.log(`entering ${fn.name}: ${args}`)
    const value = fn(...args)
    console.log(`exiting ${fn.name}: ${value}`)
    return value
  }

  const doSomethingWithLog = addLogging(doSomething)

  doSomethingWithLog(1, 2)

  function subtract(x, y) {
    y = changeSign(y)
    return x + y
  }

  function changeSign(x) {
    return -x
  }

  subtract = addLogging(subtract)

  changeSign = addLogging(changeSign)

  console.log(subtract(7, 5))
})()
;(() => {
  const addLogging = fn => (...args) => {
    console.log(`entering ${fn.name}: ${args}`)
    try {
      const value = fn(...args)
      console.log(`exiting ${fn.name}: ${value}`)
      return value
    } catch (err) {
      console.log(`exiting ${fn.name}: threw ${err}`)
      throw err
    }
  }

  function doSomethingThatThrowsError(shouldThrow) {
    if (shouldThrow) {
      throw new Error('error')
    }
    return Math.floor(Math.random() * 20)
  }

  doSomethingThatThrowsError = addLogging(doSomethingThatThrowsError)

  // console.log(doSomethingThatThrowsError(false))
  // console.log(doSomethingThatThrowsError(true))
})()
;(() => {
  const addLogging = (fn, logger = console.log) => (...args) => {
    logger(`entering ${fn.name}: ${args}`)
    try {
      const value = fn(...args)
      logger(`exiting ${fn.name}: ${value}`)
      return value
    } catch (err) {
      logger(`exiting ${fn.name}: threw ${err}`)
      throw err
    }
  }
})()
;(() => {
  const getTime = () => Date.now()
  const getOutput = (name, content, start, end) =>
    console.log(`${name}`, content, `${end - start}ms`)

  const addTiming = (() => {
    return (fn, time = getTime, output = getOutput) => (...args) => {
      const start = getTime()
      try {
        const value = fn(...args)
        output(fn.name, 'no errors', start, time())
      } catch (err) {
        output(fn.name, `exception thrown: ${err.message}`, start, time())
        throw err
      }
    }
  })()

  function divide(x, y) {
    if (y === 0) {
      throw new Error('Divide by zero')
    }
    return x / y
  }

  divide = addTiming(divide)

  console.log(divide(5, 2))

  console.log(divide(2, 0))
})()
