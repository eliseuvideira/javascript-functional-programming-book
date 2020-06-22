const lastString = (strings) => strings.sort().pop();
const lastString2 = (strings) => [...strings].sort().pop();

const countries = ["Argentina", "Brazil", "Uruguay"];
console.log(lastString(countries));
console.log(lastString(countries));
console.log(lastString(countries));

console.log(countries);

countries.push("Argentina", "Brazil", "Uruguay");
console.log(lastString2(countries));
console.log(lastString2(countries));
console.log(lastString2(countries));

console.log(countries);
