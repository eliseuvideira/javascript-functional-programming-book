;(() => {
  const make = (a, b, c) => String(100 * a + 10 * b + c)

  const makeCurried = a => b => c => make(a, b, c)

  console.log(make(1, 2, 3))
  console.log(makeCurried(1)(2)(3))

  const makeUncurried = (a, b, c) => makeCurried(a)(b)(c)

  console.log(makeUncurried(1, 2, 3))
})()
;(() => {
  const tax = (rate, amount) => amount * (1 + rate / 100)

  console.log(tax(20, 500))
  console.log(tax(15, 200))

  const taxCurried = rate => amount => tax(rate, amount)

  const nationalTax = taxCurried(6)

  console.log(nationalTax(1500))
})()
;(() => {
  const logger = (severity, content) =>
    severity === 'error'
      ? console.error(severity, content)
      : console.log(severity, content)

  const loggerCurried = info => message => logger(info, message)

  const logInfo = loggerCurried('info')
  const logWarning = loggerCurried('warning')
  const logError = loggerCurried('error')

  logInfo('something')
  logWarning('something')
  logError('something')
})()
;(() => {
  const sum = (x, y) => {
    if (x != null && y != null) {
      return x + y
    }
    if (x != null) {
      return z => sum(x, z)
    }
    return sum
  }

  console.log(sum(3)(5))
  console.log(sum(3, 5))
  console.log(sum()(3)(5))
})()
