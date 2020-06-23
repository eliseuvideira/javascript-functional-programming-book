const objCopy = obj => {
  let copy = Object.create(Object.getPrototypeOf(obj))

  Object.getOwnPropertyNames(obj).forEach(prop =>
    Object.defineProperty(
      copy,
      prop,
      Object.getOwnPropertyDescriptor(obj, prop),
    ),
  )

  return copy
}

const bank = { amount: 20.35, currency: '$' }

const bankCopy = objCopy(bank)

console.log({ bank, bankCopy }, bank === bankCopy)

bank.amount = 21

console.log({ bank, bankCopy }, bank === bankCopy)
