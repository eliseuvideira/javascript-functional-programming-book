const reverseStr = str => str.split('').reduceRight((x, y) => x + y, '')

console.log(reverseStr('reverse'))
