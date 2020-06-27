const fs = require('fs')

const promisify = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, data) => (err ? reject(err) : resolve(data))),
  )

const callback = (err, data) => (err ? console.error(err) : console.log(data))

fs.readFile(__dirname + '/promisify.js', callback)

fs.readFile(__dirname + '/promisify2.js', callback)

const readFilePromise = promisify(fs.readFile)

;(async () => {
  try {
    console.log(await readFilePromise(__dirname + '/promisify.js'))
    console.log(await readFilePromise(__dirname + '/promisify2.js'))
  } catch (err) {
    console.error(err)
  }
})()
