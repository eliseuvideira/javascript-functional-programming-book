module.exports = (() => {
  const a = [[1, 2], [3, 4, [5, 6, 7]], 8, [[[9, 10]]]]

  console.log(a.flat())

  console.log(a.flat(2))

  console.log(a.flat(Infinity))
})()

module.exports = (() => {
  const distances = [
    [0, 20, 35, 40],
    [20, 0, 10, 50],
    [35, 10, 0, 30],
    [40, 50, 30, 0],
  ]

  const maxDist1 = Math.max(...distances.flat())

  const maxDist2 = distances
    .flat()
    .reduce((prev, curr) => Math.max(prev, curr), 0)

  console.log(maxDist1, maxDist2)
})()

module.exports = (() => {
  const apiAnswer = [
    {
      country: 'AR',
      name: 'Argentine',
      states: [
        {
          state: '1',
          name: 'Buenos Aires',
          cities: [{ city: 3846864, name: 'Lincoln' }],
        },
      ],
    },
    {
      country: 'GB',
      name: 'Great Britain',
      states: [
        {
          state: 'ENG',
          name: 'England',
          cities: [{ city: 2644487, name: 'Lincoln' }],
        },
      ],
    },
    {
      country: 'US',
      name: 'United States of America',
      states: [
        {
          state: 'CA',
          name: 'California',
          cities: [{ city: 5072006, name: 'Lincoln' }],
        },
        {
          state: 'IL',
          name: 'Illinois',
          cities: [
            { city: 4899911, name: 'Lincoln Park' },
            { city: 4899966, name: 'Lincoln Square' },
          ],
        },
      ],
    },
  ]

  console.log(
    apiAnswer
      .map(x => x.states)
      .flat()
      .map(y => y.cities)
      .flat(),
  )

  console.log(
    apiAnswer
      .flatMap(countries => countries.states)
      .flatMap(states => states.cities),
  )
})()

module.exports = (() => {
  const names = [
    'Winston Spencer Churchill',
    'Plato',
    'Abraham Lincoln',
    'Socrates',
    'Charles Darwin',
  ]

  const lastNames = names.flatMap(name => {
    const s = name.split(' ')
    return s.length === 1 ? [] : s.splice(1)
  })

  console.log(lastNames)
})()

module.exports = (() => {
  const gettysburg = [
    'Four score and seven years ago our fathers brought forth, ',
    'on this continent, a new nation, conceived in liberty, and ',
    'dedicated to the proposition that all men are created equal.',
    'Now we are engaged in a great civil war, testing whether that ',
    'nation, or any nation so conceived and so dedicated, can long ',
    'endure.',
    'We are met on a great battle field of that war.',
    'We have come to dedicate a portion of that field, as a final ',
    'resting place for those who here gave their lives, that that ',
    'nation might live.',
    'It is altogether fitting and proper that we should do this.',
    'But, in a larger sense, we cannot dedicate, we cannot consecrate, ',
    'we cannot hallow, this ground.',
    'The brave men, living and dead, who struggled here, have ',
    'consecrated it far above our poor power to add or detract.',
    'The world will little note nor long remember what we say here, ',
    'but it can never forget what they did here.',
    'It is for us the living, rather, to be dedicated here to the ',
    'unfinished work which they who fought here have thus far so nobly ',
    'advanced.',
    'It is rather for us to be here dedicated to the great task ',
    'remaining before us— that from these honored dead we take increased ',
    'devotion to that cause for which they here gave the last full ',
    'measure of devotion— that we here highly resolve that these dead ',
    'shall not have died in vain— that this nation, under God, shall have ',
    'a new birth of freedom- and that government of the people, by the ',
    'people, for the people, shall not perish from the earth.',
  ]

  console.log(gettysburg.flatMap(s => s.split(' ')).length)
})()
