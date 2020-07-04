const { curry } = require('../functions/curry')
const { flip } = require('../functions/flip')
const { map } = require('../functions/map')
const fs = require('fs')

const markers = [
  { name: 'UY', lat: -34.9, lon: -56.2 },
  { name: 'AR', lat: -34.6, lon: -58.4 },
  { name: 'BR', lat: -15.8, lon: -47.9 },
  { name: 'BO', lat: -16.5, lon: -68.1 },
]

;() => {
  const getField = key => obj => obj[key]

  const myMap = curry(flip(map))

  const getLat = curry(getField)('lat')
  const getAllLats = myMap(getLat)

  const avgLat = pipeline(myMap(getField('lat')))
  const avgLon = pipeline(myMap(getField('lon')))
}

const getDir = path => fs.readdirSync(path)

const filterExt = ext => arr => arr.filter(s => s.endsWith(ext))

const filterPdf = filterExt('.pdf')

const count = arr => arr.length

;(() => {
  const pipeline = (...fns) =>
    fns.reduce((res, fn) => (...args) => fn(res(...args)))

  const countPdfFiles = path => pipeline(getDir, filterPdf, count)(path)

  console.log(countPdfFiles('/home/eliseu/Downloads'))
})()
;(() => {
  const pipeTwo = (result, f) => (...args) => f(result(...args))

  const pipeline = (...fns) => fns.reduce(pipeTwo)

  const countPdfFiles = path => pipeline(getDir, filterPdf, count)(path)

  console.log(countPdfFiles('/home/eliseu/Downloads'))
})()
