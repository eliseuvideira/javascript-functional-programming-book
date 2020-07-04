const { sum } = require('./sum')

exports.avg = arr => arr.reduce(sum, 0) / arr.length
