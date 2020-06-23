const markers = [
  { name: 'UY', lat: -34.9, lon: -56.2 },
  { name: 'AR', lat: -34.6, lon: -58.4 },
  { name: 'BR', lat: -15.8, lon: -47.9 },
  { name: 'BO', lat: -16.5, lon: -68.1 },
]

;(() => {
  const brazil = markers.find(marker => marker.name === 'BR')
  console.log(brazil)
})()
;(() => {
  const brazilIndex = markers.findIndex(marker => marker.name === 'BR')
  console.log(brazilIndex)
})()
;(() => {
  const nanIndex = [1, 2, NaN, 4].findIndex(x => isNaN(x))
  console.log(nanIndex)
})()
;(() => {
  const find = (arr, fn) =>
    arr.reduce(
      (prev, curr) => (prev === undefined && fn(curr) ? curr : prev),
      undefined,
    )

  const brazil = find(markers, marker => marker.name === 'BR')
  console.log(brazil)
})()
;(() => {
  const findIndex = (arr, fn) =>
    arr.reduce(
      (prev, curr, index) => (prev === -1 && fn(curr) ? index : prev),
      -1,
    )

  const brazil = findIndex(markers, marker => marker.name === 'BR')
  const mexico = findIndex(markers, marker => marker.name === 'MX')

  console.log(brazil)
  console.log(mexico)
})()
