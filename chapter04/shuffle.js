const shuffle = (arr) => {
  const len = arr.length;
  let i;
  for (i = 0; i < len; i += 1) {
    const pos = Math.floor(Math.random() * (len - i));
    [arr[i], arr[i + pos]] = [arr[i + pos], arr[i]];
  }
  return arr;
};

const items = [10, 20, 122, 235, 887, 1204];
shuffle(items);

console.log(items);

module.exports = shuffle;
