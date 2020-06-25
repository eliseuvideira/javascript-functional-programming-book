const { True, False, Not, And, Or, Xor } = require('./booleans')

describe('Not', () => {
  it('works', () => {
    expect.assertions(2)
    expect(Not(True)).toBe(False)
    expect(Not(False)).toBe(True)
  })
})

describe('And', () => {
  it('works', () => {
    expect.assertions(4)
    expect(And(True)(True)).toBe(True)
    expect(And(True)(False)).toBe(False)
    expect(And(False)(True)).toBe(False)
    expect(And(False)(False)).toBe(False)
  })
})

describe('Or', () => {
  it('works', () => {
    expect.assertions(4)
    expect(Or(True)(True)).toBe(True)
    expect(Or(True)(False)).toBe(True)
    expect(Or(False)(True)).toBe(True)
    expect(Or(False)(False)).toBe(False)
  })
})

describe('Xor', () => {
  it('works', () => {
    expect.assertions(4)
    expect(Xor(True)(True)).toBe(False)
    expect(Xor(True)(False)).toBe(True)
    expect(Xor(False)(True)).toBe(True)
    expect(Xor(False)(False)).toBe(False)
  })
})
