const True = x => y => x

const False = x => y => y

const Not = x => x(False)(True)

const And = x => y => x(y)(False)

const Or = x => y => x(x)(y)

const Xor = x => y => x(Not(y))(y)

module.exports = {
  True,
  False,
  Not,
  And,
  Or,
  Xor,
}
