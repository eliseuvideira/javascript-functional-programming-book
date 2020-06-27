const optimum = fn => arr => arr.reduce(fn)

const maximum = optimum((x, y) => (x > y ? x : y))
const minimum = optimum((x, y) => (x < y ? x : y))

const numbers = [22, 9, 60, 12, 4, 56]

console.log(maximum(numbers))
console.log(minimum(numbers))

const compareCards = (card1, card2) => {
  const point = (x, y) => (x > y ? 1 : 0)

  const win1 =
    point(card1.strength, card2.strength) +
    point(card1.agility, card2.agility) +
    point(card1.intelligence, card2.intelligence)

  const win2 =
    point(card1.strength, card2.strength) +
    point(card1.agility, card2.agility) +
    point(card1.intelligence, card2.intelligence)

  return win1 > win2 ? card1 : card2
}

function Card(name, strength, agility, intelligence) {
  this.name = name
  this.strength = strength
  this.agility = agility
  this.intelligence = intelligence
}

const cards = [
  new Card('Card1', 20, 15, 2),
  new Card('Card2', 12, 21, 8),
  new Card('Card3', 8, 11, 4),
  new Card('Card4', 6, 16, 38),
]

const bestCard = optimum(compareCards)

console.log(bestCard(cards))
