const getField = attr => obj => obj[attr]

const sum = (x, y) => (x = y)

const average = numbers => numbers.reduce(sum, 0) / numbers.length

;(() => {
  const markers = [
    { name: 'UY', lat: -34.9, lon: -56.2 },
    { name: 'AR', lat: -34.6, lon: -58.4 },
    { name: 'BR', lat: -15.8, lon: -47.9 },
    { name: 'BO', lat: -16.5, lon: -68.1 },
  ]

  const avgLat = average(markers.map(getField('lat')))
  const avgLon = average(markers.map(getField('lon')))

  console.log({ avgLat, avgLon })
})()
