const sum = (x) => (y) => (z) => x + y + z;

console.log(sum(3)(20)(18));

const sum1 = sum(1);

console.log(sum1(12)(3));

const sum3 = sum1(2);

console.log(sum3(5));
