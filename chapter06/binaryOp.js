const binaryOp = op => new Function('x', 'y', `return x ${op} y`)

const binaryLeftOp = (x, op) => y => binaryOp(op)(x, y)

const binaryRightOp = (op, y) => x => binaryOp(op)(x, y)

const isNegative1 = binaryLeftOp(0, '>')

const isNegative2 = binaryRightOp('<', 0)
