const accountsData = [
  {
    id: 'F220960K',
    balance: 1024,
  },
  {
    id: 'S120456T',
    balance: 2260,
  },
  {
    id: 'J140793A',
    balance: -38,
  },
  {
    id: 'M120396V',
    balance: -114,
  },
  {
    id: 'A120289L',
    balance: 55000,
  },
]

;(() => {
  const negatives = accountsData.filter(data => data.balance < 0)
  console.log(negatives)
})()
;(() => {
  const negatives = accountsData.reduce(
    (prev, curr) => (curr.balance < 0 ? prev.concat(curr) : prev),
    [],
  )
  console.log(negatives)
})()
